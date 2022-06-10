const express = require('express')
const app = express()
const mongoose = require('mongoose');
// models
const Users = require('./Modeles/Users')
const { User } = require('./Modeles/Users');
const  auth  = require('./auth');



var bodyParser = require('body-parser');
app.use(bodyParser.json())

const mongoUrl = 'mongodb+srv://Harish-admin:harish@cluster0.qxhqz.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(mongoUrl)
.then(
() =>{
    console.log('mongodb connected')

})
.catch(
    () =>{
        console.log('error with connection')
    
    }
)

app.get('/', function (req, res) {
  res.send('Hello World')
})


app.post('/register' , async function (req ,res) {
  try {
    console.log("register data",req.body);
    const user = new User(req.body)
    const result = await user.save()
    res.send(result)
      
  } catch (error) {
      res.status(500).send({"errorMessage":error.message})
  }
})

app.use('/login' , auth)

app.listen(3000 , () => {
    console.log('application started on 3000 ');
})
