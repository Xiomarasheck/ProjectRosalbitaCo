const models = require('./../models');

//define model to use crud
const model = models.Order;
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
    const newOrderObject = {
        user_id: req.body.user_id,
        payment_id: req.body.payment_id,
        itemsPrice: req.body.itemsPrice,
        taxPrice: req.body.taxPrice,
        shippingPrice: req.body.shippingPrice,
        totalPrice: req.body.totalPrice,
        isPaid: req.body.isPaid,
        PaidAt: req.body.PaidAt,
        isDelivered: req.body.isDelivered,
        deliveredAt: req.body.deliveredAt,
        status: req.body.status,
        description: req.body.description,
        image: req.body.image,
    }
    
    // EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
    let Category =  await model.create(newCategoryObject).then (
        data => {
            products = req.body.products;
            products.forEach(ArrayProducts);
            
            function ArrayProducts(element, index, array) {
                console.log(element);
            }

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
 * GEt all Orders
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
 * Get Order by id
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
 * Update Order
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
            return res.status(200).json({ Order: resultUpdate });
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

exports.createOrder = create; 
exports.findAllOrders = findAll; 
exports.findOneOrder = findOne; 
exports.updateOrder = update;
exports.deleteOrderById = deleteById;
exports.deleteAllOrders = deleteAll;
