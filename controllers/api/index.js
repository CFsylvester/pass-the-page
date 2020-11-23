const router = require('express').Router();

const authorRoutes = require('./author-routes');
const storyRoutes = require('./story-routes.js');
const chapterRoutes = require('./chapter-routes.js');

router.use('/authors', authorRoutes);
router.use('/stories', storyRoutes);
router.use('/chapters', chapterRoutes);

module.exports = router;