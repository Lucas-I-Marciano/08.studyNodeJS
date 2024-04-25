import { rename } from "node:fs/promises";

console.log(process.argv);
const oldName = process.argv[2];
const newName = process.argv[3];

rename(oldName, newName)
  .then(() => {
    console.log(`Arquivo Renomeado para ${newName}`);
  })
  .catch(() => {
    console.error(`Não foi possível renomear ${oldName}`);
  });
