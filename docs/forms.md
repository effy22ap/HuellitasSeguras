# 📝 Gestión de Formularios e Interacción - Huellitas Seguras

Se ha desarrollado un sistema de entrada de datos seguro y reactivo mediante el uso de **Formularios Controlados** en React.

## 1. Funcionamiento del Formulario Controlado
El componente `AnimalForm` delega el control total de los elementos de entrada (`<input>` y `<select>`) al estado interno de React utilizando el hook `useState`. 
Cada pulsación de tecla o cambio de selección dispara un evento (`onChange`) que actualiza de manera sincrónica su respectivo estado en memoria, asegurando que la interfaz de usuario y los datos estén siempre acoplados.

## 2. Validaciones en la Frontera de Usuario
Antes de procesar o enviar los datos a cualquier servicio externo o backend, el formulario realiza las siguientes verificaciones locales al capturar el evento `onSubmit`:
* **Campos Obligatorios:** Comprobación de presencia mediante el método `.trim()` en cadenas de texto para evitar que se envíen espacios en blanco vacíos en el campo de `nombre`.
* **Consistencia Numérica:** Validación de que la `edad` ingresada sea una cifra entera no negativa ($\ge 0$).

## 3. Comentarios de Retroalimentación (UX)
* **Caso Fallido:** Si la información viola alguna regla, se detiene el flujo operativo y se inyecta un mensaje dinámico de error en color rojo (`bg-red-50`).
* **Caso Exitoso:** Al procesar un registro válido, se activa un banner verde confirmatorio (`bg-green-50`), se propaga la información hacia el nodo superior y se resetean todos los estados de los inputs a sus valores iniciales predeterminados.