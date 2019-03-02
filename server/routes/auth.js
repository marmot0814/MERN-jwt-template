const router = require('express').Router();
const handle = require('../handlers');

router
  .post('/login', handle.login)
  .post('/register', handle.register)

module.exports = router;