// https://youtu.be/nQobb4pcU78 1"30 min

//Consulta a una api mediante, tareas asincronas con fetch para poder obtener datos através de una api

async function obtenerDatos(){
    const response =await fetch("http://127.0.0.1:5500/JSON/data.json")
    const json = await response.text()
    console.log(JSON.parse(json))//hacemos un parseo del dato
} 

obtenerDatos();

//Nos muestra los datos del archivo.json por consola 

