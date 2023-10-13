const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoute = require('./homeRoute.js');

router.use('/api', apiRoutes);
router.use('/', homeRoute);

module.exports = router;