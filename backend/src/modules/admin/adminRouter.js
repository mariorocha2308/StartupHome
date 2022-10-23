'use strict';
const router = require('express').Router();
const { authTokenAdmin } = require("./adminService");

router.post('/auth', authTokenAdmin);

module.exports = router;
