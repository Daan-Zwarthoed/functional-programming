export async function upperCaseFunc(dataElement, dataIndex) {
  // Kijkt of antwoord een string is
  if (typeof dataElement[dataIndex] === "string") {
    // Maakt van het antwoord de eerste karakater een hoofdletter
    dataElement[dataIndex] = dataElement[dataIndex].charAt(0).toUpperCase() + dataElement[dataIndex].slice(1);
  }
}

export async function stringToDigitFunc(dataElement, dataIndex) {
  // Kijkt of het antwoord een string is
  if (typeof dataElement[dataIndex] === "string") {
    // Kijkt of het eerste karakter een getal is
    if (!isNaN(dataElement[dataIndex].charAt(0))) {
      // Kijkt of het tweede karakter niet een getal is
      if (isNaN(dataElement[dataIndex].charAt(1))) {
        // Verandert de string naar alleen maar het eerste nummer
        dataElement[dataIndex] = parseInt(dataElement[dataIndex].charAt(0));
      }
    }
  }
}

export async function notAnswerdFunc(dataElement, dataIndex) {
  if (dataElement[dataIndex] === "") {
    // Als het leeg is wordt er niet ingevuld van gemaakt
    dataElement[dataIndex] = "Niet ingevuld";
  }
}
