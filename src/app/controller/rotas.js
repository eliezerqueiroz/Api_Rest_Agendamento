const Agenda = require('../model/agenda');


module.exports = (app) => {
    
    app.get('/agenda', (req, res)=>{
        res.send(`Listar agendamentos ok`)
    })

    // app.post('/agenda', (req, res)=>{

    //     const agendamento = JSON.stringify(req.body)

    //     Agenda.cadastrar(agendamento)
        
    // })

    app.post('/agenda', Agenda.cadastrar)


    

}
