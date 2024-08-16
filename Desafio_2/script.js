let nombre = prompt("Cual es tu nombre?");
let edad = prompt("cuantos años tienes?");
let leguage = prompt("Que lenguaje de programacion sabes?");

alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${leguage}!`);

let number = prompt(
  `¿Te gusta estudiar ${leguage}? Responde con el número 1 para SÍ o 2 para NO.`
);

if (number == 1) {
  alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
} else {
  alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
}
