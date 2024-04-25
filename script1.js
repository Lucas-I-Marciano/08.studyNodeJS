console.log("Lucas");

function addFiveNumber(num1, num2, num3, num4, num5) {
  return num1 + num2 + num3 + num4 + num5;
}

function selectBestCountry() {
  return "Brazil";
}

console.log("global tem o papel no Node como Window tem no navegador");
console.log(global);
global.console.log("Escrevendo com o global");

console.log(addFiveNumber(1, 2, 3, 4, 5));
// Para acessar isso em outros arquivos vamos usar o export e import
