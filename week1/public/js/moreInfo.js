const table = document.querySelector("table");

// De lijst met meer info wordt aangemaakt
export async function showMoreInfo(data, event) {
  event.target.classList.add("active");
  const question = event.target.parentElement.previousElementSibling.textContent; // Dit is de vraag die bij het input veld hoort
  const counts = {};
  const answers = [];
  const countsUl = document.createElement("ul");

  // Voegt de antwoorden toe aan de answers array
  await data.forEach((dataElement) => {
    answers.push(dataElement[question]);
  });

  // De key wordt het antwoord van de vraag en de value wordt de hoeveelheid
  await answers.forEach((answer) => {
    counts[answer] = (counts[answer] || 0) + 1;
  });

  // Maakt voor de hele counts item list items aan met daarin een string met links de key en rechts de value
  for (let i = 0; i < Object.keys(counts).length; i++) {
    const countsLi = document.createElement("li");
    countsLi.textContent = `${Object.keys(counts)[i]}: ${Object.values(counts)[i]}`;
    countsUl.appendChild(countsLi);
  }
  event.target.parentElement.previousElementSibling.appendChild(countsUl); // Voegt de list toe aan de cel naast de input
}

// De lijst met meer info wordt verwijdert
export function hideMoreInfo(event) {
  event.target.parentElement.previousElementSibling.children[1].remove(); // Verwijdert de lijst naast het pijltje
  event.target.classList.remove("active");
}
