const express = require('express');
const app = express()
const morgan = require('morgan')

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

app.post('/Get-From-Data', (req, res) => {
    console.log(req.body)
    res.send('Data Recived Successfully')
})


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})