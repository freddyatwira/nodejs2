const express = require("express");

const app = express();

app.get('/', (req, res) =>{
 res.send('<h1>HELLO WORLD!</h1>')
})
const PORT = process.env.PORT || 3005;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
