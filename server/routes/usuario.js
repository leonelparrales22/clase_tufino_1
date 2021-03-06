const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const Usuario = require("../models/usuario");

app.get("/usuario", (req, res) => {
  res.json("get Usuario");
});

app.post("/usuario", (req, res) => {
  let body = req.body;
  let usuario = new Usuario({
    nombre: body.nombre,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10ññññ),
    role: body.role,
  });

  usuario.save((err, usuarioDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }
    res.json({
      ok: true,
      usuario: usuarioDB,
    });
  });
});

app.put("/usuario/:id", (req, res) => {
  let id = req.param.id;
  res.json(id);
});

app.delete("/usuario", (req, res) => {
  res.json("delete Usuario");
});

module.exports = app;
