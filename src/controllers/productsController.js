
const { Console } = require("console");
const fs = require("fs")

var productsController = {

    "products": (req, res, next) => {
        res.render('productos', { title: 'productos' });
      },
    


      "create": function (req, res) {
        let archivoProductos = fs.readFileSync('Data/Products.json', {encoding: 'utf-8'});
        let listadoProductos
        if (archivoProductos == "") {
          listadoProductos = []; }
          else {listadoProductos = JSON.parse (archivoProductos)}

          listadoProductos = JSON.parse(listadoProductos);
        
          var newProduct = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            fecha: req.body.fecha,
            email: req.body.email
          }
          listadoProductos.push (newProduct)

          productosJSON = JSON.stringify (this.listadoProductos) 
        
          fs.writeFileSync('Data/Products.json', (productosJSON))

          res.send(listadoProductos)
      },
        
}
      

        
    

module.exports = productsController;