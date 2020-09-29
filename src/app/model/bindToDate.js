
module.exports = function bindToDate(date){
    const dataSplit = date.split('-');
    const dia = dataSplit[0]; 
    const mes = dataSplit[1]; 
    const ano = dataSplit[2];  

    return new Date(ano, (mes - 1), dia, 0, 0, 0, 0);
}