const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('==================');
    res.render('homepage'); 
}); 

module.exports = router;