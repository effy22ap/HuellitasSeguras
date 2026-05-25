import { useContext } from 'react';
import { AnimalContext } from '../context/AnimalContext';

export const useAnimalesContext = () => {
  const context = useContext(AnimalContext);
  if (!context) {
    throw new Error("useAnimalesContext debe usarse dentro de un AnimalProvider");
  }
  return context;
};