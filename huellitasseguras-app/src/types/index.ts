
// Contrato estricto para las propiedades de las mascotas
export interface Animal {
  id: number;
  nombre: string;
  especie: 'Perro' | 'Gato' | 'Exótico';
  edad: number;
  estado: 'Disponible' | 'En tratamiento' | 'Adoptado';
}

// Tipado para los componentes de métricas (StatCard)
export interface StatCardProps {
  title: string;
  value: number;
  icon: string;
  color: string;
}

// Tipado para la tarjeta individual del animal (AnimalCard)
export interface AnimalCardProps {
  animal: Animal;
  onEdit: (animal: Animal) => void;
  onDelete: (id: number) => void;
}