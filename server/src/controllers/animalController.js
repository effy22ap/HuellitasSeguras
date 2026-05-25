const animalService = require('../services/animalService');

const getAnimales = (req, res) => {
  res.status(200).json(animalService.getAll());
};

const createAnimal = (req, res) => {
  const { nombre, especie, edad, estado } = req.body;
  
  if (!nombre || !especie || edad === undefined || !estado) {
    return res.status(400).json({ error: "Faltan campos requeridos o son inválidos." });
  }
  
  const nuevo = animalService.create({ nombre, especie, edad, estado });
  res.status(201).json(nuevo); 
};

const updateAnimal = (req, res) => {
  const { id } = req.params;
  const actualizado = animalService.update(id, req.body);
  
  if (!actualizado) {
    return res.status(404).json({ error: "Mascota no encontrada en el refugio." });
  }
  res.status(200).json(actualizado);
};

const deleteAnimal = (req, res) => {
  const { id } = req.params;
  const eliminado = animalService.remove(id);
  
  if (!eliminado) {
    return res.status(404).json({ error: "Mascota no encontrada." });
  }
  res.status(200).json({ success: true, message: "Registro eliminado con éxito." });
};

module.exports = { getAnimales, createAnimal, updateAnimal, deleteAnimal };