const btnAgree = document.querySelector("#btnAgree");
const btnShow = document.querySelector("#btnShow");
const btnDelete = document.querySelector("#btnDelete");
const radio = document.querySelectorAll('input[name="tipo"]');
const input = document.querySelector("#inputProduct");
const list = document.querySelector("#lista");

//Array para guardar lista de productos
let frutas = ["manzana", "pera", "uva", "fresa"];
let lacteos = ["leche", "queso", "yogurt"];
let congelados = ["arroz", "frijol", "pescado"];
let dulces = ["chocolate", "helado", "galletas"];

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

function listasProduct() {
  list.innerHTML = `
  <h2>Indice de Productos para eliminar:</h2>
  <div class="lista">
  <div>
  <p3>Frutas</p3>
  <ol>
  ${frutas.map((fruta) => `<li>${fruta}</li>`).join("")}
  <ol>
  </div>
  <div>
  <p3>Lacteos</p3>
  <ol>
  ${lacteos.map((lacteo) => `<li>${lacteo}</li>`).join("")}
  <ol>
  </div>
  <div>
  <p3>Congelados</p3>
  <ol>
  ${congelados.map((cong) => `<li>${cong}</li>`).join("")}
  <ol>
  </div>
  <div>
  <p3>Dulces</p3>
  <ol>
  ${dulces.map((dulce) => `<li>${dulce}</li>`).join("")}
  <ol>
  </div>
  </div>
  `;
}

btnShow.addEventListener("click", function () {
  listasProduct();
  btnDelete.style.display = "block";
});

btnDelete.addEventListener("click", function () {
  let indice = 0;
  let lista = prompt("escribe el nombre de la lista");
  let product = prompt("escribe el numero del producto de la lista elegida");

  switch (lista) {
    case "frutas":
      frutas.splice(product - 1, 1);
      break;
    case "lacteos":
      lacteos.splice(product - 1, 1);
      break;
    case "congelados":
      congelados.splice(product - 1, 1);
      break;
    case "dulces":
      dulces.splice(product - 1, 1);
      break;
    default:
      alert("Escribe correctamente el nombre de la lista");
  }

  listasProduct();
});
