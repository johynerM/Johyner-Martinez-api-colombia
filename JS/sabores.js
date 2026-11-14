const mensaje = document.getElementById("mensaje");
const contenedor = document.getElementById("contenedor");
const conteo = document.getElementById("conteo");

fetch("https://api-colombia.com/api/v1/TypicalDish")
    .then(response => {
        if (!response.ok) {
            throw new Error("Error " + response.status);
        }
        return response.json();
    })
    .then(mostrarPlatos)
    .catch(error => {
        console.log(error);
        mensaje.textContent = "No se pudieron cargar los datos. Intenta de nuevo más tarde.";
    });

function mostrarPlatos(platos) {
    mensaje.style.display = "none";
    conteo.textContent = "Total de platos: " + platos.length;

    platos.forEach(plato => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta";

        const titulo = document.createElement("h2");
        titulo.textContent = plato.name;

        const imagen = document.createElement("img");
        imagen.src = plato.imageUrl;
        imagen.alt = plato.name;

        const departamento = document.createElement("p");
        departamento.className = "departamento";
        departamento.textContent = "Departamento: " + (plato.department?.name || "No disponible");

        const descripcion = document.createElement("p");
        descripcion.textContent = plato.description || "Sin descripción";

        tarjeta.appendChild(titulo);
        tarjeta.appendChild(imagen);
        tarjeta.appendChild(departamento);
        tarjeta.appendChild(descripcion);
        contenedor.appendChild(tarjeta);
    });
}