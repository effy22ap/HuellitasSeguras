/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useEffect } from 'react';

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
    const obtenerMascotas = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/v1/animales');
        const datos = await res.json();
        setAnimales(datos);
      } catch (error) {
        console.error("Error cargando animales:", error);
      } finally {
        setLoading(false);
      }
    };
    obtenerMascotas();
  }, []);

  const agregarAnimal = async (nuevoAnimal: Omit<Animal, 'id'>) => {
    try {
      const res = await fetch('http://localhost:5000/api/v1/animales', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoAnimal),
      });
      if (res.ok) {
        const animalCreado = await res.json();
        setAnimales((prev) => [...prev, animalCreado]);
      }
    } catch (error) {
      console.error("Error al ejecutar POST:", error);
    }
  };

  const eliminarAnimal = async (id: number) => {
    try {
      const res = await fetch(`http://localhost:5000/api/v1/animales/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setAnimales((prev) => prev.filter((animal) => animal.id !== id));
      }
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