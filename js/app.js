"use strict";

// El script se cargará una vez se lea todo el documento HTML.
document.addEventListener("DOMContentLoaded", function () {
  // Al pasar el ratón por encima del botón departamentos se muestrá el menú.
  var departamentos = document.getElementById("departamentos");
  departamentos.addEventListener("mouseover", abrirDepartamentos);

  // Obtenemos todas las categorias.
  var categorias = document.querySelectorAll(".categorias a");

  // Obtenemos el atributo personalizado de cada enlace.
  categorias.forEach((enlace) => {
    enlace.addEventListener("mouseenter", (evento) => {
      var atributoCategoria = evento.target.dataset.categoria;

      var subcategorias = document.querySelectorAll(".subcategorias");

      subcategorias.forEach((enlace) => {
        var atributoSubcategoria = enlace.dataset.categoria;

        // Si la categoria es la misma que las subcategorias, estás se activan, si no se desactivan.
        if (atributoCategoria == atributoSubcategoria) {
          enlace.classList.add("activo");
        } else {
          if (enlace.classList.contains("activo")) {
            enlace.classList.remove("activo");
          }
        }
      });
    });
  });

  //RESPONSIVE DESIGN 
  // Saber si el dispositivo es móvil.
  var menu = document.getElementById("boton-abrir");
  
  if (!esMovil()){
    if (menu.classList.contains('activo')){
      menu.classList.remove('activo');
    }
  } else{
    if (!menu.classList.contains('activo')){
      menu.classList.add('activo');
    }
  }

  // Abrir menú al hacer click al botón.
  menu.addEventListener('click', (evento) => {
    evento.preventDefault();
    var contenedor_enlaces = document.querySelector('.contenedor-enlaces');
    contenedor_enlaces.classList.add('activo');

    // Cuando el cursor salga de menú este se esconde.
    contenedor_enlaces.addEventListener('mouseleave', () => {
      contenedor_enlaces.classList.remove('activo');

    });
    
    activarMenu();
  });
});


function abrirDepartamentos() {
  if (!esMovil()) {
    var grid = document.getElementById("grid");
    grid.classList.add("activo");
    // Al salir del menú se cierra automáticamente.
    grid.addEventListener("mouseleave", () => {
      grid.classList.remove("activo");
    });
  } else{
  }
}

function esMovil() {
  if (window.innerWidth <= 800) {
    return true;
  } else {
    return false;
  }
}

function activarMenu(){
  var menu = document.querySelector('.contenedor-enlaces');
  var abrir = document.getElementById('boton-abrir');
  var cerrar = document.getElementById('boton-cerrar');

  if (menu.classList.contains('activo')){
    abrir.classList.remove('activo');
    cerrar.classList.add('activo');
  } else{
    abrir.classList.add('activo');
    cerrar.classList.remove('activo');
  }
}
