const router = require('express').Router();

router.get('/login', (req, res) => {
    console.log('==================');
    res.render('login'); 
}); 

module.exports = router;