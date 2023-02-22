
//Instancia del objeto: Es convertir un objeto a F(). Con todos los metodos contenidos dentro de ese objeto funcion.

var auto = function()
{
    this.color;
    this.dueno;
    this.marca;
    this.saludo = function()
    {
        document.write("<br>"+this.dueno+" tiene un "+this.marca+" color "+this.color);
    }

    
}


var pepe = new auto(); //Instanciamos: Similar a crear una clase del objeto auto.

pepe.color="verde";
pepe.dueno="Pepe";
pepe.marca="Toyota";
pepe.saludo();



var juan = new auto(); //Instanciamos: Similar a crear una clase del objeto auto.

juan.color="azul";
juan.dueno="Juan";
juan.marca="Honda";
juan.saludo();


        //Actividades

        var estudiante = function()
        {
            this.nombre;
            this.pais;
            this.nivel;
            this.impresion = function()
            {
                document.write("<br>"+this.nombre+" con pais: "+this.pais+", cursa "+this.nivel+" año.");
            }
        
            
        }

var braian  = new estudiante(); //Instanciamos: Similar a crear una clase del objeto auto.

braian.nombre="Braian";
braian.pais="Argentina";
braian.nivel="4º";
braian.impresion();

var mauricio  = new estudiante();

mauricio.nombre="Mauricio";
mauricio.pais="Argentina";
mauricio.nivel="3º";
mauricio.impresion();

var daiana  = new estudiante();

daiana.nombre="Daiana";
daiana.pais="Argentina";
daiana.nivel="6º";
daiana.impresion();

var candy  = new estudiante();

candy.nombre="Candy";
candy.pais="Argentina";
candy.nivel="2º";
candy.impresion();

var yamil  = new estudiante();

yamil.nombre="Yamil";
yamil.pais="Argentina";
yamil.nivel="1º";
yamil.impresion();