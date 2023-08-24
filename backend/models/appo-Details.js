  const {DataTypes} = require('sequelize')
  const sequelize = require('../utils/database');
  const  Expense = sequelize.define(
    'AdminProduct' , {
      amount :{
        type : DataTypes.STRING,
        allowNull : false,
      },
      product :{
        type : DataTypes.STRING,
        allowNull : false,
      },
      category :{
        type : DataTypes.STRING,
        allowNull : false,
      },
    });

    module.exports = Expense;