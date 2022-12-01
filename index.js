
const express = require('express');
var cors = require('cors');
const app = express();

app.use(cors());

const users = ['Abir', 'Soham', 'Faruk', 'Robin', 'Tutul'];

app.get('/', function (req, res) {
    res.send('hello this is my first node project');
  });

app.get('/users/:id', (req, res) =>{
  const id = req.params.id;
  const name = users[id];
  res.send({id, name});
});
  
app.listen(3000, ()=>console.log('App is running'));