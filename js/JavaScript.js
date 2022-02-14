function Saludar() {
    var edad = document.getElementById("edad").value;
    var nombre = document.getElementById("nombre").value;

    if (edad>=18) {
        alert (nombre + " eres mayor de edad")
        }
    else {
        alert (nombre + " eres menor de edad")
        }
    }   