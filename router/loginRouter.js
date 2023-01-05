const express = require('express')
//internal imports
const {getLogin} = require('../controller/loginController')
const htmlResDecoration = require('../middlewares/common/htmlResDecoration')

//create router
const router = express.Router();

//login page
router.get('/',htmlResDecoration("Login"), getLogin);

//exports
module.exports=router;