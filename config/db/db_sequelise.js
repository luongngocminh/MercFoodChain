const env = process.env.NODE_ENV || 'development';
console.log(env)
const config = require('./dbconfig')[env];
console.log(config)
const Sequelize = require('sequelize');

let sequelize;
if (process.env.DB_URL) {
  sequelize = new Sequelize(config.url, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

module.exports = sequelize;
