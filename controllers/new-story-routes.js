const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('========= New-Story rendered =========');

    res.render('new-story', { loggedIn: req.session.loggedIn });
});

module.exports = router; 