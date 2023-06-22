const nombres = [
  "Juan",
  "María",
  "Carlos",
  "Ana",
  "Pedro",
  "Laura",
  "Andrés",
  "Luisa",
  "Diego",
  "Valentina",
  "Ariana",
  "Danna",
  "Elizabeth",
  "Guadalupe"
];

const apellido = [
  "Gómez",
  "López",
  "Rodríguez",
  "Martínez",
  "Pérez",
  "García",
  "Fernández",
  "González",
  "Hernández",
  "Torres",
  "Silva",
  "Vargas",
  "Ramírez",
  "Sánchez",
  "Romero",
  "Navarro",
  "Reyes",
  "Morales",
  "Ortega",
  "Castro",
];


const btn = document.getElementById("btn").addEventListener("click",()=>{
    let generadornombres = nombres[Math.floor(Math.random()*nombres.length)];
    let generadorapellido = apellido[Math.floor(Math.random()*apellido.length)];
    let generadorapellido2 = apellido[Math.floor(Math.random()*apellido.length)];
    let namegenerado = generadornombres + " " + generadorapellido + " " + generadorapellido2;

    


    const inputT = document.getElementById("Nombre").value = namegenerado;
});
