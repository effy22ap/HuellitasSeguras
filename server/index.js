const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middlewares necesarios
app.use(cors()); 
app.use(express.json());


let animales = [
  { id: 1, nombre: "Rocky", especie: "Perro", edad: 3, estado: "Disponible" },
  { id: 2, nombre: "Luna", especie: "Gato", edad: 1, estado: "En tratamiento" },
  { id: 3, nombre: "Coco", especie: "Loro", edad: 2, estado: "Adoptado" }
];

// Ruta inicial de prueba
app.get('/', (req, res) => {
  res.send('🐾 Servidor de Huellitas Seguras funcionando perfectamente');
});

// API para obtener todos los animales del refugio
app.get('/api/animales', (req, res) => {
  res.json(animales);
});

// Escuchar en el puerto local 5000
app.listen(PORT, () => {
  console.log(` Servidor Express corriendo en http://localhost:${PORT}`);
});