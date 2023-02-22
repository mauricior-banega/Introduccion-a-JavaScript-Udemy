
function cambiarTexto()
{
    document.getElementById("dato").innerHTML="<strong>Soy</strong> el nuevo texto";
    //No queremos saber que contenido tiene (innerHTML) sino cambiar el contenido del texto. Asique igualamos y le damos el nuevo valor.
}


function cambiarEstilos()
{   
    /*
    document.getElementById("titular").style.color = "#FF0000"
    document.getElementById("titular").style.background = "#FF0000"
    */

    //Para hacerlo mas agil y reducir el codigo podemos crear esta declaracion; creamos una variable a la que le asignamos las propiedades de seleccion, y solo modificamos las propiedades del CSS haciendo la asignacion.

    var elementoSeleccionado = document.getElementById("titular");

    elementoSeleccionado.style.background = "#FF0000";
    elementoSeleccionado.style.color = "#FFBB33";
    elementoSeleccionado.style.boxShadow = "1px 1px 1px #000";

}