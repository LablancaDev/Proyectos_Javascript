let boton = document.getElementById("but");
let result = document.getElementById("result");

let frutas = ["Manzana","Platano","Pera"];

boton.addEventListener("click", calcular)//estamos agregando un evento a la variable boton en la función calcular
function calcular(){
    result.innerText=frutas.length    //=dime las posiciones del array y muestralo en la variable result     /*La propiedad innerText nos permite cambiar el contenido de texto de un elemento de texto o consultar su valor.*/
     // result.innerText=frutas[1] si queremos saber el indice de una de las posiciones en concreto
    

    
}  

let boton2 = document.getElementById("but2");
let result2 = document.getElementById("result2");

let vehiculos = ["coche","moto","bici", 3 , true];//podemos agregar diferentes valores en un Array

boton2.addEventListener("click",calcular2);
function calcular2(){
    vehiculos.forEach(function(item, index, array){//nos deja recuperar el item, el index y el array
        result2.innerText = array;//le damos a recuperar el array
    });

    }

//Cada vez que recolectamos información o llamamos a una API la respuesta de esa API es en formato JSON  

