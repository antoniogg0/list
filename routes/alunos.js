//importando as bibliotecas
const express = require('express');

//função manipulação de rotas
const rotas = express.Router();

// rota get clientes
rotas.get('/', (req, res) => {
    res.send('rota get para alunos.');
  });

// rota put para clientes
rotas.put('/', (req, res) => {
    res.send('rota put para alunos.');
  });

// rota post clientes
rotas.post('/', (req, res) => {
    res.send('rota post para alunos.');
  });

// rota delete clientes
rotas.delete('/', (req, res) => {
    res.send('rota delete para alunos.');
  });

module.exports = rotas;