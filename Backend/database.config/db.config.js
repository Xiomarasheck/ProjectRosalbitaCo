
const dbconfig = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "rCCeF4N;k",
    DB: "database_development_rosalbita",
    dialect: "mysql",
    pool: { 
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};
module.exports = dbconfig;
