
function convertirYens(dolaresTotales, nombre)
{
    //var dolaresTotales = 100;

    var resultado = dolaresTotales * 98.5;

    document.write(nombre +" tienes estos Yens: "+resultado);
    document.write("<br>");
}

//Quitamos de la F() la cifra estatica y la pasamos pero en forma de parámetro mediante la llamada a la misma. Haciendo la funcion "dinamica".


//---------------

convertirYens(100,"Manolo");


    //Actividades

    function convertirPeso (dolares, banco)
    {
    
        var convertirpeso = dolares * 380;
    
        document.write("Tienes en Banco: "+banco+"$"+convertirpeso);
    }
    
    convertirPeso(1,"Galicia");