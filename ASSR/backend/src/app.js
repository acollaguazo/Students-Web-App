// definicion de constante para funcion express
const express = require('express');
const cors = require('cors');

const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, 'build')));

// body-parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('port', process.env.PORT | 8080);

app.get('/', (req,res)=>{ //http://localhost:8080/
    //res.send("Bienvenidos a mi pagina principal de ASSR usando JavaScript");
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use("/estudiante",require("./routes/estudiante") );

app.get('*', (req, res) => {
    res.status(404).send("<h1>Error 404</h1><h2>Página no encontrada</h2>")
});

//set port


app.listen(app.get('port'));
console.log(`Server on port ${app.get('port')}`) // utilizar mensajes en la consola

app.use(cors());
