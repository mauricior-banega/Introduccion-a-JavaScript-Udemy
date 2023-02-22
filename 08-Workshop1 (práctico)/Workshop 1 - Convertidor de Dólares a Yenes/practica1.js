
var mensaje = ["No se esta ejecutando ninguna transacción",
                "Monto demaciado alto, pase a nuestra sucursal",
                "El 13 es de mala suerte"
              ];

function ConvertirAYenes()
{
    var tipodeCambio = 99.2;
    var montoACambiar = document.getElementById("dolares").value;

    resultado = montoACambiar * tipodeCambio;

    //alert(resultado);

    if(resultado <= 0)
    {
        alert(mensaje[0]);
    }
    else if(resultado>10000)
    {
        alert(mensaje[1]);
    }
    else if(montoACambiar == 13)
    {
        alert(mensaje[2]);
    }
    else
    {
        alert("Resultado: "+montoACambiar+" dólares son "+ resultado+" Yenes");
    }

}

