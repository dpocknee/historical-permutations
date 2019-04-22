const fs = require("fs");
const {
  poemParser,
  poemAnalysis,
  onlyPermutatedStanzas
} = require("../utils/utils");

const listOfFiles = [
  "be-on-the-beat.txt",
  "do-their-words-rub-out-there.txt",
  "everyone-is-ahead-now.txt",
  "got-some-part.txt",
  "i-am-i-who-are-you.txt",
  "i-am-out-are-you-in.txt",
  "i-dig-you-man.txt",
  "i-got-the-fear.txt",
  "i-love-you-i-do.txt",
  "in-the-beginning-was-the-word.txt",
  "like-you-just-said.txt",
  "lord-i-am-not-worthy.txt",
  "play-it-cool-fool.txt",
  "that-really-bugs-me.txt",
  "this-could-be-you.txt",
  "this-really-sends-me.txt",
  "this-turns-me-on.txt",
  "what-are-you-thinking.txt",
  "what-words-to-steal.txt",
  "what-you-not-got-in-there.txt",
  "who-sends-the-man.txt",
  "you-belong-to-me.txt"
];

listOfFiles.forEach(file => {
  fs.readFile(`./examples/poems/C1400-4/${file}`, "utf8", (err, data) => {
    if (err) throw err;
    const poemAsString = JSON.stringify(data);
    const parsedPoem = poemParser(poemAsString);
    const onlyStanzas = onlyPermutatedStanzas(parsedPoem);
    // console.log(onlyStanzas);
    const finalAnalysis = poemAnalysis(onlyStanzas);
    console.log(finalAnalysis);
  });
});
