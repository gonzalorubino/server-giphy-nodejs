require('dotenv').config(); // Traigo la API KEY DESDE .env
const express = require('express');
const fetch = require('node-fetch'); // Fetch no es nativo en Node. Lo importo con una libreria.

const app = express();
const PORT = process.env.PORT || 8080;
const compression = require('compression');

// This serves static files from the specified directory
app.use(express.static(__dirname));
// compress.
app.use(compression());

const API_KEY = process.env.API_KEY || ''; //Inserte su API KEY AQUI o en .env!!
const URL = 'https://api.giphy.com/v1/gifs/';

//Server
const server = app.listen(PORT, () => {
  console.log('Server online...');
});

// API - ENDPOINT SEARCH - Search by Word
app.get('/search/:word', (req, res) => {
  // Obtenemos el Parametro a buscar
  const wordToSearch = req.params.word;

  const fetchPromise = fetch(`${URL}search?api_key=${API_KEY}&q=${wordToSearch}`);
  
  fetchPromise.then(response => {
    console.log('result', response);
    return response.json();
  }).then(result => {
    // Retornamos el array de datos:
    res.json(result.data);

  }).catch(err =>{
    console.log('Ohhh fallo!: ', err);

    // Enviamos un 404 y un mensaje de que algo fallo
    res.status(404).send('Ups! sin resultados');
  });
});


// API - ENDPOINT TRENDING - Trending images
app.get('/trending', (req, res) => {
  const fetchPromise = fetch(`${URL}trending?api_key=${API_KEY}`);

  fetchPromise.then(response => {
    console.log('result', response);
    return response.json();
  }).then(result => {
    // Retornamos el array de datos: 
    // usamos res ( de response ) y .json para retornar en formato JSON
    res.json(result.data);

  }).catch(err =>{
    console.log('Ohhh fallo!: ', err);

    // Enviamos un 404 y un mensaje de que algo fallo
    res.status(404).send('Ups! Ocurrio un error!');
  });
});