const express = require('express');
const router = express.Router();

const stuffCtrl = require('../controllers/stuff');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', auth, multer, stuffCtrl.createThing);
router.put('/:id', auth, multer, stuffCtrl.updateThing);
router.delete('/:id', auth, stuffCtrl.deleteThing);
router.get('/', auth,  stuffCtrl.oneThing);
router.get('/:id', auth, stuffCtrl.allThing);
router.post('/:id/like', auth, stuffCtrl.like);

module.exports = router;