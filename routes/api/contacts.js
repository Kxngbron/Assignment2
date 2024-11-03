var express = require('express');
var router = express.Router();

let contactsController = require('../../controllers/api/contacts');

/* GET cars listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list', contactsController.list);
router.post('/create', contactsController.create);
router.get('/get/:contactID', contactsController.contactGet, contactsController.contactByID);
router.put('/edit/:contactID', contactsController.update);
router.delete('/delete/:contactID', contactsController.remove);

module.exports = router;
