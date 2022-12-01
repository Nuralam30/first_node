
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('hello this is my first node project');
  });

app.get('/Profile', (req, res) =>{
  res.send({name: 'Nura Alam', Age: 24, Home: 'Cumilla, Bangladesh'})
});
  
app.listen(3000, ()=>console.log('App is running'));