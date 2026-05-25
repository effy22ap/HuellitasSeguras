import React, { useState } from 'react';

interface AnimalFormProps {
  onAgregar: (animal: { nombre: string; especie: 'Perro' | 'Gato' | 'Exótico'; edad: number; estado: 'Disponible' | 'En tratamiento' | 'Adoptado' }) => void;
}

export const AnimalForm: React.FC<AnimalFormProps> = ({ onAgregar }) => {
  // 1. Estados controlados para cada input del formulario
  const [nombre, setNombre] = useState('');
  const [especie, setEspecie] = useState<'Perro' | 'Gato' | 'Exótico'>('Perro');
  const [edad, setEdad] = useState<string>('');
  const [estado, setEstado] = useState<'Disponible' | 'En tratamiento' | 'Adoptado'>('Disponible');

  // Estados para alertas visuales de validación
  const [error, setError] = useState('');
  const [exito, setExito] = useState(false);

  // 2. Función manejadora del envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setExito(false);

    // Validación básica: que los campos obligatorios tengan texto válido
    if (!nombre.trim() || !edad) {
      setError('❌ Por favor, rellena todos los campos obligatorios.');
      return;
    }

    const edadNum = parseInt(edad);
    if (isNaN(edadNum) || edadNum < 0) {
      setError('❌ La edad debe ser un número válido igual o mayor a 0.');
      return;
    }

    // Si pasa las validaciones, enviamos el objeto arriba
    onAgregar({
      nombre: nombre.trim(),
      especie,
      edad: edadNum,
      estado
    });

    // Mostramos mensaje de éxito y limpiamos los inputs
    setExito(true);
    setNombre('');
    setEdad('');
    setEstado('Disponible');
    setEspecie('Perro');
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 max-w-md mx-auto my-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">🐾 Registrar Nueva Mascota</h3>

      {/* Alertas de Error y Éxito */}
      {error && <div className="p-3 mb-4 text-sm text-red-700 bg-red-50 rounded-lg">{error}</div>}
      {exito && <div className="p-3 mb-4 text-sm text-green-700 bg-green-50 rounded-lg">✅ ¡Mascota registrada con éxito en el refugio!</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Campo: Nombre */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Nombre de la mascota *</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Ej. Balto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)} // Controlado por React
          />
        </div>

        {/* Campo: Especie */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Especie</label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={especie}
            onChange={(e) => setEspecie(e.target.value as 'Perro' | 'Gato' | 'Exótico')}
          >
            <option value="Perro">Perro 🐕</option>
            <option value="Gato">Gato 🐈</option>
            <option value="Exótico">Exótico 🦜</option>
          </select>
        </div>

        {/* Campo: Edad */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Edad estimada (años) *</label>
          <input
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Ej. 2"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </div>

        {/* Campo: Estado */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Estado de adopción</label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={estado}
            onChange={(e) => setEstado(e.target.value as 'Disponible' | 'En tratamiento' | 'Adoptado')}
          >
            <option value="Disponible">Disponible para Adopción</option>
            <option value="En tratamiento">En tratamiento Médico</option>
            <option value="Adoptado">Adoptado 🎉</option>
          </select>
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          Guardar Registro
        </button>
      </form>
    </div>
  );
};