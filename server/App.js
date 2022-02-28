const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');

const app = express();

const mysql = require('mysql');

const db = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'backend'
})

app.use(cors());

app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}));

const port = process.env.PORT || 3005;

app.get('/todos/', (req, res)=> {

    const sqlSelect = "SELECT * FROM todos";

    db.query(sqlSelect, (err, result) =>{
        res.send(result)
    })

})

app.post('/todos/', (req, res)=> {

    const title = req.body.title;

    const description = req.body.description;

    const sqlInsert = "INSERT INTO todos (title, description) VALUES (?,?);"

    db.query(sqlInsert, [title, description], (err, result) =>{
        console.log(result)
    })
});

app.listen(port, ()=>console.log(`Server running on ${port}`));


// const pool = mysql.createPool({
//     connectionLimit: 100,
//     host           : 'localhost',
//     user           : 'root',
//     password       : '',
//     database       : 'backend'
// })