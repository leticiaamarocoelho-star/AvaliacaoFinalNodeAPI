import ServiceAtendimento from '../service/atendimento.js'

class ControllerAtendimento {

    async BuscarFalse(req, res) {
        try {
            const id = req.params.id
            const  concluido = await ServiceAtendimento.BuscarFalse(id)

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
        
    async Buscar(req, res) {
        try {
            const nomes = await ServiceAtendimento.Buscar()
            
            res.send({ nomes })
        } catch (error) {
            res.send({ menssagem: error.menssagem })
        }
    }


    async BuscarUm(req, res) {
        try {
            const id = req.params.id
            const nome = await ServiceAtendimento.BuscarUm(id)

            res.send({ nome })
        } catch (error) {
            res.send({ menssagem: error.menssagem })
        }
    }


    async Criar(req, res) {
        try {
            const nome = req.body.nome
            const idade = req.body.idade
            await ServiceAtendimento.Criar(nome, idade)

            res.send({ message: "Criado com sucesso!" })
        } catch (error) {
            res.send({ menssagem: error.menssagem })
        }
    }


    async Alterar(req, res) {
        try {
            const id = req.params.id
            const nome = req.body.nome
            await ServiceAtendimento.Alterar(id, nome)

            res.send({ message: "Alterado com sucesso!" })
        } catch (error) {
            res.send({ menssagem: error.menssagem })
        }
    }


    async Deletar(req, res) {
        try {
            const id = req.params.id
            await ServiceAtendimento.Deletar(id)

           
            res.send({ message: "Deletado com sucesso!" })
        } catch (error) {
            res.send({ menssagem: error.menssagem })
        }
    }

    

    
}

export default new ControllerAtendimento()