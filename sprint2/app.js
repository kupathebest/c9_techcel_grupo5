const express = require('express');
/*const { dirname } = require('path');*/
const app = express();
const port = 3030;
const path = require('path');

app.use(express.static('public'));


app.get('/',(req,res) => res.sendFile(path.join(__dirname, 'views','index.html')));


app.get('/login',(req,res) => res.sendFile(path.join(__dirname, 'views', 'login.html')));

app.get('/carrito',(req,res) => res.sendFile(path.join(__dirname, 'views','productCart.html')));
app.get('/detail',(req,res) => res.sendFile(path.join(__dirname, 'views','productDetail.html')));
app.get('/register',(req,res) => res.sendFile(path.join(__dirname, 'views','register.html')));
app.get('/comocomprar',(req,res) => res.sendFile(path.join(__dirname, 'views','comoComprar.html')));

app.listen(port,() => console.log('Servidor corriendo en http://localhost:' + port))
