const messages = [
  {
    message: "이의 이승",
    mean: "e의 2승, e의 e승 또는 2의 2승",
  },
  {
    message: "가가 가가",
    mean: "그 애가 그 애니?",
  },
  {
    message: "했나? 안 했나?",
    mean: "했니? 안 했니?의 부산 말",
  },
];

const message = document.querySelector("#messages span:first-child");
const mean = document.querySelector("#messages span:last-child");

function rand(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function rand2(max) {
  return Math.floor(Math.random() * max);
}

const todayMsg = messages[rand(0, messages.length)];

message.innerText = todayMsg.message;
mean.innerText = `: ${todayMsg.mean}`;
