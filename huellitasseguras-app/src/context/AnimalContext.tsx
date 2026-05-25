/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useEffect } from 'react';
import { apiClient } from '../api/client';

export interface Animal {
  id: number;
  nombre: string;
  especie: 'Perro' | 'Gato' | 'Exótico';
  edad: number;
  estado: 'Disponible' | 'En tratamiento' | 'Adoptado';
}

interface AnimalContextType {
  animales: Animal[];
  loading: boolean;
  agregarAnimal: (nuevoAnimal: Omit<Animal, 'id'>) => Promise<void>;
  eliminarAnimal: (id: number) => Promise<void>;
}

export const AnimalContext = createContext<AnimalContextType | undefined>(undefined);

export const AnimalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [animales, setAnimales] = useState<Animal[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const cargarMascotas = async () => {
      try {
        const datos = await apiClient.obtenerTodos();
        setAnimales(datos);
      } catch (error) {
        console.error("Error cargando animales:", error);
      } finally {
        setLoading(false);
      }
    };
    cargarMascotas();
  }, []);


  const agregarAnimal = async (nuevoAnimal: Omit<Animal, 'id'>) => {
    try {
      const animalCreado = await apiClient.crear(nuevoAnimal);
      setAnimales((prev) => [...prev, animalCreado]);
    } catch (error) {
      console.error("Error al ejecutar POST:", error);
    }
  };


  const eliminarAnimal = async (id: number) => {
    try {
      await apiClient.eliminar(id);
      setAnimales((prev) => prev.filter((animal) => animal.id !== id));
    } catch (error) {
      console.error("Error al ejecutar DELETE:", error);
    }
  };

  return (
    <AnimalContext.Provider value={{ animales, loading, agregarAnimal, eliminarAnimal }}>
      {children}
    </AnimalContext.Provider>
  );
};