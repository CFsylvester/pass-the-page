const router = require('express').Router();
// const sequelize = require('../config/connection');
const { Story, Author, Chapter } = require('../models');
// const userAuth = require('../utils/userAuth');
// const analyzeText = require('../utils/natural');

// Route to get completed stories
// router.get('/', (req, res) => {
//     console.log('========= Homepage rendered =========');
//     Story.findAll({
//         // where: {
//         //     completed: false
//         // },
//         // order: [['createdAt', 'DESC']],
//         include: [
//             {
//                 model: Author,
//                 attributes: ['username', 'title', 'createdAt']
//             },
//             {
//                 model: Chapter,
//                 attributes: ['chapter_text'],
//                 include: [
//                     {
//                         model: Author,
//                         attributes: ['username']
//                     }
//                 ]
//             }
//         ]
//     })
//         .then(storyData => {
//             const closedStories = storyData.map(story => story.get({ plain: true }));
//             res.render('homepage', { closedStories, analyzeText, loggedIn: req.session.loggedIn });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// Route to get open stories for other users to contribute to
router.get('/', (req, res) => {
    console.log('========= Homepage rendered =========');
    Story.findAll({
        // where: {
        //     completed: false
        // },
        // order: [['createdAt', 'DESC']],
        attributes: [
            'id',
            'completed',
            'story_title',
            'story_text',
            'author_id',
            'created_at',
        ],
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
                // analyzeText, 
                loggedIn: req.session.loggedIn 
            });
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