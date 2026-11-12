import Atendimento from '../model/atendimento.js'

class ServiceAtendimento {

    async BuscarFalse(id) {
        if(!id || isNaN(id)) {
            throw new Error("Informe um id válido")
        }

        await Atendimento.BuscarFalse(id)
    }


    async AlterarConcluido(id, concluido) {
        if(!id || isNaN(id) || !concluido) {
            throw new Error("Favor informar todos os dados")
        }
        const atendimentoAlterar = await Atendimento.findByPk(id, concluido)
        if(!atendimentoAlterar) {
            throw new Error("concluido não encontrado")
        }
        
        atendimentoAlterar.concluido = concluido
        
        await atendimentoAlterar.save()
        }

    async Buscar() {
        return Atendimento.findAll()
    }


    async BuscarUm(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar somente números")
        }
        await Atendimento.Buscar(id)
    }


    async Criar( nome, idade) {
        if(nome) {
            throw new Error("Favor informar nome")
        }
        await Atendimento.create({ nome, idade })
    }


    async Alterar(id, nome) {
        if(!id || isNaN(id) || !nome) {
            throw new Error("Favor informar todos os dados")
        }
        const atendimentoAlterar = await Atendimento.findByPk(id)

        if(!atendimentoAlterar) {
            throw new Error("Pessoa não encontrada")
        }
       
        atendimentoAlterar.nome = nome

        await atendimentoAlterar.save()
    }


    async Deletar(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar o Id corretamente")
        }
        const atendimentoDelete = await Atendimento.findByPk(id)

        if(!atendimentoDelete) {
            throw new Error("Favor informar o Id corretamente")
        }


       await atendimentoDelete.destroy()
    }
    

}

export default new ServiceAtendimento()