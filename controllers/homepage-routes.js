const router = require('express').Router();
const { Author, Chapter } = require('../models');
const Stories = require('../models');
const userAuth = require('../utils/userAuth');

// Route to get completed stories
router.get('/', (req, res) => {
    console.log('========= Homepage rendered =========');
    Stories.findAll({
        include: [
            {
                model: Author,
                attributes: ['username', 'title', 'createdAt']
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
            res.render('homepage', { stories, loggedIn: req.session.loggedIn });
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