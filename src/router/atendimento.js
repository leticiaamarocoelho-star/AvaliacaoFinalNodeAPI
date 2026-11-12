import express from "express"
import ControllerAtendimento from '../controller/atendimento.js'

const router = express.Router()


router.get("/BuscarFalse/:id",  ControllerAtendimento.BuscarFalse)
router.put("/AlterarConcluido/:id",  ControllerAtendimento.AlterarConcluido)
router.get("/Buscar", ControllerAtendimento.Buscar)
router.get("/BuscarUm/:id", ControllerAtendimento.BuscarUm)
router.post("/Criar",  ControllerAtendimento.Criar)
router.put("/Alterar/:id",  ControllerAtendimento.Alterar)
router.delete("/Deletar/:id",  ControllerAtendimento.Deletar)


export default router