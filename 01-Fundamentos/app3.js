//* Contador de palabras

const fs = require("fs");

const content = fs.readFileSync("README.md", "utf8");

const wordCount = content.split(" ").length;
const reactWordCount = content.split(/React/gi).length;
const reactWordCountMatch = content.match(/react/gi ?? []).length;

// console.log(wordCount)
console.log("Palabras: ", wordCount);
console.log("Palabras React: ", reactWordCount);
console.log("Palabras React con match: ", reactWordCountMatch);
