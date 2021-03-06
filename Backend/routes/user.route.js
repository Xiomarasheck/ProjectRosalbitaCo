var express = require('express');
var router = express.Router();
var cors = require("cors");

router.use(cors());

const userController = require ('../controllers/user.controller'); 


/**
 * GET Route to list all Users
 */
router.get('/', userController.findAllUsers);
/**
 * GET Route to find User by id
 */
router.get('/:idUSer', userController.findOneUser);
/**
 * User Route to create User
 */
router.post('/newUser',userController.createUser);
/**
 * User Route to authenticate
 */
router.post('/Authenticate',userController.authenticateUser);
/**
 * PUT Route to update an User by id
 */
router.put('/:idUSer',userController.updateUser);
/**
 * DELETE Route to delete an User by UserId
 */
router.delete('/:userName',userController.deleteUserByUserName);


module.exports = router;
  