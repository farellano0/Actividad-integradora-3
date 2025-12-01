# 🤝 Apoyar para Aprender

**Tecnología y Personas Mayores**

Una plataforma web educativa diseñada para reunir recursos, guías, buenas prácticas y contenidos educativos que apoyen el aprendizaje tecnológico de adultos mayores.

![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC?logo=tailwindcss)
![Firebase](https://img.shields.io/badge/Firebase-11.x-FFCA28?logo=firebase)

---

## 📌 Descripción

Este proyecto es una actividad integradora del curso de Diseño Web Dinámico. Su objetivo es crear un espacio web que apoye a:

- 👨‍🏫 **Docentes** que trabajan con personas mayores
- 🤝 **Tutores y voluntarios** de programas de alfabetización digital
- 👨‍👩‍👧 **Familiares** que ayudan a sus seres queridos
- 🎓 **Estudiantes** que acompañan procesos de inclusión digital

---

## 🚀 Inicio Rápido

### Requisitos

- Node.js 18 o superior
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd actividad-integradora

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

---

## 🔧 Configuración de Firebase

Para habilitar el formulario de contacto:

1. Crea un proyecto en [Firebase Console](https://console.firebase.google.com/)
2. Habilita Firestore Database
3. Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_FIREBASE_API_KEY=tu-api-key
VITE_FIREBASE_AUTH_DOMAIN=tu-proyecto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=tu-proyecto
VITE_FIREBASE_STORAGE_BUCKET=tu-proyecto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123
```

---

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Navbar.jsx      # Navegación responsiva
│   ├── Footer.jsx      # Pie de página
│   ├── CardRecurso.jsx # Tarjetas de recursos
│   └── ...
├── pages/              # Páginas del sitio
│   ├── Home.jsx        # Inicio
│   ├── Conocer.jsx     # Información educativa
│   ├── Recursos.jsx    # Biblioteca de recursos
│   ├── Historias.jsx   # Testimonios
│   ├── Capacitate.jsx  # Cursos
│   └── Contacto.jsx    # Formulario
├── data/               # Datos JSON
└── firebase.js         # Configuración Firebase
```

---

## 🛠️ Tecnologías

| Tecnología | Uso |
|------------|-----|
| **React 19** | Framework UI |
| **Vite 7** | Build tool |
| **Tailwind CSS 4** | Estilos |
| **React Router 7** | Navegación |
| **Firebase** | Backend |
| **Framer Motion** | Animaciones |

---

## 📜 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Compilar para producción
npm run preview  # Vista previa de producción
npm run lint     # Verificar código
```

---

## 📖 Documentación

Para información detallada sobre decisiones de diseño, desafíos técnicos y reflexiones, consulta el archivo [DOCUMENTACION.md](./DOCUMENTACION.md).

---

## 🎨 Características

- ✅ Diseño responsivo
- ✅ Colores cálidos y accesibles
- ✅ Animaciones sutiles
- ✅ Formulario con Firebase
- ✅ Navegación SPA
- ✅ Contenido real y significativo
- ✅ Accesibilidad (WCAG 2.1)

---

## 📝 Licencia

Proyecto académico - Diseño Web Dinámico

---

**Desarrollado con ❤️ para la inclusión digital de adultos mayores**
