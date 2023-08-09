const input = document.getElementById("ingresar-tarea");
const boton = document.querySelector("button");
const listaTareas = document.getElementById("lista-de-tareas");

 //1º Función: input: si el usuario presiona enter en el campo input después de escribir su tarea, será equivalente a hacer click en el botón crear tarea

function agregarTarea(){
    if(input.value){ //verificamos si en el campo input existe un valor(si existe una cadena agregaremos una tarea si no existe una cadena o valor no lo haremos)lo evalua con un booleano
        
        //Crear tarea

        let tareaNueva = document.createElement("div");//creamos una tarea nueva, que después agregaremos al dom, de momento sólo existe en Javascript
        tareaNueva.classList.add("tarea");//a esa tarea nueva le agregamos un nueva clase

        //Texto ingresado por el usuario

        let texto = document.createElement("p");//creamos un elemento para el texto introducido por el ususario
        texto.innerText = input.value;//ese mismo elemento tendrá una propiedad innerText que ingresará cualquier cosa que se escriba como un texto, ese elemento (texto) tendrá como valor, el valor del elemento input,value nos permite extraer lo que ingresó el usuario.
        tareaNueva.appendChild(texto);//agregamos un nuevo hijo a la tareanueva, que contiene el elemento texto que acabamos de crear
        
        /*Extraemos lo que el usuario introduzca en el (input.value) el valor de input y lo asignaremos como el texto interno (texto.innerText) del elemento texto(el parrafo que estamos creando)*/ 
        
        //Crear y agregar contenedor de iconos
        
        let iconos = document.createElement("div");
        iconos.classList.add("iconos");
        tareaNueva.appendChild(iconos);

        //Iconos
        let completar = document.createElement("i");
        completar.classList.add("bi","bi-check-circle-fill","icono-completar");//agregamos varias clases al mismo tiempo, que son los iconos de boostrap
        completar.addEventListener("click", completarTarea);//cuando ocurra un click en el boton completar, vamos a llamar a completarTarea

        let eliminar = document.createElement("i");
        eliminar.classList.add("bi", "bi-trash3-fill","icono-eliminar");
        eliminar.addEventListener("click", eliminarTarea);

        iconos.append(completar,eliminar);//el método append permite agreagr varios elementos
        
        //Agregar la tarea a la lista (la lista que tenemos en html)
        //Agregamos toda la estructura creada en javascript al contenedor listaTareas
        listaTareas.appendChild(tareaNueva);

    }else{
        alert("Por favor ingresa una tarea")
    }   
}

function completarTarea(e){
    let tarea = e.target.parentNode.parentNode;/*en la tarea que hace click el usuario, llamaremos al parentNode que devuelve el padre del nodo especificado en el árbol Jerárquico*/
    tarea.classList.toggle("completada");//si tarea contiene la clase completada tendra un estilo especial definido en css, si no tendrá el estilo definido por defecto
}//el método toggle permite alternar un clase, si el elemento tiene la clase completada se va a eliminar, y si no la tiene se va a agregar, con este método nos ahorramos un condicional y más líneas de código

function eliminarTarea(e){
    let tarea = e.target.parentNode.parentNode;
    tarea.remove();
}

//Para añadir tarea mediante la tecla Enter
input.addEventListener("click", agregarTarea);
input.addEventListener("keydown", (e) => {//Evento que se activa sólo cuando se presiona una tecla
    if(e.key === "Enter"){//obtenemos la tecla presionada mediante key
        agregarTarea();
    }
});

//asignamos un eventListener al botón para que se pueda agregar una tarea cuando el usuario de click en el botón 
boton.addEventListener("click", agregarTarea);