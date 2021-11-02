//libreria que nos hara un server
import express from "express";
//libreria se encarga de las reglas de conexion para saber si es de verdad para permitirlas entrar
import cors from "cors";
//libreria que nos trae la conexion a la base de datos
import db from "./db/db.js";
//libreria que nos permite conocer las variables de entorno
import dotenv from "dotenv";
//importamos la ruta
import producto from "./routes/producto.js";
//esta linea cuando se ejecute el servidor nos inicializa las variable
dotenv.config();
//aqui ya nuestro backend  app es un servidor
const app = express();
//aqui estamos diciendo que solo vamos a recibir archivos json
app.use(express.json());
//aqui ya estamos usando las reglas de coneccion
app.use(cors());
// esta es toda la ruta que seguimos http://localhost:3002/api/producto/registerProducto
app.use("/api/producto", producto)
//aqui estamos conectandonos al puerto que declaramos en .env
app.listen(process.env.PORT, () =>{
  console.log("Backend server running on port: " + process.env.PORT)
});

//aqui ya nos conectamos a la base de datos
db.dbConnection();