# ⚡ Tienda de Guitarras | React + Vite + Custom Hook

Una aplicación web desarrollada con **React** y **Vite** que simula una tienda virtual de guitarras. Esta es una **versión actualizada** del proyecto original del carrito de compras, ahora con una arquitectura mejorada utilizando un **hook personalizado (`useCart`)** para manejar toda la lógica del carrito de forma centralizada y reutilizable.

---

## 🆕 ¿Qué hay de nuevo?

Este proyecto fue originalmente construido con `useState`, `useEffect` y `useMemo` para manejar el carrito de compras.  
En esta nueva versión, **toda la lógica del carrito ha sido migrada a un hook personalizado llamado `useCart`**, lo que permite:

- ✅ Código más limpio y desacoplado
- ✅ Mejor organización de la lógica del negocio
- ✅ Mayor reutilización y escalabilidad

---

## 🛠️ Tecnologías

- ⚛️ React (con JSX y Hooks)
- ⚡ Vite (build ultra rápido)
- 🎨 CSS moderno
- 🧠 Custom Hook: `useCart`
- 💾 LocalStorage (para carrito persistente)
- ⚙️ useState, useEffect, useMemo

---

## 📚 Funcionalidades Principales

- ✅ Interfaz modular con componentes reutilizables
- ✅ Hook personalizado `useCart` para manejar el carrito
- ✅ Añadir, incrementar, eliminar y vaciar productos
- ✅ Cálculo automático del total a pagar
- ✅ Persistencia del carrito con LocalStorage
- ✅ Optimización del rendimiento con `useMemo`

---

## 🧱 Estructura del Proyecto

```bash
src/
│
├── components/    # Componentes reutilizables (Guitar, Header.)
├── data/          # Datos estáticos (JSON)
├── hooks/         # Custom Hooks (useCart.js)
├── index.css      # Estilos globales
├── App.jsx        # Componente raíz
└── main.jsx       # Punto de entrada

# 🔁 Clona el repositorio
git clone https://github.com/Maicol-Osorio/react-fullstack-projects.git
cd 02-carrito de compras - custom hooks

# 📦 Instala las dependencias
npm install

# 💻 Inicia la aplicación en modo desarrollo
npm run dev