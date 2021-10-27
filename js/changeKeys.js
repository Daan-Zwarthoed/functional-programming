const table = document.querySelector("table");
const changeKeysForm = document.getElementById("changeKeysForm");

let knownKeys = [];
export async function makeChangeKeysForm(data) {
  changeKeysForm.classList.remove("hidden");
  const dataElement = data[0];
  for (let i = 0; i < Object.keys(dataElement).length; i++) {
    if (!knownKeys.includes(Object.keys(dataElement)[i])) {
      knownKeys.push(Object.keys(dataElement)[i]);
      let tablerow = document.createElement("tr");
      table.appendChild(tablerow);

      let keyNowTd = document.createElement("td");
      keyNowTd.textContent = Object.keys(dataElement)[i];
      tablerow.appendChild(keyNowTd);

      let keyChangeTd = document.createElement("td");
      let keyChangeInput = document.createElement("input");
      keyChangeTd.appendChild(keyChangeInput);
      tablerow.appendChild(keyChangeTd);
    }
  }
}

export async function changeKeys(data, event) {
  let removeKeys = [];
  await data.forEach((dataElement) => {
    for (let i = 0; i < Object.keys(dataElement).length; i++) {
      if (event.target[i]) {
        if (event.target[i].value) {
          let dataIndex = Object.keys(dataElement)[i];
          dataElement[event.target[i].value] = dataElement[dataIndex];
          removeKeys.push(dataIndex);
          if (event.target[i].parentElement.previousElementSibling.textContent === dataIndex) {
            event.target[i].parentElement.previousElementSibling.textContent = event.target[i].value;
          }
        }
      }
    }
  });

  await data.forEach((dataElement) => {
    removeKeys.forEach((removeKey) => {
      delete dataElement[removeKey];
    });
  });
}

export function emptyInputs(event) {
  for (let i = 0; i < event.target.length; i++) {
    if (event.target[i]) {
      event.target[i].value = "";
    }
  }
}
