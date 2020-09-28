
const fs = require('fs')
const path = './src/app/database/agenda.json'


function read(){
    const content = fs.readFileSync(path, 'utf-8')
    return JSON.parse(content)
}

function write(content){
    const updateFile = JSON.stringify(content)
    fs.writeFileSync(path, updateFile, 'utf-8')
}


class Agenda {

    cadastrar(req, res){
    const { id, data, inicio, fim } = req.body
    const currentContent =  read()
    currentContent.push({ id, data, inicio, fim })
    write(currentContent)
    res.send({ id, data, inicio, fim })
    
    }

    listar(req, res){

     res.send(read())
        
    }

    listarHorarios(req, res){

        const agenda = read()
        const horarioslivres = [] 
        agenda.filter(agenda => { 
            if (agenda.inicio >= req.params.horaInicio && agenda.fim <= req.params.horaFim) {
                horarioslivres.push(agenda.inicio)
                horarioslivres.push(agenda.fim)
            }})
        
    }

    deletar(req, res){
    const { id } = req.params
    const agendaAtual = read()
    const agendaAtualizada = agendaAtual.filter(atendimeto => atendimeto.id != id )
    write(agendaAtualizada)
    res.send(read())
    }


}

module.exports = new Agenda