//importando as bibliotecas
const express = require('express');

//função manipulação de rotas
const rotas = express.Router();

// rota get clientes
rotas.get('/', (req, res) => {
    res.send('rota get para clientes.');
  });

// rota put para clientes
rotas.put('/', (req, res) => {
    res.send('rota put para clientes.');
  });

// rota post clientes
rotas.post('/', (req, res) => {
    res.send('rota post para clientes.');
  });

// rota delete clientes
rotas.delete('/', (req, res) => {
    res.send('rota delete para clientes.');
  });

module.exports = rotas;