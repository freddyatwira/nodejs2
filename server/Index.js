const express = require("express");

const path = require('path')

const app = express();

const members =[{
        id:1,
        name:"fred waigwa",
        email:"fred@gmail.com",
        status:"active"
      },
      {
        id:2,
        name:"fred waigwa two",
        email:"fred2@gmail.com",
        status:"active"
      },
      {
        id:3,
        name:"fred waigwa three",
        email:"fred3@gmail.com",
        status:"active"
      }]

app.get('/api/members', (req, res) =>{

})

app.use(express.static(path.join(__dirname, '../public')))


const PORT = process.env.PORT || 3005;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
