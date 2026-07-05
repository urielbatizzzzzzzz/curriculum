# Uriel Castorela Cuevas — Portafolio & CV

Portafolio web personal y currículum de **Uriel Castorela Cuevas**, Ingeniero en Inteligencia Artificial (ESCOM — IPN).
Sitio de una sola página, bilingüe (Español / Inglés), con modo claro/oscuro, construido con **React + Vite** y desplegado en **GitHub Pages**.

🔗 **Sitio en vivo:** https://urielbatizzzzzzzz.github.io/curriculum/

---

## ✨ Características

- **Bilingüe** — toggle Español / Inglés (detecta el idioma del navegador).
- **Modo claro / oscuro** — respeta la preferencia del sistema y la recuerda.
- **Diseño responsivo** — optimizado para móvil, tablet y escritorio.
- **Animaciones al hacer scroll** — con `IntersectionObserver`, sin dependencias extra.
- **CV descargable en PDF** — versiones en español e inglés.
- **Accesible** — respeta `prefers-reduced-motion` y usa HTML semántico.

## 🧱 Stack

| Área | Tecnología |
|------|-----------|
| UI | React 18 |
| Build | Vite 5 |
| Estilos | CSS puro con variables (theming) |
| Hosting | GitHub Pages (GitHub Actions) |

## 📂 Estructura

```
curriculum/
├─ public/
│  ├─ cv/                 # CVs en PDF (ES / EN)
│  └─ favicon.svg
├─ src/
│  ├─ components/         # Nav, Hero, Projects, Skills, Education, Contact, Footer
│  ├─ data/content.js     # Contenido bilingüe (editar aquí para actualizar todo)
│  ├─ hooks/useReveal.js  # Animaciones de aparición
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css           # Sistema de diseño
├─ .github/workflows/     # Despliegue automático a GitHub Pages
├─ CV_Uriel_Castorela*.{md,html,pdf}   # Fuentes del CV
└─ vite.config.js
```

## 🚀 Desarrollo local

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # compilar a /dist
npm run preview  # previsualizar la compilación
```

## 📝 Cómo actualizar el contenido

Casi todo el texto vive en un solo archivo: **`src/data/content.js`**.
Edita los objetos `es` / `en` (perfil, proyectos, habilidades, educación) y los enlaces en `links`. No necesitas tocar los componentes.

Para actualizar el CV en PDF, reemplaza los archivos en `public/cv/`.

## 📬 Contacto

- **Email:** castorela.cuevas.uriel@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/uriel-castorela-cuevas/
- **GitHub:** https://github.com/urielbatizzzzzzzz

---

© Uriel Castorela Cuevas
