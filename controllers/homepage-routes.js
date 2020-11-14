const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('========= Homepage rendered =========');
    res.render('homepage');
});

module.exports = router;