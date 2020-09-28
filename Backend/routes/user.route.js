var express = require('express');
var router = express.Router();

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
router.post('/',userController.createUser);
/**
 * PUT Route to update an User by id
 */
router.put('/:idUSer',userController.updateUser);
/**
 * DELETE Route to delete an User by UserId
 */
router.delete('/:userName',userController.deleteUserByUserName);


module.exports = router;
  