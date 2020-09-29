const bindToDate = require('./bindToDate')
const fs = require('fs')
const { json } = require('express')
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
        
        const periodo = []
        const agenda = read()
        const data1 = bindToDate(req.params.data1);
        const data2 = bindToDate(req.params.data2);
        
       
        let aux
        if(data1 > data2){
            aux = data1;
            data1 = data2;
            data2 = aux;
        }

        agenda.filter((obj) => {
            const agenda = bindToDate(obj.data);
            if (agenda >= data1 && agenda <= data2) {
                periodo.push(obj)
                }
        })

    
        return res.send(periodo)
        
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