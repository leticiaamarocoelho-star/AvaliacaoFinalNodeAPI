import ServiceAtendimento from '../service/atendimento.js'

class ControllerAtendimento {

    BuscarFalse(req, res) {
        try {
            const id = req.params.id
            const  concluido = ServiceAtendimento.BuscarFalse(id)

            res.send({ concluido })
        } catch (error) {
            res.send({ mensagem: error.message })
        }
    }

    
    async AlterarConcluido(req, res) {
            try {
                const id = req.params.id
                const concluido = req.body.concluido
                await ServiceAtendimento.Alterar(id, concluido)
    
                res.send({ message: "Alterado com sucesso!" })
            } catch (error) {
                res.send({ menssagem: error.menssagem })
            }
        }
    

    
}

export default new ControllerAtendimento()