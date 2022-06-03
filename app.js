const express = require("express")
const app = express()

app.use('/static', express.static(__dirname + '/public'))
app.use('/imagenes', express.static(__dirname + '/public/images'))


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/home.html')
})



app.listen(3000, () => {
    console.log("Servidor Corriendo")
})