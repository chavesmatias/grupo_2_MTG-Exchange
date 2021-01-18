
const { Console } = require("console");
const fs = require("fs")

var userController = {

    "register": (req, res, next) => {
        res.render('registro', { title: 'registro' });
      },
    


      "create": function (req, res) {
    
        let currentUsers = fs.readFileSync('Data/users.json', {encoding: 'utf-8'});
       
        var parsedCurrentUsers = JSON.parse(currentUsers);
        
        var newUser = {
          nombre: req.body.nombre,
          apellido: req.body.apellido,
          fecha: req.body.fecha,
          email: req.body.email
        }

         for (let i=0; i<parsedCurrentUsers.length; i++){
          if(parsedCurrentUsers[i].email == req.body.email){
            res.send("USUARIO EXISTENTE")
          } else {
            parsedCurrentUsers.push(newUser)
        
        fs.writeFileSync('Data/users.json', JSON.stringify(parsedCurrentUsers))

        res.send(parsedCurrentUsers)
          }
        
        }
      }

        
    }

module.exports = userController;