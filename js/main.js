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
  await data.forEach((dataElement) => {
    for (let i = 0; i < Object.keys(dataElement).length; i++) {
      let dataIndex = Object.keys(dataElement)[i];
      asyncParseFunctions(dataElement, dataIndex);
    }
  });
}

parseForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  data = JSON.parse(dataIn.value);
  makeChangeKeysForm(data);
  await parseFunction();
  dataOut.textContent = JSON.stringify(data);
});

changeKeysForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  await changeKeys(data, event);
  emptyInputs(event);
  dataOut.textContent = JSON.stringify(data);
});

table.addEventListener("click", function (event) {
  if (event.target.id === "moreInfo") {
    if (!event.target.classList.contains("active")) {
      showMoreInfo(data, event);
    } else {
      hideMoreInfo(event);
    }
  }
});
