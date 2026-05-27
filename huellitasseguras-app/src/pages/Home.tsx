
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="p-8 text-center bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold text-indigo-600 mb-4">🐾 Huellitas Seguras</h1>
      <p className="text-lg text-gray-600 max-w-md mb-8">
        Bienvenido al sistema de gestión de nuestro refugio de animales. Administra rescates, estados médicos y adopciones de forma ágil.
      </p>
      <Link to="/animales" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-indigo-700 transition">
        Ver Animales Rescatados
      </Link>
    </div>
  );
};