const table = document.querySelector("table");

export async function showMoreInfo(data, event) {
  event.target.classList.add("active");
  // Dit is de vraag die bij het input veld hoort
  const question = event.target.parentElement.previousElementSibling.textContent;
  const counts = {};
  const answers = [];
  const countsUl = document.createElement("ul");
  // Voegt de antwoorden toe aan de answers array
  await data.forEach((dataElement) => {
    answers.push(dataElement[question]);
  });
  await answers.forEach((answer) => {
    // De key wordt het antwoord van de vraag en de value wordt de hoeveelheid
    counts[answer] = (counts[answer] || 0) + 1;
  });

  // Maakt voor de hele counts item list items aan met daarin een string met links de key en rechts de value
  for (let i = 0; i < Object.keys(counts).length; i++) {
    const countsLi = document.createElement("li");
    countsLi.textContent = `${Object.keys(counts)[i]}: ${Object.values(counts)[i]}`;
    countsUl.appendChild(countsLi);
  }

  // Voegt de list toe aan de cel naast de input
  event.target.parentElement.previousElementSibling.appendChild(countsUl);
}

export function hideMoreInfo(event) {
  // Verwijdert de lijst naast het pijltje
  event.target.parentElement.previousElementSibling.children[1].remove();
  event.target.classList.remove("active");
}
