// Variáveis
const phrases = new Array;
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const buttonCookie = document.querySelector('.screen1 button');
const buttonOtherCookie = document.querySelector('.screen2 button');
let xPhrases = Math.round(Math.random() * 4);
document.addEventListener('keypress', handleEnterKeyPress);

// initialize
initializePhrases();

// Eventos
buttonCookie.addEventListener('click', handleCookie);
buttonOtherCookie.addEventListener('click', handleOtherCookie);

// Funções
function handleCookie(event) {
  toggleScreen(event);
}

function handleOtherCookie(event) {
  xPhrases = Math.round(Math.random() * 4);
  screen2.querySelector('p').innerText = phrases[xPhrases];
  toggleScreen(event);
}

function toggleScreen(event) {
  event.preventDefault;
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}

function handleEnterKeyPress(event) {
  if (event.key == 'Enter' && screen1.classList.contains('hide')) {
    handleCookie(event);
  }
  else {
    handleOtherCookie(event);
  }
}

function initializePhrases() {
  phrases.push('Procure acender uma vela em vez de amaldiçoar a escuridão');
  phrases.push('Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.');
  phrases.push('Imagine uma nova história para sua vida e acredite nela.');
  phrases.push('Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.');
  phrases.push('Pessimismo leva à fraqueza, otimismo ao poder.');
}