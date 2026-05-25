import type { Animal } from '../context/AnimalContext';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1/animales';

export const apiClient = {
  // 1. Obtener todas las mascotas (GET)
  async obtenerTodos(): Promise<Animal[]> {
    const res = await fetch(API_BASE_URL);
    if (!res.ok) throw new Error('Error al obtener los animales del servidor');
    return res.json();
  },

  // 2. Registrar una nueva mascota (POST)
  async crear(nuevoAnimal: Omit<Animal, 'id'>): Promise<Animal> {
    const res = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevoAnimal),
    });
    if (!res.ok) throw new Error('Error al registrar la mascota');
    return res.json();
  },

  // 3. Eliminar una mascota por ID (DELETE)
  async eliminar(id: number): Promise<void> {
    const res = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error('Error al eliminar la mascota');
  }
};