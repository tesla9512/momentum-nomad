const KEY_USERNAME = "name";
const HIDDEN_CLASSNAME = "hidden";

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const localUserName = localStorage.getItem(KEY_USERNAME);

function greetingUser(username) {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = `Hey, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
  const username = loginInput.value;

  event.preventDefault();
  localStorage.setItem(KEY_USERNAME, username);

  greetingUser(username);
}

loginForm.addEventListener("submit", onLoginSubmit);

if (localUserName !== null) {
  greetingUser(localUserName);
}
