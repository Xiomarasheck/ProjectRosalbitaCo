const models = require('./../models');

/**
 * Creation of an Client
 * @param {*} ClientObject JSON Object with Client information
 */
async function createClient (req, res) {
    
    // CHECK IF THE REQUEST BODY IS EMPTY
    if (!req.body) {
        res.status(400).send({
          message: "Request body is empty!!!!"
        });
        return;
    }
    
    // CREATING THE OBJECT TO PERSIST
    const newClientObject = {
        name: req.body.name,
        lastName: req.body.lastName,
        address: req.body.address,
        email: req.body.email,
        status: req.body.status,
    }
    
    // EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
    let Client =  await models.Client.create(newClientObject).then (
        data => {
            res.send(data);
        }
    ).catch (
        e => {
            // Print error on console
            console.log(e);
            // Send error message as a response 
            res.status(500).send({
                message: "Some error occurred"
            });
        }
    );
}

/**
 * GEt all Clients
 */
async function findAllClients (req, res){
    try {
        //Execute query
        const Clients = await models.Client.findAll({
            include: [
                {
                  model: models.Role,
                  as: 'role_id'
                },
            ]
        });
        
        //Send response
        res.json({
            data: Clients
        });

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}

/**
 * Get Client by id
 */
async function findOneClient (req, res){
    try {
        const { idClient } = req.params;

        //Execute query
        const Client = await models.Client.findOne({
            where: {
                id: idClient
            },
            include: [
                {
                  model: models.Role,
                  as: 'role_id'
                },
            ]
        });
        //Send response
        res.json(Client);

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}

/**
 * Update Client
 */
async function updateClient (req, res){
    try {

        // CHECK IF THE REQUEST BODY IS EMPTY
        if (!req.body) {
                res.status(400).send({
                message: "Request body is empty!!!!"
            });
            return;
        }

        const {idClient} = req.params;

        //Execute query
        const [ updated ] = await models.Client.update(req.body ,{
            where: {
                id: idClient
            }
        });

        //Send response
        if (updated) {
            const updatedClient = await models.Client.findOne({ where: { id: idClient } });
            return res.status(200).json({ Client: updatedClient });
        }

        throw new Error('Post not found');

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}

/**
 * Delete an existen Client by Clientname
 * @param {*} req 
 * @param {*} res 
 */
async function deleteClientById (req, res){ 
    try {
        const { idClient } = req.params;

        //Execute query
        const deleted  = await models.Client.destroy({
            where: {
                id: idClient
            }
        });

        if (deleted) {
            return res.status(204).send("Client deleted");
        }

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
async function deleteAllClients (req, res){
    try {
        //Execute query
        const Clients = await models.Client.destroy({
            where: {}}
        ).then(function () {});
        
        //Send response
        res.json({
            data: Clients
        });

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}

exports.createClient = createClient; 
exports.findAllClients = findAllClients; 
exports.findOneClient = findOneClient; 
exports.updateClient = updateClient;
exports.deleteClientById = deleteClientById;
exports.deleteAllClients = deleteAllClients;
