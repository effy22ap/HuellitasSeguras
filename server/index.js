const express = require('express');
const cors = require('cors');
const animalRoutes = require('./src/routes/animalRoutes');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/v1/animales', animalRoutes);

app.get('/', (req, res) => {
  res.send('🐾 API Rest de Huellitas Seguras lista en arquitectura limpia por capas.');
});

app.listen(PORT, () => {
  console.log(` Backend modular corriendo con éxito en http://localhost:${PORT}`);
});