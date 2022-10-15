const btn = document.getElementById("button");
const advID = document.getElementById("advice-id");
const advText = document.getElementById("advice-text");

function updateUI(data) {
  advID.innerHTML = data.slip.id;
  advText.innerHTML = data.slip.advice;
}

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
  .then(response => response.json())
  .then(data => updateUI(data))
}

btn.addEventListener("click", () => {
  getAdvice()
});

getAdvice();