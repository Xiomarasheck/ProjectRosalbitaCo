const models = require('./../models');

//define model to use crud
const model = models.PaymentMethod;


/**|
 * 
 * @param {*} req 
 * @param {*} res 
 */
async function create (req, res) {
    
    // CHECK IF THE REQUEST BODY IS EMPTY
    if (!req.body) {
        res.status(400).send({
          message: "Request body is empty!!!!"
        });
        return;
    }
    
    // CREATING THE OBJECT TO PERSIST
    const newObject = {
        name: req.body.name,
        description: req.body.description,
        status: req.body.status
    }
    
    // EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
    let Category =  await model.create(newObject).then (
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
 * GEt all data
 */
async function findAll (req, res){
    try {
        //Execute query
        const result = await model.findAll({
        });
        
        //Send response
        res.json({
            data: result
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
 * Get data by id
 */
async function findOne (req, res){
    try {
        const { id } = req.params;

        //Execute query
        const result = await model.findOne({
            where: {
                id: id
            },
        });
        //Send result
        res.json(result);

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
 * Update Model
 */
async function update(req, res){
    try {

        // CHECK IF THE REQUEST BODY IS EMPTY
        if (!req.body) {
                res.status(400).send({
                message: "Request body is empty!!!!"
            });
            return;
        }

        const {id} = req.params;

        //Execute query
        const [ updated ] = await model.update(req.body ,{
            where: {
                id: id
            }
        });

        //Send response
        if (updated) {
            const resultUpdate = await model.findOne({ where: { id: id } });
            return res.status(200).json({ Category: resultUpdate });
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
 * @param {*} req 
 * @param {*} res 
 */
async function deleteById (req, res){ 
    try {
        const { id } = req.params;

        //Execute query
        const resultDestroy = await model.destroy({
            where: {
                id: id
            }
        });

        //Send response
        res.json(resultDestroy);

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
async function deleteAll (req, res){
    try {
        //Execute query
        const response = await model.destroy({
            where: {}}
        ).then(function () {});
        
        //Send response
        res.json({
            data: response
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

exports.createPaymentMethod = create; 
exports.findAllPaymentMethod = findAll; 
exports.findOnePaymentMethod = findOne; 
exports.updatePaymentMethod = update;
exports.deletePaymentMethodById = deleteById;
exports.deleteAllPaymentMethods = deleteAll;
