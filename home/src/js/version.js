// version.js

// Intervalo en el que verificará la versión (en milisegundos)
const INTERVALO = 60000; // Cada 60 segundos

// Ruta del archivo version.json
const VERSION_URL = "/version.json";

// Almacenar la versión actual en localStorage
const versionActual = localStorage.getItem("version");

// Función para verificar la versión
function verificarActualizacion() {
    fetch(VERSION_URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error("No se pudo cargar el archivo de versión");
            }
            return response.json();
        })
        .then((data) => {
            if (data.version !== versionActual) {
                if (
                    confirm(
                        "Hay una nueva versión del sitio disponible 🥳. ¿Actualizar ahora?",
                    )
                ) {
                    // Actualizar la versión en localStorage
                    localStorage.setItem("version", data.version);
                    // Recargar la página (forzar recarga desde el servidor)
                    window.location.reload(true);
                }
            }
        })
        .catch((error) => {
            console.error("Error verificando la versión:", error);
        });
}

// Verificar la versión periódicamente
asignaIntervalo(checkForUpdate, INTERVALO);

// Verificar la versión al cargar la página
verificarActualizacion();
