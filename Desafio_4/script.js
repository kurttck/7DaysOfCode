let info = document.querySelector("h2");
let numberRandom = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let intentos = 0;
let input = document.querySelector("input");
let options = document.querySelector(".options");

console.log(numberRandom);

info.innerText = "Estoy pensando en un número entre el 1 y 10. Adivinalo!";

function verificarNumber() {
  let number = input.value;
  if (number == numberRandom) {
    info.innerText =
      "Genial adivinaste el número era: " +
      numberRandom +
      ". Gracias por Jugar!";
    crearButtonJugardeNuevo();
  } else {
    intentos++;
    if (intentos == 1) {
      info.innerText = "Te queda dos intentos vamos tu puedes!";
    } else if (intentos == 2) {
      info.innerText = "último intento! :s";
    } else {
      info.innerText = "Te falta, estas pollito uu, para la próxima será!";
      crearButtonJugardeNuevo();
    }
  }
  input.value = "";
  input.focus();
}

function crearButtonJugardeNuevo() {
  const newContainer = document.createElement("div");
  newContainer.innerHTML = `
        <a id="button">Jugar de Nuevo</a>
    `;

  options.innerHTML = "";
  options.appendChild(newContainer);
  let button = document.querySelector("#button");
  button.addEventListener("click", reload);
}

function reload() {
  location.reload();
}

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    verificarNumber();
  }
});
