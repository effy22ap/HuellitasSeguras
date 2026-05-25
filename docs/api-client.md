# Documentación del Cliente de API (Capa de Red Frontend)

## 1. Ubicación y Estructura
El cliente centralizado de red se encuentra en el archivo `src/api/client.ts`. Aislar las peticiones HTTP fuera de los componentes y contextos nos permite cumplir con el principio de responsabilidad única y facilitar el mantenimiento de la aplicación.

## 2. Contrato de Tipos (TypeScript)
Para asegurar que los datos que viajan desde el backend sigan la misma estructura rígida en la interfaz de usuario, se consume la interfaz de tipos estricta `Animal`:

```typescript
export interface Animal {
  id: number;
  nombre: string;
  especie: 'Perro' | 'Gato' | 'Exótico';
  edad: number;
  estado: 'Disponible' | 'En tratamiento' | 'Adoptado';
}

## 3. Métodos del Objeto apiClient
La capa de red expone tres operaciones asíncronas tipadas basadas en el estándar nativo de fetch:

##A. obtenerTodos()
Retorno: Promise<Animal[]>

Descripción: Realiza una petición GET a la API para recuperar el arreglo de mascotas registradas.

##B. crear(nuevoAnimal)
Parámetro: Omit<Animal, 'id'> (envía todos los campos excepto el ID, que lo calcula el backend).

Retorno: Promise<Animal>

Descripción: Ejecuta una petición POST enviando un cuerpo en formato JSON con los datos capturados del formulario.

##C. eliminar(id)
Parámetro: id: number

Retorno: Promise<void>

Descripción: Invoca una petición DELETE adjuntando el identificador numérico de la tarjeta directamente sobre la URL del endpoint.