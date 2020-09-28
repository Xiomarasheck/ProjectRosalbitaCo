const models = require('./../models');

//define model to use crud
const model = models.Category;
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
    const newCategoryObject = {
        name: req.body.name,
        description: req.body.description,
        status: req.body.status
    }
    
    // EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
    let Category =  await model.create(newCategoryObject).then (
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
 * GEt all Categorys
 */
async function findAll (req, res){
    try {
        //Execute query
        const Categorys = await model.findAll({
        });
        
        //Send response
        res.json({
            data: Categorys
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
 * Get Category by id
 */
async function findOne (req, res){
    try {
        const { id } = req.params;

        //Execute query
        const Category = await model.findOne({
            where: {
                id: id
            },
        });
        //Send response
        res.json(Category);

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
 * Update Category
 */
async function update (req, res){
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
            const updatedCategory = await model.findOne({ where: { id: id } });
            return res.status(200).json({ Category: updatedCategory });
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
        const post = await model.destroy({
            where: {
                id: id
            }
        });

        //Send response
        res.json(post);

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
 * Delete an existen Category by Categoryname
 * @param {*} req 
 * @param {*} res 
 */
async function deleteByName (req, res){ 
    try {
        const { CategoryName } = req.params;

        //Execute query
        const deleted  = await model.destroy({
            where: {
                CategoryName: CategoryName
            }
        });

        if (deleted) {
            return res.status(204).send("Category deleted");
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
async function deleteAll (req, res){
    try {
        //Execute query
        const Categories = await model.destroy({
            where: {}}
        ).then(function () {});
        
        //Send response
        res.json({
            data: Categories
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

exports.createCategory = create; 
exports.findAllCategories = findAll; 
exports.findOneCategory = findOne; 
exports.updateCategory = update;
exports.deleteCategoryByCategoryname = deleteByName;
exports.deleteCategoryById = deleteById;
exports.deleteAllCategories = deleteAll;
