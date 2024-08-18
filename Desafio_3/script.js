let question = document.querySelector("h2");
let options = document.querySelector(".options");
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");

innerTextQuestions(
  "¿Quieres seguir en el area de front o de Backend?",
  "Frontend",
  "backend"
);

//Select Fronted
option1.addEventListener("click", function () {
  innerTextQuestions("¿Quieres aprender React o Aprender Vue?", "React", "Vue");

  option1.addEventListener("click", questionTres);
  option2.addEventListener("click", questionTres);
});

//Select Backend
option2.addEventListener("click", function () {
  innerTextQuestions("¿Quieres aprender C# o aprender Java?", "C#", "Java");

  option1.addEventListener("click", questionTres);
  option2.addEventListener("click", questionTres);
});

function questionTres() {
  innerTextQuestions(
    "¿Quieres seguir especializandote en el area elegida o ser FullStack?",
    "Seguir Especializandome",
    "Ser FullStack"
  );

  option1.addEventListener("click", questionFour);
  option2.addEventListener("click", questionFour);
}

function questionFour() {
  question.innerText =
    "¿Qué otra tecnologia te gustaria especializarte o conocer?";
  const newContainer = document.createElement("div");
  newContainer.innerHTML = `
        <input type="text" class="input" id="tech"></input>
        <a id="ok">OK</a>
         <a id="finish">Fin</a>   
    `;
  options.innerHTML = "";
  options.appendChild(newContainer);

  let finish = document.querySelector("#finish");
  finish.addEventListener("click", buttonFinish);
  let ok = document.querySelector("#ok");
  ok.addEventListener("click", buttonOk);
}

function buttonOk() {
  let tech = document.querySelector("input").value;
  alert(tech + " es realmente una tecnología muy interesante!");
  questionFour();
}

function buttonFinish() {
  alert("Gracias por jugar");
  location.reload();
}

function innerTextQuestions(questio, optionone, optiontwo) {
  question.innerText = questio;
  option1.innerText = optionone;
  option2.innerText = optiontwo;
}

console.log(question);
