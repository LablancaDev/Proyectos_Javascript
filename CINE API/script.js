/*¿Qué es un endpoint en una API REST? Un endpoint es una dirección de una API, o bien un backend que
 se encarga de dar respuesta a una petición, mientras que una REST, en una API, es una interfaz que
 sirve para la conexión de varios sistemas. Se basa en HTTP y sirve para obtener y enviar datos e información.*/

//El operador await es usado para esperar a una Promise . Sólo puede ser usado dentro de una función async function .

//La palabra “async” ante una función significa solamente una cosa: que la función siempre devolverá una promesa.

//CARGAR PELICULAS

/*El proposito de ésta función es que cuando cargue la página se ejecute ésta función
de cargar películas, la función se encargará de conectarse a la API, obtener las películas y las cargará a mi contenedor dentro del HTML*/


/*Lectura: Guardame en la constante cargarPeliculas una funcion asíncrona (async) que me devuelve una promesa con los siguientes datos:
            La función realiza una petición a un servidor, mediante (fetch) con un endPoint (url) a una (url/server/Api) esperando con (await)
            hasta que se resuelva la petición al servidor, una vez se resuelva la petición ejecuta console.log(respuesta) para darme la respuesta,
            una vez actualizo mi página, ya obtengo una respuesta en consola, ésta respuesta es un objeto en la que tenemos varias propiedades
            con información variada, como la url que nos responde, el status si todo ha ido correctamente etc...terminar
            
            Importante el significado de la url, mediante el endPoint al que apuntamos ("https://api.themoviedb.org/3/movie/550?api_key=d4983dafdd2af3213fc32951bd597ec6");.
            en este caso es una solicitud a movies y le pasamos una id=550 y mi key o password, ésta información la podemos encontrar en la api de TMDB
            donde tenemos todo lo que puedo hacer y que datos podemos solicitar con distintos enPoints  */



    //Paginación, hacer al final del todo
    let pagina = 1; //Cuando mi página carga por primera vez, siempre se mostrará la página 1
    const btnAnterior = document.getElementById("btnAnterior")//accedemos al botón anterior
    const btnSiguiente = document.getElementById("btnSiguiente")//accedemos al botón siguiente

    //agregamos eventos a los botones
    btnSiguiente.addEventListener("click",  () =>{//cuando le demos click al boton siguiente se ejecutará una función de tipo flecha
                        //ésta función se encargará de cambiar de página hacia adelante, para esto tendremos que pasarle la varieble con la página a nuestra petición
                        //en los datos de la  petición en la API nos indica que podemos poner la página que queramos,
                        //al final de la url añadiremos ($page=${pagina}`) y cambiaremos las comillas dobles por back ticks para que nos deje añadir la variable página copn su número asignado  https://api.themoviedb.org/3/movie/popular?api_key=d4983dafdd2af3213fc32951bd597ec6&language=es-ES
        
        if(pagina < 1000){//agregamos un condicional para preguntar si página es menor a 1000, entonces ejecuta el código, ya que 1000 son las páginas que nos dice la info de la api que contiene

            pagina += 1;//accedo a la página y a la página que ya tengo le quiero sumar una unidad, de forma que cuando pulso en el botón siguiente, cambiaré la variable a 2, etc...
            cargarPeliculas();//llamamos a la función cargarPeliculas
        }
    
   });

   btnAnterior.addEventListener("click", () =>{
        if(pagina > 1){// si página es mayor a 1 se ejecuta el código para poder volver atrás con el siguiente código
            pagina += 1;
            cargarPeliculas();//llamamos a la función cargarPeliculas por que cada vez que pasamos la página tiene que cargarla de nuevo
        }
   })
    



