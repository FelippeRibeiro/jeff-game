const jeff = document.getElementById("jeff");
const pipe = document.getElementById("pipe");
const gameboard = document.getElementById("game-board");
const penis = pipe.cloneNode(true);
const audio = document.getElementById("audio");
var root = document.querySelector(":root");
const contador = document.getElementById("contador");
let pontos = 0;

let fistTime = false;

const assets = [
  "./styles/images/pipe.png",
  "./styles/images/penis.png",
  "./styles/images/bullet.png",
];

function jump() {
  if (jeff.classList.contains("jump")) return;
  jeff.classList.add("jump");

  setTimeout(() => {
    jeff.classList.remove("jump");
  }, 450);
}

document.addEventListener("keydown", (key) => {
  if (!fistTime) {
    fistTime = true;
    pipe.classList.add("pipeAndAnimation");
    pipe.style.display = "block";
    return;
  }
  if (key.key === " ") jump();
});

document.addEventListener("click", () => {
  if (!fistTime) {
    fistTime = true;
    pipe.classList.add("pipeAndAnimation");
    pipe.style.display = "block";
    return;
  }
  jump();
});

setInterval(() => {
  pipe.src = assets[Math.floor(Math.random() * 3)];
}, 2400);

let clear = false;
const verify = setInterval(() => {
  if (!clear && pipe.classList.contains("pipeAndAnimation")) {
    const positionObstacle = pipe.offsetLeft;
    const jeffPosition = +window
      .getComputedStyle(jeff)
      .bottom.replace("px", "");
    if (positionObstacle <= 240 && positionObstacle > 5 && jeffPosition < 45) {
      pipe.style.animation = "none";
      pipe.style.left = `${positionObstacle}px`;
      gameboard.remove();
      const cum = document.createElement("img");
      cum.src = "./styles/images/jef-cum.png";
      document.body.appendChild(cum);
      audio.play();
      clear = true;
      setTimeout(() => {
        if (confirm("Deseja Reiniciar?")) {
          window.location.reload();
        } else {
          setTimeout(() => {
            window.location.href = "https://www.instagram.com/ariel_bbgrl/";
          }, 1000);
        }
      }, 1000);
    }
    contador.textContent = pontos;
    pontos++;
  }
}, 10);
