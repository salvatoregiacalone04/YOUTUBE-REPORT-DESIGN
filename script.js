const timer = document.querySelector("#timer");
const startedAt = Date.now();

function renderTimer() {
  const elapsedSeconds = Math.floor((Date.now() - startedAt) / 1000);
  const minutes = String(Math.floor(elapsedSeconds / 60)).padStart(2, "0");
  const seconds = String(elapsedSeconds % 60).padStart(2, "0");

  timer.textContent = `${minutes}:${seconds}`;
}

renderTimer();
window.setInterval(renderTimer, 1000);
