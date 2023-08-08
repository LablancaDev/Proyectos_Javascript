//CALCULADORA
const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");//seleccionamos todos los botones

//Nota: con querySelectorAll obtenemos un array de todos los botones
//Usaremos textContent pero también podríamos usar innerText
botones.forEach(boton => {
    boton.addEventListener("click", () =>{
        //Prueba, console.log(boton.textContent);
        const botonPulsado = boton.textContent; //almacena el contenido del botón
       
        //C Borrado completo
        if(boton.id === "c"){
            pantalla.textContent = "0";
            return;
        }

        //← borrado con flecha, si queda un sólo caracter o Error, muestra un 0 en pantalla
        if(boton.id === "borrar"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Error!"){
                pantalla.textContent = "0";
            }else{
                
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        //botón =
        if(boton.id === "igual"){
            try{//Mediante un bloque try,catch manejamos los errores en tiempo de ejecución cuando se introduzcan datos erroneos
            pantalla.textContent = eval(pantalla.textContent);//La función eval de Javascript evalua el conjunto de strings que tiene operaciones matemáticas en nuestra pantalla (no en formato número)
            }catch{
                pantalla.textContent = "Error!"
            }
            return;
        }

        //Si la pantalla tiene un 0 o un error borrarlo y escribir el nuevo dígito
        if(pantalla.textContent === "0" || pantalla.textContent === "Error!"){
            pantalla.textContent = botonPulsado;
        }else{
            pantalla.textContent += botonPulsado//muestra en pantalla el textContent de cada botón, + para mostrar un nuevo dígito
        }
        
    })
});


//BOTON DARK MODE CALCULADORA
const boton = document.getElementById("darkMode");
const calculadora = document.querySelector(".calculadora");



boton.addEventListener("click", ()=>{
    //cambio color calculadora
   calculadora.classList.toggle("onclick");// si la clase onclick está presente la elimina, de lo contrario la añade.
    //cambio color boton
   darkMode.classList.toggle("onclick"); 
   


});