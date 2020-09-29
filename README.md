# Api_Rest_Agendamento
 api de agendamento - selção cubos

Olá! eu criei uma API REST para facilitar o gerenciamento de horários de uma clínica! com armazenamento local em um marquivo do tipo ".JSON", <b>

as requisições podem ser testadas no Postman, Insomnia ou similar.

<b><h3>Requisição: /listar</h3></b> 

A api realiza o método http 'GET' no endereço /listar retornando todos dias e horários salvos no arquivo 'agenda.json' que esta dentra da pasta 'database' do projeto.

<b><h3>Requisição: /listaPor/:horaInicio/:horafim <h3></b> 


A api realiza o método http 'GET' no endereço /listaPor/:horaInicio/:horafim retornando todos dias e horários salvos no arquivo 'agenda.json' que esta dentro da pasta 'database' do projeto. 
Ex: passando no endpoint /listaPor/01-11-2020/30-11-2020 a api vai buscar todos os dias e horários disponíveis para marcação.

<b><h3>Requisição: /casdastrar</h3></b>

A api realiza o método http 'POST' no endereço /cadastrar e captura o JSON escrito no corpo da requisição (req.body) e salva no 'agenda.json' 

<br>Exemplo.:<br>
     {
	"id": "15",
	"data": "01/11/2020",
	"inicio": "17:00",
	"fim": "18:00"
}

<b><h3>Requisição: /excluir:id</h3></b>

A api realiza o método http 'GET' no endereço /excluir:id excluindo dos registro salvos no arquivo 'agenda.json' o objeto que corresponde ao id passado como parametro. 