const cargarPeliculas = async () => {
    // CONEXIÓN A LA API

    // Con la función fecth accederemos a la url de TMDB a la cual queremos realizar la petición, la url en mi perfil de la cuenta de TMDB, es el endPoint.
    // Después de realizar la petición, la Api me devuelve una respuesta, que es una promesa que está pendiente de ser resuelta, cuando se usa async nos va a devolver una promesa.
    // Cuando nos devuelve la promesa que está guardada en la constante respuesta, tendremos que esperar a que se procese la petición al servidor para después obtener la respuesta con console.log(respuesta);
    // Para decirle que una vez finalice el proceso de petición y nos devuelva la respuesta se usará await (esperar) es decir, espero hasta que se realize la petición, después ejecutame console.log(respuesta) y dame la respuesta

    try {//Es importante Tratar y capturar los errores que puedan surgir con un boque try/catch, eje: sin falla al acceder a la API.

        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d4983dafdd2af3213fc32951bd597ec6&language=es-ES&page=${pagina}`);  //con & le decimos que vamos a agregar un nuevo parámetro, accederemos a la página 1 que tenemos almacenada en la variable, esto lo haremos con backticks

        console.log(respuesta);



        //ACCESO A LOS DATOS

        //Una vez se resuelve la peticíon y obtenemos la respuesta, accederemos a los datos de la respuesta
        //La información nos la devuelve en forma JSON, con la constante respesta que guarda la petición con la respuesta y el método .JSON podremos acceder
        //a la información json que nos devuelve la petición, éste método json también es asincrono así que tendremos que esperar a que acabe por lo tanto
        //usaremos await (esperar) igual que lo hicimos con la petición al enPoint de la API de Películas, también tendremos que guardar el resultado en 
        //algun sitio, en una variable llamada datos.   const datos = await respuesta.json();

        //Después de actualizar en la consola obtendremos un objeto con todas las propiedades de la película.

        //Filtraremos los errores con status, el código de respuesta que nos devuelve
        if (respuesta.status === 200) {  //si es 200 = código correcto, estado ok ejecutame el acceso a los datos

            const datos = await respuesta.json();
            // console.log(datos.results); prueba mostrar resultados

            let peliculas = "";//En esta variable que contiene una cadena de texto vacía guardaré el código html que introduciré por cada película mediante el bucle forEach
            //accedemos a datos.resultados y ejecutamos un bucle forEach diciendole, quiero que por cada película dentro de los resultados acceder a titulos
            datos.results.forEach(pelicula => {
                // console.log(pelicula.title);  prueba mostrar resultados

                //peliculas = peliculas + ...es lo mismo que abajo, Por cada pelicula, quiero acceder a peliculas,  creamos/accedemos y mostramos mediante backticks a peliculas.title, etc... mostrando en pantalla todos los datos que queramos como los titulos, introduciendolos en un h3
                //Después Crearemos un div con la clase pelicula con una img dentro, para trabajar con las imágenes en la documentación de tratamiento de la API en imagenes encontraremos la forma, en este caso
                //con un endPoint que contenga la url con la imagen y la direccion del poster, copiar y pegar la url, eliminando la últimna parte y llamando al poster de la pelicula que está en la promesa devuelta dentro del array de objetos
                //Consultar en  https://developer.themoviedb.org/docs/image-basics  el enlace para solicitar imágenes a la api, tratamiento de imágenes
                peliculas +=  `

                <div class="pelicula">

                    <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                    <h3 class="titulo">${pelicula.title}</h3>            
                
                </div>
                
                `;   //a partir de aquí ya nos mostraría el listado de películas, ahora revisaremos en la parte que estamos trabando que es en movies populars
                    //en el apartado response, nos dice que nos a a responder con el total de resultados que hay de peliculas y el total de páginas que hay
                    //estos valores los podemos utilizar PARA CREAR UNA PAGINACIÓN, lo que queremos hacer es que cuando se presione el botón anterior o siguiente creado en html, cambie de página.
                    //creamos el código en la parte de arriba..antes de la function cargarPeliculas().
            });

            //selección al elemento contenedor y acceso a su código html interior y le decimos que es igual a peliculas que es la variable donde estamos guardando todas las peliculas de la petición y recorriendolas mediante el bucle forEach
            document.getElementById("contenedor").innerHTML = peliculas;


        } else if (respuesta.status === 401) {//Probar a modificar la key y el código de la pelicula (550) = El club de la lucha.
            console.log("Contraseña/key erronea!")
        } else if (respuesta.status === 404) {
            console.log("La pelicula que buscas no existe!")
        } else {
            console.log("Error por identificar!");
        }

        //Para acceder a las películas más populares tendremos que cambiar el endPoint, tenemos ejemplo en la API de todas las consultas que podemos 
        //realizar por ejemplo en películas, puede ser las más vistas, genero de acción, de ciencia ficción cada una con su respectivo endPoint.
        // ("https://api.themoviedb.org/3/movie/550?api_key=d4983dafdd2af3213fc32951bd597ec6&language=es-ES"); MODIFICAREMOS EL endPoint según lo que pida en las populares.

        //MOSTRAR DATOS

        //Si actulizamos en consola mosgtrará la peticición con los datos, dentro de la API en la parte de los parametros de la consulta nos muestra
        //los tipos de datos que nos devuelve sobre las peliculas, nos dice que es un objeto, que el id es un entero, aquí irá incluida la dirección del poster que utilizaremos para poder incluir las imágenes en HTML
        //https://developer.themoviedb.org/reference/movie-popular-list, ESTO COMO LO HAREMOS:  en el acceso a datos le diremos que queremos acceder a resultados 
        //console.log(datos.result); ahora nos devolverá el array, dentro del array tengo objetos, cada objeto representa una película, 20 objetos.

        //Para mostrar los datos en lugar de hacer un console.log realizaremos lo siguiente mirar código arriba en el if...

    } catch {
        alert("Error!!!");
    }
}
cargarPeliculas();


//https://youtu.be/PNr8-JDMinU