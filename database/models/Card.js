

module.exports = (sequelize, dataTypes) => {

    let config={
        tableName:'cards',
        timestamps:false,
        underscored:true
    }
let alias = "Card"
let cols = {
    user_id : { 
        type : dataTypes.INTEGER.UNSIGNED ,  
        primaryKey : true , 
        autoincrement : true ,
    } ,
    name : {
        type : dataTypes.STRING,
    },
    mana_cost : {
        type : dataTypes.INTEGER,
    },
    color : {
        type : dataTypes.STRING,
    },
    type : {
        type : dataTypes.STRING,
    },
    ability : {
        type : dataTypes.STRING,
    },
    text : {
        type : dataTypes.STRING,
    },
    power : {
        type : dataTypes.INTEGER,
    },
    toughness : {
        type : dataTypes.INTEGER,
    },
    expansion : {
        type : dataTypes.STRING,
    },
    price : {
        type : dataTypes.INTEGER,
    },
    stock : {
        type : dataTypes.INTEGER,
    }
    
}

const card = sequelize.define(alias, cols, config)

card.associate = function (models){
    card.belongsToMany (models.Cards_has_shopping_cart, {
        as: "cards",
        through: "cards_has_shopping_cart",
        foreingkey: "id_cards"
    }) 
}

return card
}

