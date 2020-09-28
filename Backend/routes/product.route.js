var express = require('express');
var router = express.Router();
const productController = require ('../controllers/product.controller'); 
/**
 * GET Route to list all products
 */
router.get('/', productController.findAllProducts);

/**
 * GET Route to find product by id
 */
router.get('/:id', productController.findOneProduct);
/**
 * POST Route to create product
 */
router.post('/',productController.createProduct);
/**
 * PUT Route to update an product by id
 */
router.put('/:id',productController.updateProduct);
/**
 * DELETE Route to delete an product by productName
 */
router.delete('/:id',productController.deleteProductById);
/**
 * DELETE Route to delete all products
 */
router.delete('/',productController.deleteAllProducts);


// Export router
module.exports = router;

