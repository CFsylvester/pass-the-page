const router = require('express').Router();
// const sequelize = require('../config/connection');
const { Story, Author, Chapter } = require('../models');
const userAuth = require('../utils/userAuth');
// const analyzeText = require('../utils/natural');

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
            res.render('homepage', {
                stories,
                loggedIn: req.session.loggedIn
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
            res.render('all-stories', {
                stories,
                loggedIn: req.session.loggedIn
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
            res.render('open-stories', {
                stories,
                loggedIn: req.session.loggedIn
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
            'completed', 
            'id',
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
                console.log(story);
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
                console.log(story);
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

module.exports = router;