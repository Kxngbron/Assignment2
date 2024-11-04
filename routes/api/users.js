var express = require('express');
var router = express.Router();

let usersController = require('../../controllers/api/users');

/* GET user listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); */

router.get('/', usersController.list);
router.post('/', usersController.create);
router.get('/:userID', usersController.userGet, usersController.userByID);
router.put('/:userID', usersController.update);
router.delete('/:userID', usersController.remove);

module.exports = router;
