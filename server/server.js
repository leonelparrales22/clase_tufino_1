require("./config/config");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Incluir rutas de usuario

app.use(require("./routes/usuario"));

mongoose.connect("mongodb://localhost:27017/cafe", (err, res) => {
  if (err) throw err;
  console.log("Base de datos ONLINE");
}); //Conectar con MongoDB

app.listen(process.env.PORT, () => {
  console.log("Escuchando en el puerto: ", process.env.PORT);
});
