const express = require("express")
const app = express()

app.use('/static', express.static(__dirname + '/public'))
app.use('/imagenes', express.static(__dirname + '/public/images'))


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/home.html')
})
app.get('/register', function(req, res) {
    res.sendFile(__dirname + '/views/register.html')
})
app.get('/login', function(req, res) {
    res.sendFile(__dirname + '/views/login.html')
})



app.listen(4000, () => {
    console.log("Servidor Corriendo")
})