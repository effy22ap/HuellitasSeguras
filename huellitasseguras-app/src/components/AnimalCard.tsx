import React from 'react';


interface Animal {
  id: number;
  nombre: string;
  especie: 'Perro' | 'Gato' | 'Exótico';
  edad: number;
  estado: 'Disponible' | 'En tratamiento' | 'Adoptado';
}


interface AnimalCardProps {
  animal: Animal;
}

export const AnimalCard: React.FC<AnimalCardProps> = ({ animal }) => {
 
  const badgeColor = 
    animal.estado === 'Disponible' ? 'bg-green-100 text-green-800' :
    animal.estado === 'En tratamiento' ? 'bg-amber-100 text-amber-800' : 
    'bg-gray-100 text-gray-800';

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md uppercase">
              {animal.especie}
            </span>
            <h3 className="text-xl font-bold text-gray-800 mt-2">{animal.nombre}</h3>
          </div>
          
          <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${badgeColor}`}>
            {animal.estado}
          </span>
        </div>
        
        <p className="text-sm text-gray-600 mt-3">
          <span className="font-semibold">Edad estimada:</span> {animal.edad} {animal.edad === 1 ? 'año' : 'años'}
        </p>
      </div>
    </div>
  );
};