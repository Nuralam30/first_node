
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('hello this is my first node project')
  })
  
app.listen(3000, ()=>console.log('App is running'));