const express = require('express');
const app = express()
const morgan = require('morgan')
const userModel = require('./models/user')
const dbconnection = require('./config/db')


app.use(morgan('dev'))

app.set('view engine', 'ejs');

//to render the index page
app.get('/', (req, res) => {
    res.render("index")     
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//for serving static files
app.use(express.static("public"))


app.get('/register', (req,res) => {
    res.render('register')
})
//create a new register with database
app.post('/register', async (req, res) => {
    const {username, email, password} = req.body
    const newUser = await userModel.create({
        username : username, 
        email: email,
        password: password
    })
    res.send(newUser)    
})

app.post('/Get-From-Data', (req, res) => {
    console.log(req.body)
    res.send('Data Recived Successfully')
})
//get the user details
app.get("/get-users", (req, res) => {
    userModel.find().then((users) => {
        res.send(users)
    })
})
//update
app.get("/Update-user", async(req,res) => {
    await userModel.findOneAndUpdate({
        username : "hardik"
    }, {
        email : "bhupeshchetp@gmail.com"
    })
    res.send("User Updated Successfully")
})

//delete
app.get('/delete-user', async (req, res) => {
await userModel.findOneAndDelete({
        username : 'a'
    })
    res.send("User Deleted Successfully")
})
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})