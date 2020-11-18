const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('========= Add Chapter rendered =========');

    res.render('add-chapter', { loggedIn: req.session.loggedIn });
});

module.exports = router; 