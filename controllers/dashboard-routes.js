const router = require('express').Router();
const { Author } = require('../models');

router.get('/', (req, res) => {
    console.log('========= Dashboard Rendered =========');

    Author.findOne({
        where: {
            username: req.session.username
        }
    })
        .then(userData => {
            if (userData) {
                const user = userData.get({ plain: true });

                res.render('dashboard', {
                    user,
                    loggedIn: req.session.loggedIn
                });
            } else {
                res.status(404).end();
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;