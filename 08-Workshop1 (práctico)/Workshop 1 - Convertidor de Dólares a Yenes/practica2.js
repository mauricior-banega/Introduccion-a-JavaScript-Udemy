

function moneda()
{
    this.nombre;
    this.tipoDeCambio;
    this.mensaje = ["No se esta ejecutando ninguna transacción",
                "Monto demaciado alto, pase a nuestra sucursal",
                "El 13 es de mala suerte"
              ];


    this.convertir = function(monto)
    {
       conversionResultado = monto * this.tipoDeCambio;

    //alert(conversionResultado);
        var mensajeHTML;
        
        if(conversionResultado <=0)
        {
            mensajeHTML = this.mensaje[0];
        }   
            else if(monto == 13)
            {   
                mensajeHTML = this.mensaje[2];
            }   
                else if (monto > 1000)
                {
                    mensajeHTML = this.mensaje[1];
                }  
                     else
                    {
                        mensajeHTML = monto + " dolares son "+conversionResultado+" "+this.nombre;
                    }

    document.getElementById("resultadoDelCambio").innerHTML = mensajeHTML;

    }
}

//Instancia del objeto moneda "Yenes"
var yen = new moneda();

    yen.nombre = "Yenes";
    yen.tipoDeCambio = 99.5; 

//Instancia del objeto moneda "Soles"
var sol = new moneda();

    sol.nombre = "Soles";
    sol.tipoDeCambio = 2.7; 

//Instancia del objeto moneda "Pesos Argentinos"
var peso = new moneda();

peso.nombre = "Peso ARG";
peso.tipoDeCambio = 377; 


function convertirMoneda(tipoDeMoneda)
{   
    var montoSeleccionado = document.getElementById("monto").value;

    if(tipoDeMoneda == "yen")
    {
        yen.convertir(montoSeleccionado);
    } 
        else if(tipoDeMoneda == "sol")
        {
            sol.convertir(montoSeleccionado);
        }   
            else if(tipoDeMoneda == "peso")
            {
                peso.convertir(montoSeleccionado);
            }

    
}
