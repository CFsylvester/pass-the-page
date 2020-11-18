const router = require('express').Router();
const { Story, Author, Chapter } = require('../models');
const userAuth = require('../utils/userAuth');

// Render the dashboard of the current logged in user and display their info
router.get('/', userAuth, (req, res) => {
    console.log('========= Dashboard Rendered =========');
    
    // Story.findAll({
    //     where: {
    //         // use the ID from the session
    //         author_id: req.session.author_id
    //     },
    //     attributes: [
    //         'id', 
    //         'completed', 
    //         'story_title', 
    //         'story_text', 
    //         'author_id'
    //     ],
    //     include: [
    //         // {
    //         //     model: Chapter,
    //         //     attributes: ['id', 'chapter_text', 'author_id', 'story_id', 'created_at'],
    //         //     include: {
    //         //         model: Author,
    //         //         attributes: ['username']
    //         //     }
              
    //         // }, 
    //         {
    //           model: Author,
    //           attributes: ['id', 'username', 'email', 'title', 'bio']
    //         }
    //     ]
    // })
    Author.findOne({
        where: {
            username: req.session.username
        },
        include: [
            {
                model: Story, 
                attributes: ['id', 'completed', 'story_title', 'story_text', 'author_id'],
                include: {
                    model: Chapter,
                }
            }
        ]
    })
    .then(authorData => {
        const author = authorData.get({ plain: true });
            // const author = authorData.map(data=> data.get({ plain: true }));
            // const stories = storyData.map(story => story.get({ plain: true }));
        res.render('dashboard', { author, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
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

module.exports = router;