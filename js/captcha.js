"use strict";

//FUNCION VALIDACION DE CAPTCHA
function generarCaptcha() {
    let captcha = Math.floor(Math.random() * 99999);
    document.querySelector("#captcha").innerHTML = (captcha);
}

function encenderBoton() {
    document.querySelector(".botonEnviar").classList.toggle("mostrarBotonEnviar");
}

function validarcaptcha() {
    let value = document.querySelector("#text").value;
    let captcha = document.querySelector("#captcha").innerHTML;
    if (captcha == value) {
        document.querySelector("#correcto").innerHTML = "<h4>Validacion correcta</h4>";
        encenderBoton();
        
    }
    else {
        document.querySelector("#result").innerHTML = "Validacion incorrecta";
        generarCaptcha();
    }
}

let validacion = document.querySelector("#send");
validacion.addEventListener("click", validarcaptcha);

generarCaptcha();


