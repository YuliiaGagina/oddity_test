const luckyButton = document.querySelector(".search-button2");
const mainImg = document.querySelector(".main-img");

function changeImage() {
  mainImg.src = "./assets/odditi.jpeg";
}

luckyButton.addEventListener("click", changeImage);
