const express = require('express');
const router = express.Router();
const retoursRouter = require('./retours');

router.use('/retours', retoursRouter);

module.exports = router;
