'use strict';

// El script se cargará una vez se lea todo el documento HTML. 
document.addEventListener('DOMContentLoaded', function(){

    // Al pasar el ratón por encima del botón departamentos se muestrá el menú.
    var departamentos = document.getElementById('departamentos');
    departamentos.addEventListener('mouseover', abrirDepartamentos);
    
    // Obtenemos todas las categorias.
    var categorias = document.querySelectorAll('.categorias a');

    // Obtenemos el atributo personalizado de cada enlace.
    categorias.forEach((enlace) => {
        enlace.addEventListener('mouseenter', (evento) =>{
            var atributoCategoria = evento.target.dataset.categoria;

            var subcategorias = document.querySelectorAll('.subcategorias');

            subcategorias.forEach((enlace) =>{
                var atributoSubcategoria = enlace.dataset.categoria;

                // Si la categoria es la misma que las subcategorias, estás se activan, si no se desactivan.
                if (atributoCategoria == atributoSubcategoria){
                    enlace.classList.add('activo')
                } else{
                    if(enlace.classList.contains('activo')){
                        enlace.classList.remove('activo');
                    }
                }
            });
        });
    });
});

function abrirDepartamentos(){
    if (!esMovil()){
        var grid = document.getElementById('grid');
        grid.classList.add('activo');

        // Al salir del menú se cierra automáticamente.
        grid.addEventListener('mouseleave', () =>{
            grid.classList.remove('activo');
        });

    } 
}

function esMovil(){
    if (window.innerWidth <= 800){
        return true;
     } else{
        return false;
     }
}