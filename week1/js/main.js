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

async function asyncParseFunctions(dataElement, dataIndex) {
  if (hoofdletters.checked) await upperCaseFunc(dataElement, dataIndex);
  if (getallenBegin.checked) await stringToDigitFunc(dataElement, dataIndex);
  if (nietIngevuld.checked) await notAnswerdFunc(dataElement, dataIndex);
}

async function parseFunction() {
  // looped door elk compleet formulier
  await data.forEach((dataElement) => {
    // looped door elk key: antwoord pair
    for (let i = 0; i < Object.keys(dataElement).length; i++) {
      const dataIndex = Object.keys(dataElement)[i];
      asyncParseFunctions(dataElement, dataIndex);
    }
  });
}

parseForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  // Maakt data object data uit dataIn textarea
  data = JSON.parse(dataIn.value);
  // Laat het changekeysform zien
  makeChangeKeysForm(data);
  // Schoont de data op
  await parseFunction();
  // Maakt dataOut textarea het opgeschoonde data object
  dataOut.textContent = JSON.stringify(data);
});

changeKeysForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  // Verandert de keys voor elk antwoord
  await changeKeys(data, event);
  // Leegt de inputs
  emptyInputs(event);
  // Maakt dataOut textarea het data object met nieuwe keys
  dataOut.textContent = JSON.stringify(data);
});

table.addEventListener("click", function (event) {
  if (event.target.id === "moreInfo") {
    // Checkt of de info al wordt geshowed
    if (!event.target.classList.contains("active")) {
      // Laat meer info zien
      showMoreInfo(data, event);
    } else {
      // Haalt meer info weg
      hideMoreInfo(event);
    }
  }
});
