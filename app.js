const express = require('express')
const app = express()
const cors = require('cors');
const axios = require('axios');

app.use(cors());



app.get('/characters', async (req, res) => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character/');
      res.json(response.data);
    } catch (error) {
      res.status(404).json({ error: 'Error al obtener los personajes' });
    }
  });
  
  app.get('/characters/:name', async (req, res) => {
    const characterName = req.params.name;
  
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${characterName}`);
           
      if (response.data.results.length > 0) {
        res.json(response.data.results[0]);
      } else {
        res.status(404).json({ error: 'Personaje no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el personaje' });
    }
  });


app.listen(3000,() => {
console.log('Express esta escuchando en el puerto http://localhost:3000')
});