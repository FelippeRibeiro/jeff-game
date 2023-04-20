const jeff = document.getElementById("jeff");
const pipe = document.getElementById("pipe");
const gameboard = document.getElementById("game-board");
const penis = pipe.cloneNode(true);

const assets = [
	"./styles/images/pipe.png",
	"./styles/images/penis.png",
	"./styles/images/bullet.png",
	"",
];

function jump() {
	if (jeff.classList.contains("jump")) return;
	jeff.classList.add("jump");

	setTimeout(() => {
		jeff.classList.remove("jump");
	}, 450);
}

document.addEventListener("keydown", (key) => {
	if (key.key === " ") jump();
});

document.addEventListener("click", jump);

setInterval(() => {
	pipe.src = assets[Math.floor(Math.random() * 4)];
}, 2400);
