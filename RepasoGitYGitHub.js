//Algunas cosas basicas de JavaScript

//Control de flujo o de ruta, uso basic de los if y else
function viajar(destino){
    if (destino === "brazil"){
        console.log("gire a la izquierda");
    } else if (destino === "argentina"){
            console.log("Gire a la derecha");
    } else {
                console.log("tas perdido we :(");
    }
}

viajar("colombia");


function puedemanejar (edad){
    if (edad <= 17){
        console.log("No puede manejar");
    } else if (edad >= 18){
        console.log("Puede manejar..");
    } 
}

puedemanejar(10);