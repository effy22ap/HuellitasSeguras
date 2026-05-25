# Documentación del Backend y API REST - Huellitas Seguras

## 1. Diseño Arquitectónico
El servidor se ha desarrollado en Node.js junto con Express, implementando un desacoplamiento estricto de responsabilidades dividido en tres capas operacionales:
* **Rutas (`routes`):** Orquestador de los puntos de acceso de red y verbos HTTP.
* **Controladores (`controllers`):** Gestión de la capa de transporte, validación de esquemas y códigos de estado de respuesta.
* **Servicios (`services`):** Sede de las reglas de negocio y persistencia temporal del dominio.

El backend está desarrollado sobre **Node.js** y **Express**, organizando el flujo de datos mediante un desacoplamiento estricto de tres niveles:
* **Routes:** Captura las peticiones HTTP externas.
* **Controllers:** Valida los datos recibidos y asigna el código de respuesta HTTP correspondiente.
* **Services:** Resuelve las reglas de negocio y manipula la persistencia del estado.

## 2. Contrato de la API y Códigos HTTP

### GET `/api/v1/animales`
* **Descripción:** Devuelve un listado completo con todos los animales del refugio.
* **Código de Éxito:** `200 OK`
* **Estructura de Retorno (JSON):**
```json
[
  { "id": 1, "nombre": "Rocky", "especie": "Perro", "edad": 3, "estado": "Disponible" }
]

### POST `/api/v1/animales`
* **Descripción:** Registra un nuevo animal tras validar el formulario.
* **Código de éxito:** `201 Created`
* **Código de error:** `400 Bad Request` (si faltan campos estructurales).

### DELETE `/api/v1/animales/:id`
* **Descripción:** Remueve un registro del sistema usando su identificador numérico.
* **Código de éxito:** `200 OK`
* **Código de error:** `404 Not Found` (si el ID de la mascota no coincide con ninguno existente).