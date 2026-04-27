const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");

const first = readFileSync("./content/subfolder/text.txt", "utf-8");
console.log(first);

readFile("./content/subfolder/text.txt", "utf8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(res);
  const first = res;

  readFile("./content/subfolder/second.txt", "utf8", (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(res);
    const second = res;
    writeFile(
      "./content/subfolder/result.txt",
      `this is the result of async fs modules: ${first} and ${second}`,
      (err, res) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(res);
      },
    );
  });
});
