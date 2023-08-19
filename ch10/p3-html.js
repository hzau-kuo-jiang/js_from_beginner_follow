let targetPhrase = "";
let targetSet = new Set();
let guessSet = new Set();
const phrases = ["Hello World", "How are you", "Well"];

const phraseEl = document.getElementById("phrase");
const startEl = document.getElementById("start");
const keyboard = document.getElementById("keyboard");

const getLetterSet = (phrase) =>
  new Set(phrase.toLowerCase().replace(" ", "").split(""));

const intersection = (setA, setB) =>
  new Set([...setA].filter((x) => setB.has(x)));

const getResultStr = (set, phrase) =>
  phrase
    .toLowerCase()
    .split("")
    .map((letter) => {
      if (letter === " ") {
        return " ";
      } else if (set.has(letter)) {
        return letter;
      } else {
        return "-";
      }
    })
    .join("");
const renderPhrase = (phrase, target) =>
  (target.innerHTML = phrase
    .toUpperCase()
    .split("")
    .map((letter) =>
      letter === " " ? `<span class="space"></span>` : `<span>${letter}</span>`,
    )
    .join(""));
const renderKeyboard = (keyboardEl, guess) =>
  keyboardEl
    .querySelectorAll("input")
    .forEach((letterEl) =>
      guess.has(letterEl.value.toLowerCase())
        ? letterEl.setAttribute("disabled", "disabled")
        : letterEl.removeAttribute("disabled"),
    );

const render = (phrase, target, guess, element, keyboard) => {
  const intersectionSet = intersection(target, guess);
  const resultStr = getResultStr(intersectionSet, phrase);
  renderPhrase(resultStr, element);
  renderKeyboard(keyboard, guess);
};

const init = (phrase, target, guess) => {
  phrase = phrases[Math.floor(Math.random() * phrases.length)];
  target = getLetterSet(phrase);
  guess = new Set();
  return [phrase, target, guess];
};

const startGame = () => {
  [targetPhrase, targetSet, guessSet] = init(targetPhrase, targetSet, guessSet);
  render(targetPhrase, targetSet, guessSet, phraseEl, keyboard);
};

keyboard.addEventListener("click", (event) => {
  const { target } = event;
  if (target.tagName === "INPUT") {
    guessSet.add(target.value.toLowerCase());
    render(targetPhrase, targetSet, guessSet, phraseEl, keyboard);
  }
});

window.addEventListener("keydown", (event) =>
  document
    .querySelector(`input[value="${event.key.toUpperCase()}"]:not([disabled])`)
    ?.click(),
);

startEl.addEventListener("click", startGame);
startGame();
