const form = document.querySelector("form");
const hero = document.querySelector(".hero");
const positive = document.getElementById("insight-positive");
const negative = document.getElementById("insight-negative");

async function getModel() {
  const model = await fetch("model.json").then((r) => r.json());
  return new Reina("DecisionTreeClassifier", model);
}

const reina = await getModel();
reina.predict([0, 0, 0, 0, 0]);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const predictData = [
    formData.get("Pregnancies"),
    formData.get("Glucose"),
    formData.get("BloodPressure"),
    formData.get("SkinThickness"),
    formData.get("Insulin"),
    formData.get("BMI"),
    formData.get("Pedigree"),
    formData.get("Age"),
  ].map(Number);

  const predicted = reina.predict(predictData);
  handleInsight(predicted);
});

function handleInsight(predicted) {
  form.style.display = "none";
  hero.style.display = "none";
  predicted === 0
    ? negative.classList.add("active")
    : positive.classList.add("active");
}
