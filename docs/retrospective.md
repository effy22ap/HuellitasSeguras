# Documentación Final y Retrospectiva - Huellitas Seguras

## 1. Aprendizaje del Proyecto y Conexión del Stack
Durante el desarrollo de **Huellitas Seguras**, se ha construido una aplicación Fullstack real interactiva. El flujo del ecosistema se conecta de la siguiente manera:
* **Frontend (React + TypeScript):** Gestiona la interfaz de usuario con Tailwind CSS. Se implementó un sistema de estado global mediante la API Context (`AnimalContext`) y hooks personalizados (`useAnimalesContext`) para proveer los datos de forma limpia a las páginas.
* **Capa de Red:** Un cliente unificado (`src/api/client.ts`) aísla y tipa las llamadas asíncronas asumiendo el rol de intercomunicador exclusivo.
* **Backend (Node.js + Express):** Diseñado con una arquitectura modular en tres capas independientes (*Routes*, *Controllers* y *Services*) para procesar peticiones HTTP de forma escalable sin amontonar responsabilidades.

## 2. Principales Problemas Encontrados y Soluciones

El proceso de integración presentó desafíos técnicos valiosos en la gestión de tipados y sintaxis:
* **Errores de Ciclo de Vida en Contextos:** Inicialmente, se detectaron llamadas erróneas a mutadores de estado directamente dentro del cuerpo de renderizado (`setState in render`), amenazando con generar bucles infinitos. Se solucionó encapsulando de forma estricta las llamadas asíncronas dentro de hooks de efecto `useEffect`.
* **Políticas de Importación Estrictas en TypeScript:** El compilador rechazaba importaciones de interfaces comunes requiriendo la declaración explícita de tipos (`import type`). Esto se corrigió ajustando los encabezados del cliente de API de acuerdo con los estándares de linter rigurosos.
* **Control de Errores Sintácticos en el Backend:** Durante la modularización del servidor principal, pequeños fallos de escritura en bloques globales (como caracteres erróneos o palabras clave desconfiguradas tipo `finaly`) interrumpieron el hilo de ejecución. Se resolvieron mediante el análisis minucioso de la traza de errores de Node.js en la terminal.

## 3. Uso de Inteligencia Artificial (IA) en el Desarrollo
La IA se utilizó de forma estratégica a lo largo de todo el ciclo de desarrollo como un copiloto técnico de depuración en tiempo real:
* **Análisis de Errores en Cascada:** Actuó como herramienta de diagnóstico para interpretar logs complejos de la pestaña *Problems* de Visual Studio Code, aislando problemas puntuales de rutas relativas o dependencias rotas.
* **Refactorización Segura:** Ayudó a migrar un servidor monolítico de un solo archivo a un esquema limpio por capas sin alterar el comportamiento de los contratos de la API REST.
* **Garantía de Calidad:** Permitió contrastar los requerimientos de la rúbrica directamente contra el código escrito, mitigando la persistencia local heredada para unificar la base de datos simulada en memoria.