
import { Link } from 'react-router-dom';
import { useAnimalesContext } from '../hooks/useAnimalesContext';
import { AnimalForm } from '../components/AnimalForm';

export const Animales = () => {
  const { animales, loading, agregarAnimal, eliminarAnimal } = useAnimalesContext();

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-black text-gray-800">🐾 Panel del Refugio</h2>
          <Link to="/" className="text-indigo-600 hover:underline font-medium">⬅ Volver al Inicio</Link>
        </div>

        <div className="mb-10">
          <AnimalForm onAgregar={agregarAnimal} />
        </div>

        <hr className="border-gray-200 my-8" />

        <h3 className="text-2xl font-bold text-gray-800 mb-4">Mascotas Rescatadas</h3>

        {loading ? (
          <p className="text-gray-500">Cargando animales desde el servidor...</p>
        ) : animales.length === 0 ? (
          <p className="text-gray-500 bg-white p-6 rounded-xl border text-center">No hay mascotas registradas actualmente.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {animales.map((animal) => (
              <div key={animal.id} className="bg-white rounded-xl shadow-sm border p-5 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded uppercase">
                      {animal.especie}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      animal.estado === 'Disponible' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {animal.estado}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">{animal.nombre}</h4>
                  <p className="text-sm text-gray-500 mt-1">Edad: {animal.edad} años</p>
                </div>
                
                <button
                  onClick={() => eliminarAnimal(animal.id)}
                  className="mt-4 w-full bg-red-50 text-red-600 py-1.5 rounded-lg text-sm font-medium hover:bg-red-100 transition"
                >
                  ❌ Eliminar Registro
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};