// 1. VARIABLES GLOBALES (Fundamentales para que el juego funcione)
let personajeObjetivo = null;
let puntos = 0;
let preguntasRespondidas = 0;
const MAX_PREGUNTAS = 5;

// 2. FUNCIÓN PARA GENERAR EL DUELO
async function generarDuelo() {
  try {
    const response = await fetch("https://thesimpsonsapi.com/api/characters");
    const data = await response.json();
    const todosLosPersonajes = data.results;

    // Seleccionamos el objetivo
    const indiceAzar = Math.floor(Math.random() * todosLosPersonajes.length);
    personajeObjetivo = todosLosPersonajes[indiceAzar];

    // Actualizamos textos
    document.getElementById("nombrepersonaje").textContent =
      personajeObjetivo.name;
    document.getElementById("title").textContent = "¿Quién es este personaje?";
    document.getElementById(
      "fechapersonaje"
    ).textContent = `Puntos: ${puntos} / ${MAX_PREGUNTAS}`;

    // Creamos opciones (1 correcto + 5 incorrectos)
    const incorrectos = todosLosPersonajes
      .filter((p) => p.id !== personajeObjetivo.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 5);

    const opciones = [personajeObjetivo, ...incorrectos].sort(
      () => Math.random() - 0.5
    );

    // Dibujamos imágenes
    const imagenContenedor = document.getElementById("imagen");
    imagenContenedor.innerHTML = "";

    opciones.forEach((personaje) => {
      const img = document.createElement("img");
      const cdnBase = "https://cdn.thesimpsonsapi.com/200";
      img.src = `${cdnBase}${personaje.portrait_path}`;
      img.alt = personaje.name;
      img.classList.add("img-personaje");

      // Evento de click
      img.onclick = () => verificarSeleccion(personaje.id, img);

      imagenContenedor.appendChild(img);
    });
  } catch (error) {
    console.error("Error al generar el duelo:", error);
    document.getElementById("title").textContent = "Error al cargar la API";
  }
}

// 3. FUNCIÓN PARA VERIFICAR
function verificarSeleccion(idSeleccionado, elementoImg) {
  const todasLasImgs = document.querySelectorAll(".img-personaje");
  todasLasImgs.forEach((img) => (img.style.pointerEvents = "none"));

  if (idSeleccionado === personajeObjetivo.id) {
    puntos++;
    elementoImg.style.borderColor = "#2ecc71"; // Verde
  } else {
    elementoImg.style.borderColor = "#e74c3c"; // Rojo
    // Buscamos la imagen correcta para marcarla en verde también
    todasLasImgs.forEach((img) => {
      if (img.alt === personajeObjetivo.name) img.style.borderColor = "#2ecc71";
    });
  }

  preguntasRespondidas++;

  setTimeout(() => {
    if (preguntasRespondidas < MAX_PREGUNTAS) {
      generarDuelo();
    } else {
      finalizarJuego();
    }
  }, 1200);
}

// 4. FUNCIÓN FINAL
function finalizarJuego() {
  const box = document.getElementById("box");
  box.innerHTML = `
        <h2>¡Fin del Juego!</h2>
        <p class="nombrepersonaje">Acertaste ${puntos} de ${MAX_PREGUNTAS}</p>
        <button class="btn" onclick="location.reload()">Jugar de nuevo</button>
    `;
}

// 5. INICIO AUTOMÁTICO
generarDuelo();

// Evento para el botón siguiente por si quieren saltar
document.getElementById("btn").addEventListener("click", () => {
  if (preguntasRespondidas < MAX_PREGUNTAS) generarDuelo();
});
