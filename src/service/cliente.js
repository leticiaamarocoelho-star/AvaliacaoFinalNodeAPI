import Cliente from '../model/cliente.js'

class ServiceCliente {

    async Buscar() {
        return Cliente.findAll()
    }


    async BuscarUm(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar somente números")
        }
        await Cliente.Buscar(id)
    }


    async Criar( nome, idade) {
        if(nome) {
            throw new Error("Favor informar nome")
        }
        await Cliente.create({ nome, idade })
    }


    async Alterar(id, nome) {
        if(!id || isNaN(id) || !nome) {
            throw new Error("Favor informar todos os dados")
        }
        const clienteAlterar = await Cliente.findByPk(id)

        if(!clienteAlterar) {
            throw new Error("Pessoa não encontrada")
        }
       
        clienteAlterar.nome = nome

        await clienteAlterar.save()
    }


    async Deletar(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar o Id corretamente")
        }
        const clienteDelete = await Cliente.findByPk(id)

        if(!clienteDelete) {
            throw new Error("Favor informar o Id corretamente")
        }


       await clienteDelete.destroy()
    }

}

export default new ServiceCliente()



//config
//index
//mode
//service
//controller
//router