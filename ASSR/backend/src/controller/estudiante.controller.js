const dbConnection = require('../config/databaseCon');

const connection = dbConnection();

let getEstudiantes = async (req,res)=>{
    await connection.query("select * from estudiante", (err,result)=>{
        if (result)    
            res.send(result);

        else
            res.status(500).send(err);

    });
}
let addEstudiantes = (req,res)=>{
    const {idEstudiante,Name,LastName,Age} = req.body
    console.log(req)
    connection.query(`INSERT INTO estudiante VALUES(${idEstudiante}, '${Name}', '${LastName}', '${Age}')`, (err,result)=>{
        
        if (result)    
            res.send({idEstudiante,Name,LastName,Age});

        else
            res.status(500).send(err);

    });
}

module.exports = {
    getEstudiantes,
    addEstudiantes
}