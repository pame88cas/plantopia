# Plantopía 🌿

Tienda online de plantas desarrollada como trabajo práctico del curso de React (Talento Tech). Permite explorar un catálogo de productos, ver el detalle de cada planta y gestionar un carrito de compras.

## Funcionalidades

- Listado de productos obtenido de forma asíncrona (`fetch`).
- Filtro de productos por categoría.
- Vista de detalle de cada producto.
- Carrito de compras con Context API: agregar, quitar y ver el resumen de la compra.
- Navegación entre vistas con React Router.

## Tecnologías

- React 19
- React Router DOM
- Vite
- CSS

## Instalación y uso

Clonar el repositorio e instalar las dependencias:

```bash
npm install
```

Levantar el entorno de desarrollo:

```bash
npm run dev
```

Generar la build de producción:

```bash
npm run build
```

## Estructura del proyecto

```
src/
├─ components/
│  ├─ Header, Nav, Footer       → estructura general del sitio
│  ├─ ItemListContainer / Item  → catálogo de productos
│  ├─ ItemDetailContainer       → detalle de producto
│  └─ Cart                      → carrito de compras
├─ context/
│  └─ CartContext                → estado global del carrito
└─ App.jsx                       → rutas de la aplicación
```

## Autora

Pame — Talento Tech, curso de React JS.
