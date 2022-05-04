const router = require('express').Router();
const { getHistory, postAction } = require('../controllers/remindersHistory')

router.post('/', postAction);
router.get('/', getHistory);

module.exports = router;