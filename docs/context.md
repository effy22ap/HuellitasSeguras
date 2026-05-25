# 🧠 Estado Global - Context API en Huellitas Seguras

## 1. Justificación de Uso de Context API
El uso de Context API es indispensable en este proyecto para evitar el *prop drilling* (transferir datos innecesariamente a través de múltiples niveles de componentes intermedios). 

Al centralizar el listado de animales y sus operaciones de edición/creación en un único **Provider** de nivel superior, garantizamos que tanto el Dashboard de estadísticas como el formulario de registro y la cuadrícula de adopción sincronicen sus datos automáticamente en tiempo real sin romper el flujo de la aplicación.

## 2. Estructura del Contexto
* **Provider:** `AnimalProvider` encapsula el estado reactivo (`animales`, `loading`) e interactúa de manera directa asíncrona con el backend en Express.
* **Consumo:** Se diseñó el Custom Hook optimizado `useAnimalContext` para permitir a los componentes hijo suscribirse exclusivamente a los datos globales con una sola línea de código.