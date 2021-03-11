"use strict";

// El script se cargará una vez se lea todo el documento HTML.
document.addEventListener("DOMContentLoaded", function () {
  // Al pasar el ratón por encima del botón departamentos se muestrá el menú.
  var departamentos = document.getElementById("departamentos");
  departamentos.addEventListener("mouseover", abrirDepartamentos);

  // Obtenemos todas las categorias.
  var categorias = document.querySelectorAll(".categorias a");
  ;
  // Obtenemos el atributo personalizado de cada enlace.
  categorias.forEach((enlace) => {
    enlace.addEventListener("mouseenter", (evento) => {
      if (!esMovil()) {
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
      }
    });
  });

  //RESPONSIVE DESIGN
  // Saber si el dispositivo es móvil.
  var menu = document.getElementById("boton-abrir");
  var departamentos = document.querySelectorAll(".subcategorias");

  if (!esMovil()) {
    if (menu.classList.contains("activo")) {
      menu.classList.remove("activo");
    }
  } else {
    if (!menu.classList.contains("activo")) {
      menu.classList.add("activo");

      departamentos.forEach((elemento) => {
        if (elemento.classList.contains("activo")) {
          elemento.classList.remove("activo");
        }
      });
    }
  }

  // Abrir menú al hacer click al botón.
  menu.addEventListener("click", (evento) => {
    evento.preventDefault();
    var contenedor_enlaces = document.querySelector(".contenedor-enlaces");
    contenedor_enlaces.classList.add("activo");
    activarMenu();
  });
});

function abrirDepartamentos() {
  if (!esMovil()) {
    var grid = document.getElementById("grid");
    grid.classList.add("activo");

    // Se abre la primera categorias al abrir el menu.
    var categoria = document.querySelector('.subcategorias');
    categoria.classList.add('activo')
    // Al salir del menú se cierra automáticamente.
    grid.addEventListener("mouseleave", () => {
      grid.classList.remove("activo");
    });
  }
}

function esMovil() {
  if (window.innerWidth <= 800) {
    return true;
  } else {
    return false;
  }
}

function activarMenu() {
  var menu = document.querySelector(".contenedor-enlaces");
  var abrir = document.getElementById("boton-abrir");
  var cerrar = document.getElementById("boton-cerrar");

  if (menu.classList.contains("activo")) {
    abrir.classList.remove("activo");
    cerrar.classList.add("activo");

    // Funcionalidad botón cerrar.
    cerrar.addEventListener("click", function () {
      abrir.classList.add("activo");
      cerrar.classList.remove("activo");
      menu.classList.remove("activo");
    });

    // Funcionalidad botón departamentos.
    var departamentos = document.getElementById("departamentos");
    departamentos.addEventListener("click", activarCategorias);
  }
}

function activarCategorias() {
  var categorias = document.getElementById("grid");
  categorias.classList.add("activo");

  // Al abrir la categoria el boton cerrar el menu desaparecerá.
  var cerrar = document.getElementById("boton-cerrar");
  cerrar.classList.remove("activo");

  /* Funcionalidad botón cerrar */
  var volver = document.getElementById("boton-volver");
  volver.addEventListener("click", function (evento) {
    evento.preventDefault();
    categorias.classList.remove("activo");

    //Al cerrar categorias se vuelve activar el botón cerrar.
    cerrar.classList.add("activo");
  });

  /* Subcategorias */
  var enlaces = document.querySelectorAll(".categorias a");

  enlaces.forEach((elemento) => {
    elemento.addEventListener("click", function (evento) {
      evento.preventDefault();
      var atributoCategoria = elemento.dataset.categoria;

      var subcategorias = document.querySelectorAll(".subcategorias");
      subcategorias.forEach((enlace) => {
        var atributoSubcategoria = enlace.dataset.categoria;

        // Mostramos solamente la categoria seleccionada.
        if (atributoCategoria == atributoSubcategoria) {
          const contenedorSubcategorias = document.querySelector(
            ".contenedor-subcategorias"
          );
          contenedorSubcategorias.classList.add("activo");
          enlace.classList.add("activo");

          // Añadir funcionalidad a botón volver de cada subcategoria.
          var botonAtras = document.querySelector(
            ".subcategorias.activo .boton-volver"
          );
          botonAtras.addEventListener("click", function (evento) {
            evento.preventDefault();
            if (contenedorSubcategorias.classList.contains("activo")) {
              enlace.classList.remove("activo");
              contenedorSubcategorias.classList.remove("activo");

              if (botonAtras.classList.contains("activo")) {
                botonAtras.classList.remove("activo");
              }
            }
          });
        } else {
          if (enlace.classList.contains("activo")) {
            enlace.classList.remove("activo");
          }
        }
      });
    });
  });
}
