var express = require('express');
var router = express.Router();

const clientController = require ('../controllers/client.controller'); 

/**
 * GET Route to list all Clients
 */
router.get('/', clientController.findAllClients);
/**
 * GET Route to find User by id
 */
router.get('/:idClient', clientController.findOneClient);
/**
 * Client Route to create Client
 */
router.post('/',clientController.createClient);
/**
 * PUT Route to update an Client by id
 */
router.put('/:idClient',clientController.updateClient);
/**
 * DELETE Route to delete an Client by ClientId
 */
router.delete('/:idClient',clientController.deleteClientById);


module.exports = router;
  