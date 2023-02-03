
const express = require('express');
//declare app qui prend fonction express 
const app = express();
//decalre make notre Server lisn in Port 1234 pour any Connexion 
//si il ya une demande deconnexion on redirecte vers notre Statci file 
app.listen(4000,function(){
       console.log("Server listen in port 1234")
})
//static files 
app.use(express.static('../public/'))
