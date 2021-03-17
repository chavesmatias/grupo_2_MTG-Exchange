const { config } = require("dotenv/types");
const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, dataTypes) => {

let alias = "users"
let cols = {
    id : { 
        type : dataTypes.integer.UNSIGNED ,  
        primarykey : TRUE , 
        autoincrement : TRUE ,
    } ,
    first_name : {
        type : dataTypes.string.NOTNULL,
    },
    last_name : {
        type : dataTypes.string.NOTNULL,
    },
    email : {
        type : dataTypes.string.NOTNULL,
    },
    password : {
        type : dataTypes.string.NOTNULL,
    },
    user_name : {
        type : dataTypes.string.NOTNULL,
    },
    adress : {
        type : dataTypes.string.NOTNULL,
    },
    shopping_cart_id : {
        type : dataTypes.integer.NOTNULL,
    }
}

const user = sequelize.define(alias, cols, config)

user.associate = function (models){
    user.belongsTo (models.User, {
        as: "user",
        through: "cards_has_shopping_cart",
        foreingkey: "id_shopping_cart_id"
    }) 
}

return user
}

