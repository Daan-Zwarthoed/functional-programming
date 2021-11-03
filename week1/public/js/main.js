import { upperCaseFunc, stringToDigitFunc, notAnswerdFunc } from "./parseFunctions.js";
import { makeChangeKeysForm, changeKeys, emptyInputs } from "./changeKeys.js";
import { showMoreInfo, hideMoreInfo } from "./moreInfo.js";
const dataIn = document.getElementById("dataIn");
const dataOut = document.getElementById("dataOut");
const hoofdletters = document.getElementById("hoofdletters");
const getallenBegin = document.getElementById("getallenBegin");
const nietIngevuld = document.getElementById("nietIngevuld");
const parseForm = document.getElementById("parseForm");
const changeKeysForm = document.getElementById("changeKeysForm");
const table = document.querySelector("table");

let data;

// Called alle cleanup functies na het checken of ze gebruikt moeten worden
function asyncParseFunctions(dataElement, dataIndex) {
  if (hoofdletters.checked) upperCaseFunc(dataElement, dataIndex);
  if (getallenBegin.checked) stringToDigitFunc(dataElement, dataIndex);
  if (nietIngevuld.checked) notAnswerdFunc(dataElement, dataIndex);
}

// Loopt door elk antwoord en maakt ze schoon
async function parseFunction() {
  await data.forEach((dataElement) => {
    for (let i = 0; i < Object.keys(dataElement).length; i++) {
      const dataIndex = Object.keys(dataElement)[i];
      asyncParseFunctions(dataElement, dataIndex);
    }
  });
}

parseForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  data = JSON.parse(dataIn.value); // Maakt data object data uit de dataIn textarea
  makeChangeKeysForm(data); // Laat het changekeysform zien
  await parseFunction(); // Schoont de data op
  dataOut.textContent = JSON.stringify(data); // Maakt dataOut textarea het opgeschoonde data object
});

changeKeysForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  emptyInputs(event); // Leegt de inputs
  await changeKeys(data, event); // Verandert de keys voor elk antwoord
  dataOut.textContent = JSON.stringify(data); // Maakt dataOut textarea het data object met nieuwe keys
});

// Meer info eventlistener
table.addEventListener("click", function (event) {
  if (event.target.id === "moreInfo") {
    if (!event.target.classList.contains("active")) {
      showMoreInfo(data, event); // Laat meer info zien
    } else {
      hideMoreInfo(event); // Haalt meer info weg
    }
  }
});
