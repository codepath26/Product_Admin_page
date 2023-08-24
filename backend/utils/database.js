const Sequelize = require('sequelize');
const sequelize = new Sequelize('project1' , 'root','Parth@Sagar26',{
  host : 'localhost',
  dialect : 'mysql' ,
})

module.exports = sequelize;