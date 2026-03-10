const URL_SCRIPT = "https://script.google.com/macros/s/AKfycbw7s5frD5Gq5smD_j2LAv9EH23-mPrLTpvQ5mhNMOCOMvneiXkhf8jKHpn7gAEBlT0z/exec";

async function cargarDatos() {
  try {
    // Agregamos ?read=true para que el script sepa que queremos LEER
    const respuesta = await fetch(URL_SCRIPT + "?read=true");
    const datos = await respuesta.json();

    const cuerpoTabla = document.getElementById("tabla-cuerpo");
    cuerpoTabla.innerHTML = ""; // Limpiar tabla antes de cargar

    // Mostrar los últimos 10 datos (o todos si prefieres)
    datos.reverse().slice(0, 10).forEach(fila => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${fila.fecha}</td>
        <td>${fila.hora}</td>
        <td>${fila.lux}</td>
      `;
      cuerpoTabla.appendChild(tr);
    });
  } catch (error) {
    console.error("Error cargando datos:", error);
    alert("No se pudieron cargar los datos de la nube.");
  }
}

// Cargar automáticamente al abrir la app
window.onload = cargarDatos;
