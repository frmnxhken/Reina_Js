const GENRES = ["action", "horror", "sports"];
const card = document.querySelector(".card");
const form = document.querySelector("form");
const insight = document.querySelector(".insight");
const genreLabel = document.getElementById("genre");
const probabilityList = document.querySelector(".probability");

async function loadModel() {
  const response = await fetch("model.json");
  const modelData = await response.json();
  return new Reina("logisticRegression", modelData);
}

const reina = await loadModel();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const prediction = reina.predict(form.synopsis.value);
  handleInsight(prediction);
});

function handleInsight(prediction) {
  genreLabel.innerText = GENRES[prediction.class];
  card.style.display = "none";
  insight.classList.add("active");

  probabilityList.innerHTML = prediction.probability
    .map((prob, i) => {
      const percent = (prob * 100).toFixed(2);
      return `
        <div>
          <p>${GENRES[i]}</p>
          <div style="width: ${percent}%" class="percentage ${GENRES[i]}">
            ${percent}%
          </div>
        </div>`;
    })
    .join("");
}
