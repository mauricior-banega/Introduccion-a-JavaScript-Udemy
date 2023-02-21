var semana =["Lunes", "Martes", "Miercoles"];

semana.push("Jueves","Viernes");//De esta manera indicando el nombre del arreglo, mediante push metemos ese valor dentro.

console.log(semana);

semana.pop(); //(.pop) Elimina el ultimo elemento del array. Mostramos como queda en consola.

console.log(semana); 

//------------------

var zoologico = ["Bufalo", "Antilope", "Cabra"];

//Ordenamiento alfabeticamente: Ordena distinto a como fueron cargados, cambiando asi el indice del elemento.
zoologico.sort();

//Ordenamiento inverso al que ultimo aplicado (no orden original de carga, sino reverso del orden alfabetico). 
zoologico.reverse();


console.log(zoologico);
console.log(zoologico[0]); //Antes era "Bufalo".


//Actividades

var amigos =["Alberto", "Diego", "Pedro"];

console.log(amigos);

amigos.push("Luis", "Manolo");

console.log(amigos);

amigos.pop();

console.log(amigos);

amigos.sort();

console.log(amigos);

amigos.reverse();

console.log(amigos);
