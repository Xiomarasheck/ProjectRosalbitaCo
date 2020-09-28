
const Sequelize = require("sequelize");
const sequelizeConnection = require('../database.config/db.connection.js');

// modelos
const CategoryModel = require("../models/category");
const ClientModel = require("../models/client");
const OrderModel = require("../models/order");
const OrderdetailModel = require("../models/orderdetail");
const PaymentModel = require("../models/paymentmethod");
const ProductModel = require("../models/product");
const RoleModel = require("../models/role");
const UserModel = require("../models/user");


const Category = CategoryModel (sequelizeConnection, Sequelize);
const Client = ClientModel (sequelizeConnection, Sequelize);
const Order = OrderModel (sequelizeConnection, Sequelize);
const Orderdetail = OrderdetailModel (sequelizeConnection, Sequelize);
const Paymentmethod = PaymentModel (sequelizeConnection, Sequelize);
const Product = ProductModel (sequelizeConnection, Sequelize);
const Role = RoleModel (sequelizeConnection, Sequelize);
const User = UserModel (sequelizeConnection, Sequelize);


const models = {
    Category:Category,
    Client:Client,
    Order:Order,
    Orderdetail:Orderdetail,
    Paymentmethod:Paymentmethod,
    Product:Product,
    Role:Role,
    User: User
};


// Crear objeto de BD
const db = {
    ...models,
    sequelizeConnection
};
  
module.exports = db;
