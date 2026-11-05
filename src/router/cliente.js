import express from "express"
import ControllerCliente from '../controller/cliente.js'

const router = express.Router()


router.get("/Buscar", ControllerCliente.Buscar)
router.get("/BuscarUm/:id", ControllerCliente.BuscarUm)
router.post("/Criar",  ControllerCliente.Criar)
router.put("/Alterar/:id",  ControllerCliente.Alterar)
router.delete("/Deletar/:id",  ControllerCliente.Deletar)


export default router