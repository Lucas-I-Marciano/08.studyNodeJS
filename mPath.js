console.log(module.filename);

const path = require("node:path");

pathObj = path.parse(module.filename);
console.log(pathObj);
