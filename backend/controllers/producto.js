//importamos el modelo
import producto from "../models/producto.js";

const registerProducto = async (req, res) => {
  //la condicion es solo para los campos obligatorios
  if (!req.body.name || !req.body.precio || !req.body.stok)
    return res.status(400).send("Incomplete data");
    
//validamos si ese nombre de producto ya esta creado
  const existingProducto = await producto.findOne({ name: req.body.name });
  if (existingProducto)
    return res.status(400).send("The product already exist");

  const productoSchema = new producto({
    //aqui le voy a mandar el name
    name: req.body.name,
    //aqui le voy a mandar el precio
    precio: req.body.precio,
    //aqui le voy a mandar el stok
    stok: req.body.stok,
  });
  //aqui guardamos la informacion
  const result = await productoSchema.save();
  //si esto no funciona muestra este mensaje
  if (!result) return res.status(400).sed("Failed to register product");
  // si funciona mostramos el result
  return res.status(200).send({ result });
};
//cuando es una funcion lo exportamos con las llaves{}
export default { registerProducto };
