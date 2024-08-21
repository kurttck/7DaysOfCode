const btnAgree = document.querySelector("#btnAgree");
const btnShow = document.querySelector("#btnShow");
const radio = document.querySelectorAll('input[name="tipo"]');
const input = document.querySelector("#inputProduct");
const list = document.querySelector("#lista");

//Array para guardar lista de productos
let frutas = [];
let lacteos = [];
let congelados = [];
let dulces = [];

btnAgree.addEventListener("click", function () {
  let product = null;
  product = input.value;
  let selectedValue = null;

  radio.forEach((radio) => {
    if (radio.checked) {
      selectedValue = radio.value;
    }
  });

  if (selectedValue && product) {
    switch (selectedValue) {
      case "frutas":
        frutas.push(product);
        break;
      case "lacteos":
        lacteos.push(product);
        break;
      case "congelados":
        congelados.push(product);
        break;
      case "dulces":
        dulces.push(product);
        break;
    }

    input.value = "";
    input.focus();
  } else {
    alert("Agrega correctamente el producto y seleccione el tipo de producto");
  }
});

btnShow.addEventListener("click", function () {
  list.innerHTML = `
    <h2>Lista de compras:</h2>
    <p>Frutas: ${frutas.join(",")}.</p>
    <p>Lacteos: ${lacteos.join(",")}.</p>
    <p>Congelados: ${congelados.join(",")}.</p>
    <p>Dulces: ${dulces.join(", ")}.</p>
    `;
});
