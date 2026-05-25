#  Estructura de Rutas y Navegación - Huellitas Seguras

Se ha implementado el enrutamiento del lado del cliente utilizando la librería oficial **React Router Dom** (`BrowserRouter`), permitiendo una experiencia SPA (Single Page Application) fluida y sin recargas de página de servidor.

## 1. Mapa de Rutas Declaradas

| Ruta URL | Componente Renderizado | Acceso / Propósito |
| :--- | :--- | :--- |
| `/` | `Home` | Panel de bienvenida principal y accesos rápidos de la app. |
| `/animales` | `Animales` | Panel central con el listado dinámico de mascotas. |
| `*` (Cualquiera) | `NotFound` | Manejador de estado de error 404 para URLs inexistentes. |

## 2. Componentes de Navegación Utilizados
* **`Routes` y `Route`:** Actúan como oyentes de la barra de direcciones del navegador para realizar el intercambio dinámico de componentes en el DOM.
* **`Link`:** Componente nativo optimizado que reemplaza a las etiquetas tradicionales `<a>`, previniendo la recarga completa del navegador y manteniendo el estado reactivo de la aplicación.