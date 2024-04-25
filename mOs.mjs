import { totalmem, freemem } from "node:os";

console.log("Total: ", (totalmem() / 1024 ** 3).toLocaleString(), "GB");
console.log("Free: ", (freemem() / 1024 ** 3).toLocaleString(), "GB");
