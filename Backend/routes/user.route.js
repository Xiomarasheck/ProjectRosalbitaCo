var express = require('express');
var router = express.Router();

const userController = require ('../controllers/user.controller'); 

/**
 * GET Route to list all categorys
 */
router.get('/', userController.findAllUsers);
/**
 * GET Route to find category by id
 */
router.get('/:idUSer', userController.findOneUser);
/**
 * category Route to create category
 */
router.category ('/',userController.createUser);
/**
 * PUT Route to update an category by id
 */
router.put ('/:idUSer',userController.updateUser);
/**
 * DELETE Route to delete an category by categoryId
 */
router.delete ('/:idUSer',userController.deleteUserById);
/**
 * DELETE Route to delete all categorys
 */
router.delete ('/category',userController.deleteAllUsers);

module.exports = router;
  