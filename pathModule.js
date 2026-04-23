const path = require("path");

// gives us the path separator for current OS.
console.log(path.sep);

const filepath = path.join("content", "subfolder", "text.txt");

console.log(filepath);

// gives us the absolute path to the file
const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
console.log(absolute);
