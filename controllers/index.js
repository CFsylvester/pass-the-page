const router = require('express').Router();
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboard-routes.js');
const homepageRoutes = require('./homepage-routes.js');
const newStoryRoutes = require('./new-story-routes.js');
const addChapterRoutes = require('./add-chapter-routes.js');

router.use('/add-chapter', addChapterRoutes);
router.use('/new-story', newStoryRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/', homepageRoutes);
router.use('/api', apiRoutes);

module.exports = router; 