let animales = [
  { id: 1, nombre: "Rocky", especie: "Perro", edad: 3, estado: "Disponible" },
  { id: 2, nombre: "Luna", especie: "Gato", edad: 1, estado: "En tratamiento" }
];

const getAll = () => animales;


const create = (data) => {
  const nuevoAnimal = {
    id: animales.length > 0 ? Math.max(...animales.map(a => a.id)) + 1 : 1,
    nombre: data.nombre,
    especie: data.especie,
    edad: Number(data.edad),
    estado: data.estado
  };
  animales.push(nuevoAnimal);
  return nuevoAnimal;
};


const remove = (id) => {
  const index = animales.findIndex(a => a.id === parseInt(id));
  if (index === -1) return false;
  
  animales.splice(index, 1);
  return true;
};

module.exports = { getAll, create, remove };