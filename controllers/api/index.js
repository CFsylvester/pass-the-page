const router = require('express').Router();

const authorRoutes = require('./author-routes.js');
const chapterRoutes = require('./chapter-routes.js');

router.use('/authors', authorRoutes);
router.use('/chapters', chapterRoutes); 

module.exports = router;
