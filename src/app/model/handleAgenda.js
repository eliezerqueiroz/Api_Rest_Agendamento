const fs = require('fs')
const path = './src/app/database/agenda.json'


    
    function readFile(){
        const content = fs.readFileSync(path, 'utf-8')
        return JSON.parse(content)
    }
    
    function writeFile(content){
        const updateFile = JSON.stringify(content)
        fs.writeFileSync(path, updateFile, 'utf-8')
    }
    
        
    module.exports = readFile, writeFile