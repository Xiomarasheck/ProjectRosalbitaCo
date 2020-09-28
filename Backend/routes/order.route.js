var express = require('express');
var router = express.Router();
const orderController = require ('../controllers/order.controller'); 
/**
 * GET Route to list all Orders
 */
router.get('/', orderController.findAllOrders);

/**
 * GET Route to find Order by id
 */
router.get('/:id', orderController.findOneOrder);
/**
 * POST Route to create Order
 */
router.post('/',orderController.createOrder);
/**
 * PUT Route to update an Order by id
 */
router.put('/:id',orderController.updateOrder);

/**
 * DELETE Route to delete all Orders
 */
router.delete('/',orderController.deleteAllOrders);


// Export router
module.exports = router;

