const getLetterSet = (phrase) =>
  new Set(phrase.toLowerCase().replace(" ", "").split(""));

const intersection = (setA, setB) =>
  new Set([...setA].filter((x) => setB.has(x)));

const getResultStr = (set, phrase) =>
  phrase
    .toLowerCase()
    .split("")
    .map((letter) => (letter === " " ? " " : set.has(letter) ? letter : "-"))
    .join("");

module.exports = {
  getLetterSet,
  intersection,
  getResultStr,
};
