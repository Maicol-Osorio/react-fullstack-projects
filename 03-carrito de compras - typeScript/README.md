# ⚡ Tienda de Guitarras | React + Vite + Custom Hook + TypeScript

Una aplicación web desarrollada con **React**, **Vite** y ahora con **TypeScript**, que simula una tienda virtual de guitarras. Esta es una evolución progresiva del proyecto original de carrito de compras:

1. ✅ Fase 1: Carrito funcional con `useState`, `useEffect`, `useMemo`
2. ✅ Fase 2: Refactorización usando un **Hook personalizado** (`useCart`)
3. ✅ Fase 3: **Migración completa a TypeScript** para mayor robustez y mantenibilidad

---

## 🚀 Novedades de esta versión

### 🧩 Integración de TypeScript

- Código completamente tipado
- Uso de **types e interfaces**
- Tipado de props en componentes
- Creación de tipos personalizados para guitarras y carrito
- Uso de **Utility Types** y extensión de tipos

---

## 🛠️ Tecnologías

- ⚛️ React (con JSX y Hooks)
- ⚡ Vite (build ultra rápido)
- 🎨 CSS moderno
- 🧠 Custom Hook: `useCart`
- 💾 LocalStorage (persistencia)
- 🧾 TypeScript (seguridad de tipos en tiempo de desarrollo)
- 🧰 useState, useEffect, useMemo

---

## 📚 Funcionalidades Principales

- ✅ Interfaz modular con componentes reutilizables
- ✅ Hook personalizado para lógica de carrito (`useCart`)
- ✅ Añadir, incrementar, eliminar y vaciar productos
- ✅ Cálculo automático del total a pagar
- ✅ Persistencia del carrito con LocalStorage
- ✅ Optimización de rendimiento con `useMemo`
- ✅ Tipado completo con TypeScript

---

## 🧱 Estructura del Proyecto

```bash
src/
│
├── components/    # Componentes tipados (Header, Guitar, Cart, etc.)
├── data/          # Datos estáticos (JSON)
├── hooks/         # Custom Hooks (useCart.tsx)
├── types/         # Archivos con Types e Interfaces (guitar.ts, cart.ts, etc.)
├── index.css      # Estilos globales
├── App.tsx        # Componente raíz
└── main.tsx       # Punto de entrada

# 🔁 Clona el repositorio
git clone https://github.com/Maicol-Osorio/react-fullstack-projects.git
cd 03-carrito de compras - typescript

# 📦 Instala las dependencias
npm install

# 💻 Inicia la aplicación en modo desarrollo
npm run dev