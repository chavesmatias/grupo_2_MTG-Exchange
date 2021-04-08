

module.exports = (sequelize, dataTypes) => {

    let config={
        tableName:'shopping_cart',
        timestamps:false,
        underscored:true
    }    

let alias = "Shopping_carts"
let cols = {
    id : { 
        type : dataTypes.INTEGER.UNSIGNED ,  
        primaryKey : true , 
        autoincrement : true ,
    } ,
    detail : {
        type : dataTypes.STRING,
    },
    quanty : {
        type : dataTypes.INTEGER,
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

