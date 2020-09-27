const app = require('./src/server/express')
const port = 3000

app.listen(port, ()=>{
    console.log(`servidor rodando em http://localhost:3000`);
})

