const express = require('express')
//internal imports
const {getUsers} = require('../controller/usersController')
const htmlResDecoration = require('../middlewares/common/htmlResDecoration')
//create router
const router = express.Router();

//users page
router.get('/',htmlResDecoration("Users"), getUsers);

//exports
module.exports=router;