let dataIn = document.getElementById("dataIn");
const dataOut = document.getElementById("dataOut");
const parseButton = document.getElementById("parse");
const form = document.querySelector("form");
let data;

form.addEventListener("submit", function (event) {
  event.preventDefault();
  data = JSON.parse(event.target[0].value);
  data.forEach((dataElement) => {
    for (let i = 0; i < Object.keys(dataElement).length; i++) {
      let dataIndex = Object.keys(dataElement)[i];
      if (typeof dataElement[dataIndex] === "string") {
        dataElement[dataIndex] =
          dataElement[dataIndex].charAt(0).toUpperCase() +
          dataElement[dataIndex].slice(1);
      }

      if (dataElement[dataIndex] === "") {
        dataElement[dataIndex] = "Niet ingevuld";
      }

      if (i + 1 === Object.keys(dataElement).length) {
        dataOut.textContent = JSON.stringify(data);
      }
    }
  });
});
