import Atendimento from '../model/atendimento.js'

class ServiceAtendimento {

    BuscarFalse(id) {
        if(!id || isNaN(id)) {
            throw new Error("Informe um id válido")
        }

        return Atendimento.BuscarFalse(id)
    }


    async AlterarConcluido(id, concluido) {
            if(!id || isNaN(id) || !concluido) {
                throw new Error("Favor informar todos os dados")
            }
            const atendimentoAlterar = await Atendimento.findByPk(id)
    
            if(!atendimentoAlterar) {
                throw new Error("concluido não encontrado")
            }
           
            atendimentoAlterar.concluido = concluido
    
            await atendimentoAlterar.save()
        }
    

}

export default new ServiceAtendimento()