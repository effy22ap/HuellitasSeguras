# Guía de Despliegue e Infraestructura - Huellitas Seguras

Este documento detalla la estrategia de puesta en producción para la arquitectura Fullstack del proyecto utilizando la plataforma **Vercel** y la gestión segura de variables de entorno.

## 1. Configuración de Variables de Entorno (Frontend)

Para evitar dejar la URL del servidor estática en el código (`http://localhost:5000`), se ha preparado el cliente para consumir una variable de entorno global.

### Archivo `.env.local` (Raíz del Frontend)
Para desarrollo local, se crea un archivo `.env.local` con el siguiente contenido:
```env
VITE_API_URL=http://localhost:5000/api/v1/animales