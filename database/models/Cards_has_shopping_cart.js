
module.exports = (sequelize, dataTypes) => {

    let config={
        tableName:'cards_has_shopping_cart',
        timestamps:false,
        underscored:true
    }

let alias = "Cards_has_shopping_cart"
let cols = {
    id_cards : { 
        type : dataTypes.INTEGER.UNSIGNED ,  
        foreingkey : true 
        
    } ,
    id_shopping_cart : {
        type : dataTypes.INTEGER.UNSIGNED ,  
        foreingkey : true 
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

