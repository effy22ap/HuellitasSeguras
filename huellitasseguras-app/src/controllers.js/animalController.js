const animalService = require('../services/animalService');


const getAnimales = (req, res) => {
  res.status(200).json(animalService.getAll());
};

const createAnimal = (req, res) => {
  const { nombre, especie, edad, estado } = req.body;
  
  if (!nombre || !especie || edad === undefined || !estado) {
    return res.status(400).json({ error: "Faltan campos requeridos en el formulario." });
  }
  
  const nuevo = animalService.create({ nombre, especie, edad, estado });
  res.status(201).json(nuevo); // 201: Objeto creado con éxito
};


const deleteAnimal = (req, res) => {
  const { id } = req.params;
  const eliminado = animalService.remove(id);
  
  if (!eliminado) {
    return res.status(404).json({ error: "La mascota no existe en los registros." });
  }
  res.status(200).json({ success: true, message: "Registro eliminado correctamente." });
};

module.exports = { getAnimales, createAnimal, deleteAnimal };