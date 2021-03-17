const { config } = require("dotenv/types");
const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, dataTypes) => {

let alias = "cards"
let cols = {
    id : { 
        type : dataTypes.integer.UNSIGNED ,  
        primarykey : TRUE , 
        autoincrement : TRUE ,
    } ,
    name : {
        type : dataTypes.string.NOTNULL,
    },
    mana_cost : {
        type : dataTypes.integer.NOTNULL,
    },
    color : {
        type : dataTypes.string.NOTNULL,
    },
    type : {
        type : dataTypes.string.NOTNULL,
    },
    ability : {
        type : dataTypes.string.NOTNULL,
    },
    text : {
        type : dataTypes.string.NOTNULL,
    },
    power : {
        type : dataTypes.integer.NOTNULL,
    },
    toughness : {
        type : dataTypes.integer.NOTNULL,
    },
    expansion : {
        type : dataTypes.string.NOTNULL,
    },
    price : {
        type : dataTypes.integer.NOTNULL,
    },
    stock : {
        type : dataTypes.integer.NOTNULL,
    }
    
}

const card = sequelize.define(alias, cols, config)

//card.associate = function (models){
    //card.belongsTo 
//}

return card
}

