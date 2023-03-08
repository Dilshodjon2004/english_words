let words = [
  "carriage (n)",
  "lettuce (n)",
  "cereal (n)",
  "raw (adj)",
  "tinned (adj)",
  "canned (adj)",
  "rescue (v) (n)",
  "funeral (n)",
  "purse (n)",
  "herb (n)",
  "hammock (n)",
  "spinach (n)",
  "pan (n)",
  "fork (n)",
  "chop (v)",
  "sprinkle (v)",
  "wok (n)",
  "shelter (n) (v)",
  "pillow (n)",
  "doughnut (n)",
];

document.querySelector("button").addEventListener("click", () => {
  word = words[Math.floor(Math.random() * words.length)];

  document.querySelector("h1").innerHTML = word;
});

console.log(words.length);
