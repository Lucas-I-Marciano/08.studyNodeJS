import { readFile } from "node:fs/promises";

async function readTextFile(filePath) {
  try {
    const myText = await readFile(filePath, { encoding: "utf8" });
    console.log(myText);
  } catch (erro) {
    console.error(erro.message);
  }
}

readTextFile("./novo.txt");
