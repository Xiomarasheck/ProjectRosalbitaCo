//Import Models
const models = require('./../models');

//define model to use crud
const model = models.Product;


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
        price: req.body.price,
        image: req.body.image,
        category_id: req.body.category_id,
        status: req.body.status
    }
    
    // EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
    let product =  await model.create(newObject).then (
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
 * GEt all Products
 */
async function findAll (req, res){
    try {
        //Execute query
        const result = await model.findAll({
            include: [
                {
                  model: models.Category,
                  as: 'category_id'
                },
            ]
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
 * Get products by id
 */
async function findOne (req, res){
    try {
        const { id } = req.params;

        //Execute query
        const result = await model.findOne({
            where: {
                id: id
            },
            include: [
                {
                  model: models.Category,
                  as: 'category_id'
                },
            ]
        });
        //Send response
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
 * Update products
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
        const [updated] = await model.update(req.body ,{
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
        const result = await model.destroy({
            where: {
                id: id
            }
        });

        //Send response
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
 * 
 * @param {*} req 
 * @param {*} res 
 */
async function deleteAll (req, res){
    try {
        //Execute query
        const result = await model.destroy({
            where: {}}
        ).then(function () {});
        
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

exports.createProduct = create; 
exports.findAllProducts = findAll; 
exports.findOneProduct = findOne; 
exports.updateProduct = update;
exports.deleteProductById = deleteById;
exports.deleteAllProducts = deleteAll;
