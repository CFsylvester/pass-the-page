const router = require('express').Router();
const { Author } = require('../models');
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

                res.render('dashboard', {
                    author,
                    loggedIn: req.session.loggedIn
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

module.exports = router;