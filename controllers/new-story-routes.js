const router = require('express').Router();
const userAuth = require('../utils/userAuth');

router.get('/', userAuth, (req, res) => {
    console.log('========= New-Story rendered =========');

    res.render('new-story', { loggedIn: req.session.loggedIn });
});

module.exports = router; 