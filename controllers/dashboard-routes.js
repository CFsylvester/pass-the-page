const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('========= Dashboard Rendered =========');
    res.render('dashboard', { loggedIn: true });
});

module.exports = router;