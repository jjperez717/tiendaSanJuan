//importamos mongoose
import mongoose from "mongoose";

//construimos la estructura de la coleccion

const productoSchema = new mongoose.Schema({
  name: String,
  precio: Number,
  registerDate: { type: Date, default: Date.now },
  stok: Number,
});
//aqui lo mandamos a guardar la coleccion  que se llamara roles
const producto = mongoose.model("producto", productoSchema);

//exportamos sin llaves porque no es funcion
export default producto;
