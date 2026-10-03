document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("revisar");
  const respuesta = document.getElementById("respuesta");
  const resultado = document.getElementById("resultado");

  if (!boton || !respuesta || !resultado) {
    return;
  }

  boton.addEventListener("click", function () {
    const texto = respuesta.value.trim().toLowerCase();
    const correcta = boton.dataset.respuesta || "a";

    if (texto === correcta) {
      resultado.textContent = "¡Correcto! Muy bien.";
      resultado.style.color = "#24723d";
    } else {
      resultado.textContent = "Incorrecto. Revisa el ejemplo e inténtalo de nuevo.";
      resultado.style.color = "#b23a2d";
    }
  });
});