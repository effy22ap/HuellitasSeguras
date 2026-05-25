# 🧩 Documentación de Componentes Reutilizables - Huellitas Seguras

En este módulo se detallan los componentes visuales desarrollados en React, utilizando propiedades fuertemente tipadas con TypeScript y maquetados mediante Tailwind CSS.

## 1. Componente: StatCard
* **Descripción:** Diseñado para mostrar indicadores numéricos clave y métricas globales en el panel de control.
* **Propiedades (Props):**
    * `title` (string): Etiqueta descriptiva del indicador.
    * `value` (number): Cifra cuantitativa a renderizar.
    * `color` (string): Clase de color utilitaria de Tailwind para el fondo del icono.

## 2. Componente: AnimalCard
* **Descripción:** Tarjeta interactiva individual para representar visualmente la ficha técnica y médica de cada mascota refugiada.
* **Propiedades (Props):**
    * `animal` (Object): Objeto que cumple estrictamente con la interfaz de datos `Animal` (contiene `nombre`, `especie`, `edad` y `estado`).
* **Lógica Particular:** Implementa un renderizado condicional mediante clases dinámicas de Tailwind para modificar el color del indicador de estado en función de la salud o disponibilidad de la mascota.