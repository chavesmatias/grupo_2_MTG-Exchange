
const { Console } = require("console");
const fs = require("fs")

var productsController = {

    "products": (req, res, next) => {
        res.render('productos', { title: 'productos' });
      },
    


      "create": function (req, res) {
        let archivoProductos = fs.readFileSync('Data/cardProducts.json', {encoding: 'utf-8'});
        let listadoProductos
        if (archivoProductos == "") {
          listadoProductos = []; }
          else {listadoProductos = JSON.parse (archivoProductos)}
        
          let newProduct = {
            name: req.body.cardName,
            manaCost: req.body.manaCost,
            type: req.body.type,
            text: req.body.hability,
          }
          listadoProductos.push (newProduct)

          productosJSON = JSON.stringify (listadoProductos) 
        
          fs.writeFileSync('Data/cardProducts.json', (productosJSON))

          res.send(listadoProductos)
      },
        
}
      

        
    

module.exports = productsController;