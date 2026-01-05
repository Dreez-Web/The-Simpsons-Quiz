# 🍩 Simpsons Al-Quiz - API Edition

¡Bienvenido a **Simpsons Al-Quiz**! Un juego de agilidad visual desarrollado con JavaScript Vanilla que consume datos en tiempo real de una API REST. El objetivo es identificar al personaje correcto entre 6 opciones generadas dinámicamente.

![Simpsons Quiz Banner](https://cdn.thesimpsonsapi.com/500/character/1.webp) ## 🚀 Características

- **Consumo de API:** Datos obtenidos dinámicamente de `The Simpsons API`.
- **Lógica de Duelo:** Sistema que selecciona un objetivo y 5 "impostores" sin repetir personajes.
- **Interfaz Moderna:** Diseño responsivo con CSS Grid, efectos de hover y transiciones suaves.
- **Game Loop:** El juego consta de 5 rondas con contador de puntaje acumulado.
- **Optimización de Imágenes:** Uso de CDN para cargar miniaturas ligeras y mejorar el rendimiento.

## 🛠️ Tecnologías utilizadas

- **HTML5:** Estructura semántica.
- **CSS3:** Layout con Grid y Flexbox, animaciones de hover (zoom) y diseño moderno.
- **JavaScript (ES6+):** \* `Fetch API` con `async/await`.
  - Manipulación dinámica del DOM.
  - Métodos de arrays (`filter`, `sort`, `slice`).
  - Gestión de estado y eventos.

## 🕹️ Cómo jugar

1. El juego te mostrará un nombre en la parte superior: **"¿Quién es [Nombre]?"**.
2. Deberás elegir la imagen correcta entre las 6 opciones disponibles.
3. Si aciertas, el borde se pondrá **verde**. Si fallas, se pondrá **rojo** y verás cuál era la opción correcta.
4. Tienes 5 intentos para lograr la puntuación máxima. ¡Suerte!

## 🔧 Instalación y Despliegue

Si quieres ejecutar este proyecto localmente:

1. Clona el repositorio:
   ```bash
   git clone [https://github.com/TU_USUARIO/nombre-de-tu-repo.git](https://github.com/Dreez-Web/The-Simpsons-Quiz.git)
   ```
