const fs = require("fs");

function poemParser(text) {
  const splitText = text.split("\\n");
  const toArray = [];
  let stanza = [];
  splitText.forEach(line => {
    const splitLine = line.split(/\s/);
    if (splitLine.length === 1) {
      if (stanza.length > 0) toArray.push(stanza);
      stanza = [];
    } else {
      const filteredLine = splitLine.filter(word => {
        return word.length > 0;
      });
      stanza.push(filteredLine);
    }
  });
  return toArray;
}

function onlyPermutatedStanzas(arrayOfPoem) {
  const poemTitle = arrayOfPoem[0][0].length - 1;
  return arrayOfPoem.filter(stanza => {
    return stanza.every(line => line.length === poemTitle);
  });
}

function analysis(poemArray) {
  const titleArray = poemArray[0][0];
  return poemArray.reduce((outputString, stanzaArray, index) => {
    const indexArray = stanzaArray.map(line => {
      const lineArray = line.map(word => {
        return word === "THEE"
          ? titleArray.findIndex(x => x === "THE") + 1
          : titleArray.findIndex(x => x === word) + 1;
      });
      return `${lineArray.join("")}`;
    });
    return index > 0
      ? `${outputString}|${indexArray.join("/")}`
      : `${titleArray.join(" ")}: ${indexArray.join("/")}`;
  }, "");
}

fs.readFile("./examples/poems/be-on-the-beat.txt", "utf8", (err, data) => {
  if (err) throw err;
  const poemAsString = JSON.stringify(data);
  const parsedPoem = poemParser(poemAsString);
  const onlyStanzas = onlyPermutatedStanzas(parsedPoem);
  // console.log(onlyStanzas);
  const poemAnalysis = analysis(onlyStanzas);
  console.log(poemAnalysis);
});
