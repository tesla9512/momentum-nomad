const images = ["01.jpg", "02.jpg"];
const todayImg = images[rand(0, images.length)];
const backImg = document.createElement("img");

backImg.src = `img/${todayImg}`;

document.body.appendChild(backImg);
document.body.className = "align-center";
