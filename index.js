
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const users = ['Abir', 'Soham', 'Faruk', 'Robin', 'Tutul'];


// get method
app.get('/', function (req, res) {
    res.send('hello this is my first node project');
  });

app.get('/users/:id', (req, res) =>{
  const id = req.params.id;
  const name = users[id];
  res.send({id, name});
});


//post method
app.post('/addUser', (req, res) =>{
  const user = req.body;
  user.id = 20;
  res.send(user)
})
  
app.listen(3000, ()=>console.log('App is running'));