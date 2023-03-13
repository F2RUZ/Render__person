const body = document.querySelector("body");
const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn");

// Toggle  mode
const btnToggleMode = () => {
  darkBtn.classList.toggle("hidden");
  lightBtn.classList.toggle("hidden");
  body.classList.toggle("dark-mode");
};

const modeLocal = localStorage.getItem("mode");
if (modeLocal) {
  btnToggleMode();
}

darkBtn.addEventListener("click", () => {
  btnToggleMode();
  localStorage.setItem("mode", "dark-mode");
});

lightBtn.addEventListener("click", () => {
  btnToggleMode();
  localStorage.setItem("mode", "");
});
