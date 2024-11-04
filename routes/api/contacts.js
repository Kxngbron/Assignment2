var express = require('express');
var router = express.Router();

let contactsController = require('../../controllers/api/contacts');

/* GET contacts listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); */

router.get('/', contactsController.list);
router.post('/', contactsController.create);
router.get('/:contactID', contactsController.contactGet, contactsController.contactByID);
router.put('/:contactID', contactsController.update);
router.delete('/:contactID', contactsController.remove);

module.exports = router;
