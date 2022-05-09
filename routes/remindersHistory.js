const router = require('express').Router();
const { getHistory, postAction, postActions } = require('../controllers/remindersHistory')


router.post('/action', postAction);
router.post('/actions', postActions);
router.get('/', getHistory);

module.exports = router;
