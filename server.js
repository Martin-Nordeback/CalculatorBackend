const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

// Calculate addition
app.get('/add/:num1/:num2', (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);
  const result = num1 + num2;
  console.log(JSON.stringify(`Calculate addition ${result}`))
  res.send(result.toString());
});

// Calculate subtraction
app.get('/subtract/:num1/:num2', (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);
  const result = num1 - num2;
  console.log(JSON.stringify(`Calculate subtraction ${result}`))
  res.send(result.toString());
});

// Calculate multiplication
app.get('/multiply/:num1/:num2', (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);
  const result = num1 * num2;
  console.log(JSON.stringify(`Calculate multiplication ${result}`))
  res.send(result.toString());
});

// Calculate diviation
app.get('/divide/:num1/:num2', (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);
  const result = num1 / num2;
  console.log(JSON.stringify(`Calculate diviation ${result}`))
  res.send(result.toString());
});

// Calculate percentage
app.get('/percentage/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1)
    const num2 = parseFloat(req.params.num2)
    const result = (num1 / num2) * 100
    console.log(JSON.stringify(`Calculate percentage ${result}`))
    res.send(result.toString())
  })
  
  // Calculate square root
  app.get('/sqrt/:num1', (req, res) => {
    const num1 = parseFloat(req.params.num1)
    const result = Math.sqrt(num1)
    console.log(JSON.stringify(`Calculate square root ${result}`))
    res.send(result.toString())
  })
  
  // Calculate cylinder volume
  app.get('/cylinder/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1)
    const num2 = parseFloat(req.params.num2)
    const result = Math.PI * Math.pow(num1, 2) * num2
    console.log(JSON.stringify(`Calculate cylinder volume ${result}`))
    res.send(result.toString())
  })
  
  // Calculate circle area
  app.get('/circle/:num1', (req, res) => {
    const num1 = parseFloat(req.params.num1)
    const result = Math.PI * Math.pow(num1, 2)
    console.log(JSON.stringify(`Calculate circle area ${result}`))
    res.send(result.toString())
  })
  
  // Calculate Pythagoras theorem
  app.get('/pythagoras/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1)
    const num2 = parseFloat(req.params.num2)
    const result = Math.sqrt(Math.pow(num1, 2) + Math.pow(num2, 2))
    console.log(JSON.stringify(`Calculate Pythagoras ${result}`))
    res.send(result.toString())
  })
  

app.listen(port, '127.0.0.1', (req,res) => {
  console.log(`Calculator backend listening at http://localhost:${port}`);
});
