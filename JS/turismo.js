const mensaje = document.getElementById("mensaje");
const contenedor = document.getElementById("contenedor");
const conteo = document.getElementById("conteo");

fetch("https://api-colombia.com/api/v1/TouristicAttraction")
    .then(response => {
        if (!response.ok) {
            throw new Error("Error " + response.status);
        }
        return response.json();
    })
    .then(mostrarAtracciones)
    .catch(error => {
        console.log(error);
        mensaje.textContent = "No se pudieron cargar los datos. Intenta de nuevo más tarde.";
    });

function mostrarAtracciones(atracciones) {
    mensaje.style.display = "none";

    const primeras = atracciones.slice(0, 20);
    conteo.textContent = "Mostrando " + primeras.length + " de " + atracciones.length + " atracciones";

    primeras.forEach(atraccion => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta";

        const titulo = document.createElement("h2");
        titulo.textContent = atraccion.name;

        const ubicacion = document.createElement("p");
        ubicacion.className = "departamento";
        ubicacion.textContent = "Ciudad: " + (atraccion.city?.name || "No disponible");

        const descripcion = document.createElement("p");
        descripcion.textContent = atraccion.description || "Sin descripción";

        tarjeta.appendChild(titulo);
        tarjeta.appendChild(ubicacion);
        tarjeta.appendChild(descripcion);
        contenedor.appendChild(tarjeta);
    });
}