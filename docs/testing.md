# Plan de Pruebas Manuales y Calidad - Huellitas Seguras

Este documento recopila la batería de pruebas ejecutadas de forma manual en el entorno local para asegurar la estabilidad, el diseño adaptable y la correcta comunicación entre las capas de la aplicación.

## 1. Matriz de Pruebas Funcionales (API & UI)

Se han verificado satisfactoriamente los tres flujos de datos principales del sistema con el servidor encendido:

| ID de Prueba | Componente / Operación | Entrada de Datos (Input) | Resultado Esperado | Estado Actual |
| :--- | :--- | :--- | :--- | :--- |
| **TC-01** | Carga del Listado (`GET`) | Conexión inicial al renderizar la página. | El `apiClient` recupera el arreglo JSON y dibuja las tarjetas en pantalla sin duplicados. | **APROBADO**  |
| **TC-02** | Creación de Registro (`POST`) | Formulario relleno: "Firulais", "Perro", 2 años, "Disponible". | Se envía el JSON al backend, el servidor asigna un ID secuencial dinámico y React actualiza el estado agregándolo visualmente al instante. | **APROBADO**  |
| **TC-03** | Eliminación de Registro (`DELETE`) | Clic sobre el botón "Eliminar Registro" de una tarjeta. | Se envía el ID por parámetro en la URL, el backend lo purga de la memoria y el frontend refresca la grilla aplicando un `.filter()` inmediato. | **APROBADO** |

## 2. Verificación de Diseño Responsive

* **Entorno de Prueba:** Herramientas de desarrollo de Google Chrome / Microsoft Edge (Modo Inspección de Dispositivos).
* **Resoluciones Comprobadas:** * Mobile (375px - iPhone SE)
  * Tablet (768px - iPad Mini)
  * Desktop (1440px - Pantalla Estándar)
* **Resultado:** Las utilidades de rejilla de Tailwind CSS (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) se adaptan de forma fluida. En móviles las tarjetas y el formulario se apilan verticalmente de forma cómoda para el dedo, evitando desbordamientos laterales o barras de scroll horizontal molestas.

## 3. Inspección de Consola y Depuración

Se ha mantenido abierta la consola web (`F12 -> Console`) durante todas las sesiones de pruebas automatizadas en caliente:
* **Errores Críticos (Rojos):** 0 fallos detectados.
* **Advertencias (Amarillas):** 0 advertencias pendientes en tiempo de ejecución.
* Las llamadas a funciones asíncronas no presentan fugas de memoria ni renderizados infinitos (el hook de contexto controla el ciclo de vida correctamente).