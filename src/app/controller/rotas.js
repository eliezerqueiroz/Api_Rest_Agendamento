const Agenda = require('../model/agenda');


module.exports = (app) => {
        

    app.post('/agenda', Agenda.cadastrar)
    app.get('/agenda', Agenda.listar)
    app.get('/agenda/:horaInicio/:horafim', Agenda.listarHorarios)
    app.delete('/agenda:id', Agenda.deletar)
    

    

}
