const fs = require('fs'); 
const path = require('path'); 
const routeDatabase = path.join(__dirname , '../database/productos.json')
const productosJSON = fs.readFileSync(routeDatabase); 
let productos = JSON.parse( productosJSON ) || [] ;


const mainController = {

    index: (req, res) => {  return res.render( 'index' )  } ,

    login : (req , res) =>{ return res.render('login') } ,

    create: (req, res)=>{

        return res.render('create')

    }, 
    postCreate: (req, res)=>{

    const nuevoId = productos ? productos[productos.length - 1].id + 1 : 1 ;

    const newProduct = { 

            id: nuevoId, 
            ...req.body
        }

        productos.push(newProduct)
        fs.writeFileSync( path.join(__dirname, '../database/productos.json')  ,  JSON.stringify(productos , null, " ") );
        return res.send(productos)

    } 

}


module.exports = mainController; 