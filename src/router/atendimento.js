import express from "express"
import ControllerAtendimento from '../controller/atendimento.js'

const router = express.Router()


router.put("/BuscarFalse/:id",  ControllerAtendimento.BuscarFalse)
router.put("/AlterarConcluido/:id",  ControllerAtendimento.AlterarConcluido)


export default router