const router = require('express').Router();
const { Author, Story, Chapter } = require('../models');
const userAuth = require('../utils/userAuth');

// Render the dashboard of the current logged in user and display their info
router.get('/', userAuth, (req, res) => {
    console.log('========= Dashboard Rendered =========');

    Author.findOne({
        where: {
            username: req.session.username
        }
    })
        .then(authorData => {
            if (authorData) {
                const author = authorData.get({ plain: true });
                console.log('line 45:', author);

                Story.findAll({
                    where: {
                        author_id: req.session.author_id
                    },
                    order: [['created_at', 'DESC']],
                    include: [
                        {
                            model: Author,
                            attributes: ['id', 'username', 'title', 'bio', 'email']
                        },
                        {
                            model: Chapter,
                            attributes: ['chapter_text'],
                            include: [
                                {
                                    model: Author,
                                    attributes: ['username']
                                }
                            ]
                        }
                    ]
                })
                    .then(storyData => {
                        const stories = storyData.map(story => story.get({ plain: true }));
                        console.log('line 71 stories:', stories);
                        // console.log('title', stories.story_title);
                        res.render('dashboard', {
                            stories,
                            author,
                            loggedIn: req.session.loggedIn
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





// Render a page for the user to update their info
router.get('/edit-user/:id', userAuth, (req, res) => {
    Author.findOne({
        where: {
            id: req.session.author_id
        },
        attributes: ['username', 'email', 'title', 'bio']
    })
        .then(authorData => {
            if (authorData) {
                const author = authorData.get({ plain: true });
                res.render('edit-user', { author, loggedIn: req.session.loggedIn });
            } else {
                res.status(404).json({ message: "We couldn't find your info." });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// THIS ROUTE NOT WORKING
// Get the logged in user's stories to display on their dashboard
router.get('/', userAuth, (req, res) => {
    console.log('line 56:', req.session);

    Story.findAll({
        where: {
            author_id: req.session.author_id
        },
        order: [['created_at', 'DESC']],
        include: [
            {
                model: Author,
                attributes: ['id', 'username', 'title', 'bio', 'email']
            },
            {
                model: Chapter,
                attributes: ['chapter_text'],
                // include: [
                //     {
                //         model: Author,
                //         attributes: ['username']
                //     }
                // ]
            }
        ]
    })
        .then(storyData => {
            const stories = storyData.map(story => story.get({ plain: true }));
            console.log('\n line 83 storyData', stories);
            res.render('dashboard', { stories, loggedIn: true });
        }).
        catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;