const express = require('express')
//internal imports
const {getInbox} = require('../controller/inboxController')
const htmlResDecoration = require('../middlewares/common/htmlResDecoration')
//create router
const router = express.Router();

//Inbox page
router.get('/',htmlResDecoration("Inbox"), getInbox);

//exports
module.exports=router;