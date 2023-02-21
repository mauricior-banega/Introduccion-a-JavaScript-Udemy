
function hola ()
{
document.write("Buenos dias");
}

hola(); //Sin el llamado a la F() no se ejecuta, osea no se muestra el write.

document.write("<br>");

function hola2 ()
{   
    var cantidad1=100;
    var cantidad2=999;
    
    resultado = cantidad1 + cantidad2;

    return resultado;
}

document.write(hola2());
//Motrara lo resultante de la F(), una vez realizada la operacion y traz indicar retorno. En la sentencia de muestra, ahi mismo llamamos a la misma.


    //Actividades

document.write("<br>"); 

    function actividad ()
    {   
        var valor1=500;
        var valor2=500;
        
        total = valor1 + valor2;
    
        return total;
    }

    document.write(actividad());