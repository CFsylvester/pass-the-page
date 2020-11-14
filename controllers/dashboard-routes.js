const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('========= Dashboard Rendered =========');
    res.render('dashboard');
});

module.exports = router;