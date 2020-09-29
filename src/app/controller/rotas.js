const Agenda = require('../model/agenda');


module.exports = (app) => {

    
    app.get('/listar', Agenda.listar)
    app.get('/listaPor/:horaInicio/:horafim', Agenda.listarHorarios)
    app.post('/casdastrar', Agenda.cadastrar)
    app.delete('/excluir:id', Agenda.deletar)
    

    

}
