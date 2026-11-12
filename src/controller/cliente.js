import ServiceCliente from '../service/cliente.js'

class ControllerCliente {

    async Buscar(req, res) {
        try {
            const nomes = await ServiceCliente.Buscar()
            
            res.send({ nomes })
        } catch (error) {
            res.send({ menssagem: error.menssagem })
        }
    }


    async BuscarUm(req, res) {
        try {
            const id = req.params.id
            const nome = await ServiceCliente.BuscarUm(id)

            res.send({ nome })
        } catch (error) {
            res.send({ menssagem: error.menssagem })
        }
    }


    async Criar(req, res) {
        try {
            const nome = req.body.nome
            const idade = req.body.idade
            await ServiceCliente.Criar(nome, idade)

            res.send({ message: "Criado com sucesso!" })
        } catch (error) {
            res.send({ menssagem: error.menssagem })
        }
    }


    async Alterar(req, res) {
        try {
            const id = req.params.id
            const nome = req.body.nome
            await ServiceCliente.Alterar(id, nome)

            res.send({ message: "Alterado com sucesso!" })
        } catch (error) {
            res.send({ menssagem: error.menssagem })
        }
    }


    async Deletar(req, res) {
        try {
            const id = req.params.id
            await ServiceCliente.Deletar(id)

           
            res.send({ message: "Deletado com sucesso!" })
        } catch (error) {
            res.send({ menssagem: error.menssagem })
        }
    }

    
}

export default new ControllerCliente()