# 🐶 Documentación del Proyecto: HuellitasSeguras (Gestión de Refugio de Animales)

## 1. Problema que intenta resolver
Los refugios y centros de rescate de animales suelen gestionar la información de sus huéspedes de forma caótica (hojas de cálculo o papel), lo que provoca errores en el seguimiento de tratamientos médicos, confusión en los estados de adopción y pérdida de información de contacto de los adoptantes potenciales. 

**SafePets** ofrece una solución centralizada, rápida y visual para registrar, monitorizar y actualizar la ficha técnica y médica de cada animal en tiempo real.

## 2. Usuario Objetivo
* **Personal del refugio y voluntarios:** Encargados de actualizar el estado diario de los animales, añadir nuevos rescates y programar alertas médicas.
* **Coordinadores de adopción:** Personal enfocado en revisar las solicitudes y emparejar a los adoptantes con las mascotas idóneas.

## 3. Funcionalidades Principales (Fase 1)
* **Panel de Control (Dashboard):** Vista general con métricas rápidas (Total de animales, cuántos están listos para adopción, cuántos en enfermería).
* **Registro de Animales (CRUD):** Formulario avanzado para añadir, editar y dar de baja animales, especificando: Nombre, Especie, Edad estimada, Estado de salud y Estado de adopción.
* **Filtro Avanzado:** Buscador dinámico por especie (Perro, Gato, Otro) y por estado sanitario o de adopción mediante un menú desplegable interactivo.
* **Persistencia Local y API:** Sincronización automática de los datos modificados utilizando el backend en Express y respaldo seguro en `LocalStorage`.

## 4. Funcionalidades Opcionales / Mejoras Futuras
* **Módulo de Historial Médico:** Espacio dedicado para registrar vacunas con fechas exactas utilizando librerías de cálculo temporal.
* **Galería de Fotos:** Posibilidad de cargar imágenes de las mascotas para facilitar su difusión en redes sociales directamente desde la app.
* **Sistema de Citas:** Gestión de visitas de adoptantes interesados para organizar el calendario semanal del refugio.