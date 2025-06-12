function mostrarFechaActual() {
  const fechaElemento = document.querySelector("#date-publication");
  const fechaActual = new Date();

  const opciones = { year: "numeric", month: "short", day: "numeric" };
  const fechaFormateada = fechaActual.toLocaleDateString("en-US", opciones); 

  fechaElemento.textContent = `Published ${fechaFormateada}`;
}

window.addEventListener("DOMContentLoaded", mostrarFechaActual);
