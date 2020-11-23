const models = require('./../models');

/**
 * Creation of an user
 * @param {*} userObject JSON Object with User information
 */
async function createUser (req, res) {   
    // CHECK IF THE REQUEST BODY IS EMPTY
    if (!req.body) {
        res.status(400).send({
          message: "Request body is empty!!!!"
        });
        return;
    }
    // CHECK IF EMAIL IS ALREDY REGISTER
    await models.User.findOne({
        where: [
            {
              email: req.body.email
            },
        ]
    }).then(async user=> {
        if(user === null)
        {
            const newUserObject = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                role_id: 2,
                status: 1
            }
            let user =  await models.User.create(newUserObject).then (
                () => {
                    res.send("Usuario registrado correctamente");
                }
            ).catch(e => {
                console.log(e);
                res.status(500).send({
                    message: "Some error occurred"
                });
            });
        }
        else
        {
            res.status(500).send({
                message: "El usuario con email "+req.body.email+" ya se encuentra registrado"
            });
        }
    }).catch( e => {
        console.log(e);
        res.status(500).send({
            message: "Some error occurred"
        });
    });
}

async function authenticateUser(req, res){
    if (!req.body) {
        res.status(400).send({
          message: "Request body is empty!!!!"
        });
        return;
    }
    await models.User.findOne({
        where: [
            {
              email: req.body.email
            },
        ]
    }).then(async user=> {
        if(user === null)
        {
            res.status(500).send({
                message: "El email no se encuentra registrado",
            });    
        }
        else if(user.password !== req.body.password)
        {
            res.status(500).send({
                message: "Usuario o contraseña incorrecta",
            }); 
        }else{
            res.status(200).send({
                message: "Usuario autenticado correctamente",
            });
        }
    }).catch( e => {
        console.log(e);
        res.status(500).send({
            message: "Some error occurred"
        });
    });
}

/**
 * GEt all users
 */
async function findAllUsers (req, res){
    try {
        //Execute query
        const users = await models.User.findAll({
            include: [
                {
                  model: models.Role,
                  as: 'Role'
                },
            ]
        });
        
        //Send response
        res.json({
            data: users
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
 * Get user by id
 */
async function findOneUser (req, res){
    try {
        const { idUser } = req.params;

        //Execute query
        const user = await models.User.findOne({
            where: {
                id: idUser
            },
            include: [
                {
                  model: models.Role,
                  as: 'role_id'
                },
            ]
        });
        //Send response
        res.json(user);

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
 * Update user
 */
async function updateUser (req, res){
    try {

        // CHECK IF THE REQUEST BODY IS EMPTY
        if (!req.body) {
                res.status(400).send({
                message: "Request body is empty!!!!"
            });
            return;
        }

        const {idUser} = req.params;

        //Execute query
        const [ updated ] = await models.User.update(req.body ,{
            where: {
                id: idUser
            }
        });

        //Send response
        if (updated) {
            const updatedUser = await models.User.findOne({ where: { id: idUser } });
            return res.status(200).json({ user: updatedUser });
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
 * Delete an existen user by username
 * @param {*} req 
 * @param {*} res 
 */
async function deleteUserByUserName (req, res){ 
    try {
        const { userName } = req.params;

        //Execute query
        const deleted  = await models.User.destroy({
            where: {
                name: userName
            }
        });

        if (deleted) {
            return res.status(204).send("User deleted");
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
async function deleteAllUsers (req, res){
    try {
        //Execute query
        const users = await models.User.destroy({
            where: {}}
        ).then(function () {});
        
        //Send response
        res.json({
            data: users
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

exports.createUser = createUser; 
exports.findAllUsers = findAllUsers; 
exports.findOneUser = findOneUser; 
exports.updateUser = updateUser;
exports.deleteUserByUserName = deleteUserByUserName;
exports.deleteAllUsers = deleteAllUsers;
exports.authenticateUser= authenticateUser;