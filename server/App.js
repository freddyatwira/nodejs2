const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');

const app = express();



// database and port setup here
const mysql = require('mysql');

const db = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'backend'
})

const port = "https://kenhotex.atwira.com" || 3005;

app.listen(port, ()=>console.log(`server running on port ${port}`));

// enof database and port


app.use(cors());

app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}));


// display data from backend from these code
app.get('/todos/', (req, res)=> {

    const sqlSelect = "SELECT * FROM todos";

    db.query(sqlSelect, (err, result) =>{
        res.send(result)
    })

})

// endof display


// post from frontend to backend

app.post('/todos/', (req, res)=> {

    const title = req.body.title;

    const description = req.body.description;

    const completed = req.body.completed;


    const sqlInsert = "INSERT INTO todos (title, description, completed) VALUES (?,?,?);"

    db.query(sqlInsert, [title, description, completed], (err, result) =>{
        console.log(result)
    })
});

// endof post code

