//importando as bibliotecas
const express = require('express');

//função  manipulação de rotas
const rotas = express.Router();

// rota get  veiculos
rotas.get('/', (req, res) => {
    res.send('rota get para veiculos.');
  });

// rota put veiculos
rotas.put('/', (req, res) => {
    res.send('rota put para veiculos.');
  });

// rota post veiculos
rotas.post('/', (req, res) => {
    res.send('rota post para veiculos.');
  });

// rota delete veiculos
rotas.delete('/', (req, res) => {
    res.send('rota delete para veiculos.');
  });

module.exports = rotas;