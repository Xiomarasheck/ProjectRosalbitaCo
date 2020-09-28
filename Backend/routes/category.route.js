
var express = require('express');
var router = express.Router();

const categoryController = require ('../controllers/category.controller'); 

/**
 * GET Route to list all categorys
 */
router.get('/', categoryController.findAllCategories);
/**
 * GET Route to find category by id
 */
router.get('/:id', categoryController.findOneCategory);
/**
 * category Route to create category
 */
router.get('/',categoryController.createCategory);
/**
 * PUT Route to update an category by id
 */
router.put('/:id',categoryController.updateCategory);
/**
 * DELETE Route to delete an category by categoryId
 */
router.delete('/:id',categoryController.deleteCategoryById);


module.exports = router;
  