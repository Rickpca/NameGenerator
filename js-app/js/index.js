const { Alert } = require("bootstrap");

document.getElementById("demo").innerHTML="Hola Mundo";

const intro = document.getElementById("intro");

document.getElementById("p1").innerHTML="Nuevo texto";

const titulo = document.getElementById("titulo");
titulo.innerHTML="Nuevo encabezado";

const element = document.getElementsByName("p");

const x = document.getElementById("main");
console.log(x);
const y = document.getElementById("p");
console.log(y);


const pintro = document.querySelectorAll("p.intro");


const listitems = document.querySelectorAll("ul > li");
console.log(listitems);

const h1Element = document.querySelector("h1");
console.log(h1Element);


const list = document.querySelector(".list");
console.log(list)


const listaDeElementos = document.querySelectorAll("ul > li");
listaDeElementos.forEach((item)=>{
    console.log(item);
})

const h1 = document.querySelector("h1");
h1.style.color = "blue";

const x2 = document.forms["form1"];
let texto ="";
for(let i = 0; i<x2.length; i++ ){
    texto += x2.elements[i].value+"<br>";
}
document.getElementById("demo").innerHTML = texto;
console.log(x);


let lista = document.createElement("ul");
document.body.appendChild(lista);

let elemento1 = document.createElement("li");
elemento1.textContent = "Flor";
lista.appendChild(elemento1);

const button = document.getElementById("btn");
button.addEventListener("click",()=>{
    alert("Gracias por dar Click");
})


function validarFormulario(){
    let xF = document.forms["miFormulario"]["nombre"].value;
    if(xF == ""){
        alert("se debe de completar el nombre");
        return false;
    }
}



function miFunction(){
    let x = document.getElementById("numero").value;
    let texto;
    if(isNaN(x) || x < 1 || x > 10){
        texto = "Entra no valida";
    }
    else{
        texto = "Entrada correcta";
    }

    document.getElementById("dema").innerHTML = texto;
}


document.getElementById("miImagen").src = "cat.jpg"

document.getElementById("demo").innerHTML="Fecha" + Date();