
var prueba = "hola"; //Hacemos prueba variable global, puede ser accedida en cualquier parte del documento.

function saludo()
{   
    //var prueba = "hola";
    prueba = "adios"; //Cambiamos el valor de la variable global
}

saludo();

document.write(prueba); //Sino hacemos prueba como variable global no podremos acceder porque solo es local.


document.write("<br>");

    //Actividades


var saludando = "Hasta la vista";

function terminator()
{
    saludando = "Baby";
}


document.write(saludando, "<br>");

terminator();

document.write(saludando);