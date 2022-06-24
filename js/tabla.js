"use strict"

// EVENTLISTENERS
document.querySelector("#btn-agregar").addEventListener("click", agregar);
document.querySelector("#btn-agregar_X3").addEventListener("click", agregarx3);
document.querySelector("#btn-vaciar").addEventListener("click", vaciar);

//FUNCIONES 
function agregar() {
    let informacionProducto = document.querySelectorAll(".formularioProductos");
    let producto = {
        'nombre': informacionProducto[0].value,
        'chico': informacionProducto[1].value,
        'mediano': informacionProducto[2].value,
        'grande': informacionProducto[3].value,
    }
    mostrar(producto);
}

function agregarx3() {
    agregar();
    agregar();
    agregar();
}

function vaciar() {
    let tabla = document.querySelector("#cuerpoTabla");
    tabla.innerHTML = "";
}

function mostrar(producto) {
    let tabla = document.querySelector("#cuerpoTabla");
    let row = tabla.insertRow(-1);

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    cell1.innerHTML = producto.nombre;
    cell2.innerHTML = producto.chico;
    cell3.innerHTML = producto.mediano;
    cell4.innerHTML = producto.grande;
}

//Valores de Tabla Precargados

function precargar() {
    let precargado = [
        { 'nombre': "Soporte Notebook regulable", 'chico': 0, 'mediano': 1000, 'grande': 1200 },
        { 'nombre': "Soporte Notebook fijo", 'chico': 0, 'mediano': 800, 'grande': 1000 },
        { 'nombre': "Soporte Celular", 'chico': 0, 'mediano': 600, 'grande': 0 },
        { 'nombre': "Llavero (50u) 1 color", 'chico': 2100, 'mediano': 2300, 'grande': 0 },
        { 'nombre': "Llavero (50u) 2 colores", 'chico': 2300, 'mediano': 2500, 'grande': 0 },
        { 'nombre': "Llavero (50u) 3 colores", 'chico': 2500, 'mediano': 2700, 'grande': 0 },
        { 'nombre': "Chapas id. mascotas", 'chico': 400, 'mediano': 500, 'grande': 600 },
        { 'nombre': "Maceta (cualquier modelo)", 'chico': 700, 'mediano': 850, 'grande': 1000 }
    ];

    for (let elem of precargado) {
        mostrar(elem);
    }

}

precargar();