# 🪝 Documentación de Hooks y Estado de React - Huellitas Seguras

En este módulo se describe la estrategia adoptada para la gestión del estado asíncrono y los ciclos de vida de los componentes utilizando React Hooks.

## 1. Custom Hook: `useAnimales`
* **Ubicación:** `src/hooks/useAnimales.ts`
* **Objetivo:** Aislar por completo la lógica de conexión con la API de Express, proveyendo un estado limpio de los datos a las vistas del Frontend.

### Hooks Nativos Utilizados de Forma Interna:
1. **`useState`:** * `animales`: Matriz de objetos fuertemente tipada con la interfaz `Animal[]`. Almacena la colección en memoria reactiva.
    * `loading`: Booleano para controlar el renderizado condicional de interfaces de carga mientras se resuelve la promesa HTTP.
2. **`useEffect`:** * Configurado con un array de dependencias vacío `[]` para actuar estrictamente como un disparador en el montaje inicial del componente (`componentDidMount`).
    * Ejecuta una rutina asíncrona mediante la API nativa `fetch` hacia el endpoint del backend (`http://localhost:5000/api/animales`), mapeando la respuesta JSON directamente sobre el estado de la aplicación.