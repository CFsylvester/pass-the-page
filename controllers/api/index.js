const router = require('express').Router();

const authorRoutes = require('./author-routes.js');
const chapterRoutes = require('./chapter-routes.js');
const storyRoutes = require('./story-routes.js');

router.use('/authors', authorRoutes);
router.use('/chapters', chapterRoutes); 
router.use('/stories', storyRoutes);

module.exports = router;
