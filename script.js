
const startBtn = document.getElementById("start-btn");
const optionsBtn = document.getElementById("options-btn");
const backToMenuBtn = document.getElementById("back-to-menu");

const menu = document.getElementById("menu");
const game = document.getElementById("game");
const options = document.getElementById("options");

// Start Game fade logic
startBtn.addEventListener("click", () => {
  menu.classList.add("hidden");
  menu.classList.remove("visible");

  setTimeout(() => {
    game.classList.add("visible");
    game.classList.remove("hidden");
  }, 800);
});

// Show Options screen
optionsBtn.addEventListener("click", () => {
  menu.classList.add("hidden");
  menu.classList.remove("visible");

  setTimeout(() => {
    options.classList.add("visible");
    options.classList.remove("hidden");
  }, 800);
});

// Back to Menu from Options
backToMenuBtn.addEventListener("click", () => {
  options.classList.add("hidden");
  options.classList.remove("visible");

  setTimeout(() => {
    menu.classList.add("visible");
    menu.classList.remove("hidden");
  }, 800);
});
// Outfit cycling
// Hair and Outfit Arrays
const hairOptions = ["hair1.png", "hair2.png","hair3.png","hair4.png","hair5.png","hair6.png","hair7.png"];
const outfitOptions = ["dress1.png", "dress2.png","dress3.png","dress4.png","dress5.png","dress6.png",];

let currentHair = 0;
let currentOutfit = 0;

// DOM Elements
const hairImg = document.getElementById("hair-layer");
const outfitImg = document.getElementById("outfit-layer");

// Update functions
function updateHair() {
  hairImg.src = hairOptions[currentHair];
  }

function updateOutfit() {
  outfitImg.src = outfitOptions[currentOutfit];

}

// Hair navigation
function nextHair() {
  currentHair = (currentHair + 1) % hairOptions.length;
  updateHair();
}

function prevHair() {
  currentHair = (currentHair - 1 + hairOptions.length) % hairOptions.length;
  updateHair();
}

// Outfit navigation
function nextOutfit() {
  currentOutfit = (currentOutfit + 1) % outfitOptions.length;
  updateOutfit();
}

function prevOutfit() {
  currentOutfit = (currentOutfit - 1 + outfitOptions.length) % outfitOptions.length;
  updateOutfit();
}

// Back to menu
function goBack() {
  document.getElementById("game").classList.add("hidden");
  document.getElementById("game").classList.remove("visible");

  setTimeout(() => {
    document.getElementById("menu").classList.add("visible");
    document.getElementById("menu").classList.remove("hidden");
  }, 800);
}

// Save character snapshot
function saveLook() {
  const capture = document.getElementById("character-capture");

  html2canvas(capture).then(canvas => {
    const link = document.createElement("a");
    link.download = "my-look.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}
const clickSound = document.getElementById("click-sound");

// Add sound to every button
document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});
