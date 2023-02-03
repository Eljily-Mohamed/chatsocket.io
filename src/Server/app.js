
const express = require('express');
//declare app qui prend fonction express 
const app = express();
//decalre make notre Server lisn in Port 1234 pour any Connexion 
//si il ya une demande deconnexion on redirecte vers notre Statci file 
app.listen(1234,function(){
       app.use(express.static("./App.js"));
})
//on faire setup de notre Socket
