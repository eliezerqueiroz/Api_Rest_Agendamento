const fs = require('fs')
const path = './src/app/database/agenda.json'

class Agenda {

  cadastrar(req, res){

    fs.appendFile(path, ('\n' + JSON.stringify(req.body)), (err)=>{
        if(err){
            console.log(err);
        }
        return res.send('ok')
    })
    }
}

module.exports = new Agenda