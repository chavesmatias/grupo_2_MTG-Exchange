const { config } = require("dotenv/types");
const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, dataTypes) => {

let alias = "shopping_carts"
let cols = {
    id : { 
        type : dataTypes.integer.UNSIGNED ,  
        primarykey : TRUE , 
        autoincrement : TRUE ,
    } ,
    detail : {
        type : dataTypes.string.NOTNULL,
    },
    quanty : {
        type : dataTypes.integer.NOTNULL,
    }
}

const shopping_cart = sequelize.define(alias, cols, config)

shopping_cart.associate = function (models){
    shopping_cart.belongsToMany (models.Cards_has_shopping_cart, {
        as: "shopping_cart",
        through: "cards_has_shopping_cart",
        foreingkey: "id_shopping_cart"
    }) 
}

return shopping_cart
}

