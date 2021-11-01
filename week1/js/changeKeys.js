const table = document.querySelector("table");
const changeKeysForm = document.getElementById("changeKeysForm");

let knownKeys = [];
export async function makeChangeKeysForm(data) {
  changeKeysForm.classList.remove("hidden");
  const dataElement = data[0];
  // Per vraag wordt een tabel row aangemaakt
  for (let i = 0; i < Object.keys(dataElement).length; i++) {
    // Kijkt of de tabelitem niet al bestaat
    if (!knownKeys.includes(Object.keys(dataElement)[i])) {
      // Maakt de tabel row aan
      knownKeys.push(Object.keys(dataElement)[i]);
      const tablerow = document.createElement("tr");
      table.appendChild(tablerow);

      // Maakt de tabelvraag cel aan
      const keyNowTd = document.createElement("td");
      const keyNowP = document.createElement("p");
      keyNowP.textContent = Object.keys(dataElement)[i];
      keyNowTd.appendChild(keyNowP);
      tablerow.appendChild(keyNowTd);

      // Maakt de tabel meer info cel aan
      const moreInfo = document.createElement("td");
      const moreInfoDiv = document.createElement("div");
      moreInfoDiv.id = "moreInfo";
      moreInfo.appendChild(moreInfoDiv);
      tablerow.appendChild(moreInfo);

      // Maakt de tabel input cel aan
      const keyChangeTd = document.createElement("td");
      const keyChangeInput = document.createElement("input");
      keyChangeTd.appendChild(keyChangeInput);
      tablerow.appendChild(keyChangeTd);
    }
  }
}

export async function changeKeys(data, event) {
  let removeKeys = [];
  // Voor elk ingevuld formulier worden de keys verandert
  await data.forEach((dataElement) => {
    for (let i = 0; i < Object.keys(dataElement).length; i++) {
      // Kijkt of de input bestaat en is ingevuld
      if (event.target[i]) {
        if (event.target[i].value) {
          let dataIndex = Object.keys(dataElement)[i];
          // Maakt een nieuw key:value per aan met de nieuwe key
          dataElement[event.target[i].value] = dataElement[dataIndex];
          // Pushed de ouwe key naar de removekeys variabele
          removeKeys.push(dataIndex);
          // Verandert de oude key naar de nieuwe key in de tabel
          if (event.target[i].parentElement.previousElementSibling.previousElementSibling.children[0].textContent === dataIndex) {
            event.target[i].parentElement.previousElementSibling.previousElementSibling.children[0].textContent = event.target[i].value;
          }
        }
      }
    }
  });

  // Als de nieuwe key:value pairs zijn aangemaakt worden de oude verwijderd. Dit gebeurt pas achteraf want anders krijg je errors.
  await data.forEach((dataElement) => {
    removeKeys.forEach((removeKey) => {
      delete dataElement[removeKey];
    });
  });
}

export function emptyInputs(event) {
  // Loopt door alle inputs en leegt de value
  for (let i = 0; i < event.target.length; i++) {
    if (event.target[i]) {
      event.target[i].value = "";
    }
  }
}
