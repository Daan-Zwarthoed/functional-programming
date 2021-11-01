export async function upperCaseFunc(dataElement, dataIndex) {
  if (typeof dataElement[dataIndex] === "string") {
    dataElement[dataIndex] =
      dataElement[dataIndex].charAt(0).toUpperCase() + dataElement[dataIndex].slice(1);
  }
}

const charCodeZero = "0".charCodeAt(0);
const charCodeNine = "9".charCodeAt(0);

function isDigit(s) {
  return s.length == 1 && s.charCodeAt(0) >= charCodeZero && s.charCodeAt(0) <= charCodeNine;
}

export async function stringToDigitFunc(dataElement, dataIndex) {
  if (typeof dataElement[dataIndex] === "string") {
    if (isDigit(dataElement[dataIndex].charAt(0))) {
      if (!isDigit(dataElement[dataIndex].charAt(1))) {
        dataElement[dataIndex] = parseInt(dataElement[dataIndex].charAt(0));
      }
    }
  }
}

export async function notAnswerdFunc(dataElement, dataIndex) {
  if (dataElement[dataIndex] === "") {
    dataElement[dataIndex] = "Niet ingevuld";
  }
}
