import { EventEmitter } from "node:events";

const eventEmitter = new EventEmitter();

eventEmitter.on("Evento1 Lançado", (par1, par2) => {
  console.log(`Escutei o evento 1\nLogin: ${par1}\nSenha: ${par2}`);
});
eventEmitter.emit("Evento1 Lançado", "LucasMarciano", "SenhaAleatória");

class CompanySales extends EventEmitter {
  performSale() {
    super.emit("Venda realizada");
  }
}

// Definindo o comportamento (Escutando)
const sales = new CompanySales();
sales.on("Venda realizada", () => {
  console.log("Venda Realizada com Sucesso!");
});
// Emitindo a ação
sales.performSale();
