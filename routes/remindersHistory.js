const router = require('express').Router();
const { getHistory, postAction, postActions } = require('../controllers/remindersHistory')


router.post('/actions', postActions);
router.post('/action', postAction);
router.get('/', getHistory);

module.exports = router;
