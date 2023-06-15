const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Adiciona Authorization aos cabeçalhos permitidos
  next();
});

app.get('/weather', async (req, res) => {
  try {
    const { cidade } = req.query;
    const apiUrl = `https://goweather.herokuapp.com/weather/${(cidade)}`;
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message }); // Adiciona o detalhe do erro na resposta
  }
});

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
