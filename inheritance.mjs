// Separando o que é específico de piloto de fórmula 1, todo piloto de F1 é humano, mas o contrário não é verdade

class Human {
  constructor(name, nationality) {
    this.name = name;
    this.nationality = nationality;
  }

  sayHello() {
    console.log("Olá meu caro!");
  }
}

class F1Pilot extends Human {
  constructor(name, nationality, team, points = 0) {
    // Posso acessar a classe pai pela palavra super, como super.sayHello()
    // Se eu quiser acessar o construtor, basta colocar super();
    super(name, nationality);
    this.team = team;
    this.points = points;
  }

  race() {
    console.log("VRUUUUM!");
  }
}

const firstPilot = new F1Pilot("Max", "Holandês", "Red Bull", 575);
const secondPilot = new F1Pilot("Sergio", "Mexicano", "Red Bull", 285);
const thirdPilot = new F1Pilot("Lewis", "Britânico", "Mercedes", 234);

console.log(firstPilot);
// Consigo acessar porque é filha da clase pai
firstPilot.sayHello();
firstPilot.race();
