const { writeFile, readFile } = require("fs");
const util = require("util");

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFilePromise("./content/subfolder/text.txt", "utf8");
    const second = await readFilePromise(
      "./content/subfolder/second.txt",
      "utf8",
    );

    writeFilePromise(
      "./content/subfolder/result-async-node.txt",
      `this is awesome: ${first} ; ${second}`,
    );

    console.log(first, second);
  } catch (err) {
    console.log(err);
  }
};

start();
