function mostrarFechaActual() {
  const fechaElemento = document.querySelector("#date-publication");
  const fechaActual = new Date();

  const opciones = { year: "numeric", month: "short", day: "numeric" };
  const fechaFormateada = fechaActual.toLocaleDateString("en-US", opciones); // Ej: Jun 10, 2025

  fechaElemento.textContent = `Published ${fechaFormateada}`;
}

// Llamar a la función cuando la página se haya cargado
window.addEventListener("DOMContentLoaded", mostrarFechaActual);
