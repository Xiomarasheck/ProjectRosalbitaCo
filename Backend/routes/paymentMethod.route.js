
var express = require('express');
var router = express.Router();

const paymentMethodController = require ('../controllers/paymentMethod.controller'); 

/**
 * GET Route to list all categorys
 */
router.get('/', paymentMethodController.findAllPaymentMethod);
/**
 * GET Route to find category by id
 */
router.get('/:id', paymentMethodController.findOnePaymentMethod);
/**
 * PaymentMethod Route to create PaymentMethod
 */
router.post('/',paymentMethodController.createPaymentMethod);
/**
 * PUT Route to update an PaymentMethod by id
 */
router.put('/:id',paymentMethodController.updatePaymentMethod);
/**
 * DELETE Route to delete an PaymentMethod by PaymentMethodId
 */
router.delete('/:id',paymentMethodController.deletePaymentMethodById);


module.exports = router;
  