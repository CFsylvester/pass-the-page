const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('==================');
    res.render('dashboard'); 
}); 

module.exports = router;