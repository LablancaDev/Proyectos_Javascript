const incremento = document.getElementById("incremento");
const decremento = document.getElementById("decremento");
const display = document.getElementById("display");
const reset = document.getElementById("reset");
const container = document.getElementById("container");
const img = document.getElementById("img");



let num = 0;

// incremento.addEventListener("click", contador() );

// function contador(){

// }

incremento.addEventListener("click", ()=>{
    num ++
    display.innerHTML = num;

    

    if(num >= 5){
        display.style.backgroundColor = "green";
    }if(num >= 10){
        display.style.backgroundColor = "yellow"
        img.src = "./imgs/perro-tejonero (1).png"
    }

});

decremento.addEventListener("click", ()=>{
    num --
    display.innerHTML = num;


    if(num < 0){
        display.style.backgroundColor = "red";
    }

});

reset.addEventListener("click", ()=>{
    num = 0;
    display.innerHTML = num;

});
