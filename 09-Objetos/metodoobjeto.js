
//Método del objeto: Es una F() dentro del objeto, que forma parte de el.
var auto = {}

auto.color = "Rojo";
auto.dueno = "Manolo";
auto.marca = "Ferrari";
auto.saludo = function() //Método con F() anónima
{
    //document.write("Mi auto es de color "+ auto.color); //SIN THIS
    document.write(this.dueno+" tiene un "+this.marca+" color "+this.color);
}

auto.saludo(); //Para que se ejecute debemos llamarlo tambien.

//Aclaracion: Los objetos nos permiten ingresar a cada elemento de el, ya que toda la informacion esta relacionada, incluso sin saber el nombre del objeto.

//Entonces podemos llamar a cualquier elemento del objeto sin necesidad de conocer el nombre del objeto, solo el elemento al cual accedemos atravez de "this.".


    //Actividades

    document.write("<br>");

    var auto2 = {}

    auto2.color = "Amarillo";
    auto2.dueno = "Banega";
    auto2.marca = "Lamborgini";
    auto2.modelo = "2013";
    auto2.saludo = function() //Método con F() anónima
    {
        //document.write("Mi auto es de color "+ auto.color); //SIN THIS
        document.write(this.dueno+" tiene un "+this.marca+" color "+this.color+" modelo "+this.modelo);
    }
    
    auto2.saludo();