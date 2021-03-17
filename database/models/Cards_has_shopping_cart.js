const { config } = require("dotenv/types");
const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, dataTypes) => {

let alias = "cards_has_shopping_cart"
let cols = {
    id_cards : { 
        type : dataTypes.integer.UNSIGNED ,  
        foreingkey : TRUE 
        
    } ,
    id_shopping_cart : {
        type : dataTypes.integer.UNSIGNED ,  
        foreingkey : TRUE 
    }
}

const cards_has_shopping_cart = sequelize.define(alias, cols, config)

cards_has_shopping_cart.associate = function (models){
    cards_has_shopping_cart.belongsToMany (models.Cards_has_shopping_cart, {
        as: "shopping_cart",
        through: "cards_has_shopping_cart",
        foreingkey: "id_shopping_cart",
        otherkey: "id_cards"
    }) 
}

return cards_has_shopping_cart
}

