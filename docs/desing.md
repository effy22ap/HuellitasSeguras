# 📐 Arquitectura y Diseño de la Aplicación - Huellitas Seguras

## 1. Estructura de Componentes Principales (Frontend)
La interfaz se divide en componentes modulares y reutilizables bajo principios de responsabilidad única:

* **Layout / Contenedores:**
    * `Navbar` (Reutilizable): Barra de navegación superior con accesos rápidos.
    * `Sidebar` (Reutilizable): Menú lateral para filtrado rápido por especies.
* **Vistas / Páginas:**
    * `DashboardPage`: Pantalla de inicio con las tarjetas de métricas globales.
    * `AnimalesPage`: Grilla o lista interactiva con todas las mascotas registradas.
* **Componentes de UI Reutilizables:**
    * `AnimalCard`: Tarjeta individual que muestra la foto, nombre, edad y etiquetas de estado de cada mascota.
    * `StatCard`: Tarjeta genérica para métricas (ej. "Total Perros", "En Tratamiento").
    * `StatusBadge`: Etiqueta de color dinámica que varía según si el animal está "Disponible", "Adoptado" o "En tratamiento".
    * `ModalForm`: Ventana emergente reutilizable para añadir o editar registros.

## 2. Gestión del Estado de la Aplicación
* **Estado Global / Contexto (`src/context/`):** Se implementará un `AnimalContext` para almacenar la lista maestra de animales y los filtros activos, evitando el traspaso excesivo de propiedades (*prop drilling*).
* **Estado Servidor:** Los datos se obtienen mediante peticiones HTTP asíncronas y se sincronizan en el estado local de React al cargar la aplicación.

## 3. Contratos de la API REST (Backend Express)
El servidor expone los siguientes endpoints bajo el prefijo `/api/v1/animales`:

| Método HTTP | Endpoint | Descripción | Cuerpo de la Petición (JSON) | Respuesta Exitosa (200/201 OK) |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/api/v1/animales` | Obtiene la lista completa de animales | *Ninguno* | Lista de objetos de animales |
| **POST** | `/api/v1/animales` | Registra una nueva mascota rescatada | `{ nombre, especie, edad, estado }` | Objeto del animal creado con su `id` |
| **PUT** | `/api/v1/animales/:id` | Modifica los datos o estado médico de una mascota | `{ nombre, especie, edad, estado }` | Objeto de la mascota actualizada |
| **DELETE** | `/api/v1/animales/:id` | Elimina un registro del refugio | *Ninguno* | `{ success: true, message: "Eliminado" }` |

### Modelo de Datos (Tipado TypeScript)
```typescript
export interface Animal {
  id: number;
  nombre: string;
  especie: 'Perro' | 'Gato' | 'Exótico';
  edad: number;
  estado: 'Disponible' | 'En tratamiento' | 'Adoptado';
}