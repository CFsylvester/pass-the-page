const router = require('express').Router();

const authorRoutes = require('./author-routes.js');

router.use('/authors', authorRoutes);

module.exports = router;
