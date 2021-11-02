//importamos el server y el controler
import  express  from "express";
import producto from "../controllers/producto.js";

const router = express.Router()

//post para registrar
//http://localhost:3002/api/producto/registerProducto
router.post("/registerProducto", producto.registerProducto);

export default router;