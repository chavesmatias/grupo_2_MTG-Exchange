

module.exports = (sequelize, dataTypes) => {

    let config={
        tableName:'users',
        timestamps:false,
        underscored:true
    }     

let alias = "User"
let cols = {
    id : { 
        type : dataTypes.INTEGER,  
        primaryKey : true , 
        autoincrement : true ,
    } ,
    first_name : {
        type : dataTypes.STRING,
    },
    last_name : {
        type : dataTypes.STRING,
    },
    email : {
        type : dataTypes.STRING,
    },
    password : {
        type : dataTypes.STRING,
    },
    user_name : {
        type : dataTypes.STRING,
    },
    adress : {
        type : dataTypes.STRING,
    },
    shopping_cart_id : {
        type : dataTypes.INTEGER,
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

