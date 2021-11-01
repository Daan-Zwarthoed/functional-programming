const table = document.querySelector("table");

export async function showMoreInfo(data, event) {
  event.target.classList.add("active");
  const question = event.target.parentElement.previousElementSibling.textContent;
  const counts = {};
  const answers = [];
  await data.forEach((dataElement) => {
    answers.push(dataElement[question]);
  });
  await answers.forEach((answer) => {
    counts[answer] = (counts[answer] || 0) + 1;
  });

  const countsUl = document.createElement("ul");
  for (let i = 0; i < Object.keys(counts).length; i++) {
    const countsLi = document.createElement("li");
    countsLi.textContent = `${Object.keys(counts)[i]}: ${Object.values(counts)[i]}`;
    countsUl.appendChild(countsLi);
  }

  event.target.parentElement.previousElementSibling.appendChild(countsUl);
}

export function hideMoreInfo(event) {
  event.target.parentElement.previousElementSibling.children[1].remove();
  event.target.classList.remove("active");
  console.log(event.target.parentElement.previousElementSibling.children[1]);
}
