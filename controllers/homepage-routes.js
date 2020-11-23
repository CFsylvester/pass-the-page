const router = require('express').Router();
const { Story, Author, Chapter } = require('../models');
const userAuth = require('../utils/userAuth');
const analyzeText = require('../utils/natural');

// Route to get stories for homepage
router.get('/', (req, res) => {
    Story.findAll({
        limt: 6,
        order: [['createdAt', 'DESC']],
        include: [
            {
                model: Author,
                attributes: ['id', 'username', 'title', 'createdAt']
            },
            {
                model: Chapter,
                attributes: ['chapter_text'],
                include: {
                    model: Author,
                    attributes: ['username']
                }
            }
        ]
    })
        .then(storyData => {
            const stories = storyData.map(story => story.get({ plain: true }));
            analyzeText(stories)
                .then(analyzedData => {
                    res.render('homepage', {
                        stories: analyzedData,
                        loggedIn: req.session.loggedIn
                    });
                });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Route for viewing all-stories page
router.get('/all-stories', (req, res) => {
    Story.findAll({
        order: [['createdAt', 'DESC']],
        include: [
            {
                model: Author,
                attributes: ['id', 'username', 'title', 'createdAt']
            },
            {
                model: Chapter,
                attributes: ['chapter_text'],
                include: {
                    model: Author,
                    attributes: ['username']
                }
            }
        ]
    })
        .then(storyData => {
            const stories = storyData.map(story => story.get({ plain: true }));
            analyzeText(stories)
                .then(analyzedData => {
                    res.render('all-stories', {
                        stories: analyzedData,
                        loggedIn: req.session.loggedIn
                    });
                });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Route for viewing all-open-stories page
router.get('/open-stories', (req, res) => {
    Story.findAll({
        where: {
            completed: false
        },
        order: [['createdAt', 'DESC']],
        include: [
            {
                model: Author,
                attributes: ['id', 'username', 'title', 'createdAt']
            },
            {
                model: Chapter,
                attributes: ['chapter_text'],
                include: {
                    model: Author,
                    attributes: ['username']
                }
            }
        ]
    })
        .then(storyData => {
            const stories = storyData.map(story => story.get({ plain: true }));
            analyzeText(stories)
                .then(analyzedData => {
                    res.render('open-stories', {
                        stories: analyzedData,
                        loggedIn: req.session.loggedIn
                    });
                });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Chapter Contribute
router.get('/add-chapter/:id', userAuth, (req, res) => {
    Story.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'completed',
            'story_title',
            'story_text',
            'author_id',
        ],
        include: [
            {
                model: Author,
                attributes: ['id', 'username', 'created_at']
            },
            {
                model: Chapter,
                attributes: ['chapter_title', 'chapter_text', 'author_id', 'created_at'],
                include: {
                    model: Author,
                    attributes: ['id', 'username']
                }
            }
        ]
    })
        .then(storyData => {
            if (storyData) {
                const story = storyData.get({ plain: true });
                res.render('add-chapter', { story, loggedIn: req.session.loggedIn });
            } else {
                res.status(404).json({ message: "We couldn't find the story you requested." });
            }

        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//Read Clicked on Story
router.get('/read-story/:id', (req, res) => {
    Story.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'story_title',
            'story_text',
            'author_id',
            'created_at'
        ],
        include: [
            {
                model: Author,
                attributes: ['id', 'username']
            },
            {
                model: Chapter,
                attributes: ['chapter_title', 'chapter_text', 'author_id', 'created_at'],
                include: {
                    model: Author,
                    attributes: ['id', 'username']
                }
            }
        ]
    })
        .then(storyData => {
            if (storyData) {
                const story = storyData.get({ plain: true });
                res.render('read-story', { story, loggedIn: req.session.loggedIn });
            } else {
                res.status(404).json({ message: "We couldn't find the story you requested." });
            }

        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// User login
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login');
    console.log('========= Login Page Rendered =========');
});

// Signup page route
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }
    res.render('signup');
});

// Route to view a user's profile
router.get('/:username', (req, res) => {
    Author.findOne({
        where: {
            username: req.params.username
        }
    })
        .then(authorData => {
            if (authorData) {
                const author = authorData.get({ plain: true });
                Story.findAll({
                    where: {
                        author_id: authorData.id
                    },
                    order: [['created_at', 'DESC']],
                })
                    .then(storyData => {
                        const stories = storyData.map(story => story.get({ plain: true }));
                        analyzeText(stories)
                            .then(analyzedData => {
                                res.render('profile', {
                                    author,
                                    stories: analyzedData,
                                    loggedIn: req.session.loggedIn
                                });
                            });
                    });
            } else {
                res.status(404).json({ message: "We couldn't find your info." });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;