
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="p-8 text-center bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-black text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Página no encontrada</h2>
      <p className="text-gray-600 mb-6">Lo sentimos, la sección que buscas no existe en el refugio.</p>
      <Link to="/" className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition">
        Regresar a Salvo al Inicio
      </Link>
    </div>
  );
};