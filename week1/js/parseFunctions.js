// Maakt de eerste karakter van elke string een hoofdletter
export function upperCaseFunc(dataElement, dataIndex) {
  if (typeof dataElement[dataIndex] === "string") {
    dataElement[dataIndex] = dataElement[dataIndex].charAt(0).toUpperCase() + dataElement[dataIndex].slice(1); // Maakt van het antwoord de eerste karakater een hoofdletter
  }
}

// Als het eerste karakter een getal is en het tweede een letter dan wordt het antwoord omgezet naar alleen dat nummer
export function stringToDigitFunc(dataElement, dataIndex) {
  if (typeof dataElement[dataIndex] === "string") {
    if (!isNaN(dataElement[dataIndex].charAt(0))) {
      if (isNaN(dataElement[dataIndex].charAt(1))) {
        dataElement[dataIndex] = parseInt(dataElement[dataIndex].charAt(0)); // Verandert de string naar alleen maar het eerste nummer
      }
    }
  }
}

// Als het antwoord leeg is wordt er niet ingevuld van gemaakt.
export function notAnswerdFunc(dataElement, dataIndex) {
  if (dataElement[dataIndex] === "") {
    dataElement[dataIndex] = "Niet ingevuld";
  }
}
