var alumno1 = ["Juan","Perez","Colombia"];
var alumno2 = ["Pedro","Sanchez","Uruguay"];
var alumno3 = ["Manolo","Pelayo","Mexico"];

//Arreglo Multidimensional; contiene un arreglo dentro de otro.
var clase = [alumno1, alumno2, alumno3];

console.log(clase);
//Muestra los 3 arreglos concatenados

//Pero si quiero acceder a uno de los valores de alguno de los 3 alumnos, ej el país de "Juan".
console.log(clase[0][2])
//Lo realizamos poniendo los indices de cada arreglo.



        //Actividades

var peli1 = ["Matrix","1999","Hermanas Wachowski"];
var peli2 = ["Terminator","1984","James Cameron"];
var peli3 = ["Constantine","2005 ","Francis Lawrence"];

//Arreglo Multidimensional; contiene un arreglo dentro de otro.
var maraton = [peli1, peli2, peli3];

console.log(maraton);

console.log(maraton [0][0])
console.log(maraton [1][2])
console.log(maraton [2][1])