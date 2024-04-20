import readline from 'readline';
import HMAC from './hmac-generator.js';
import Table from './help-table.js';

class GameController {
  constructor(moves, rules) {
    this.moves = moves;
    this.rules = rules;
  }

  async play() {
    const cMove = this.moves[Math.floor(Math.random() * this.moves.length)];
    const key = HMAC.generateKey(32);
    const hmac = HMAC.generateHMAC(cMove, key);
  
    while (true) {
      this.menu(hmac);
  
      const userInput = await this.input("Enter your move: ");
      if (userInput === "0") {
        break;
      } else if (userInput === "?") {
        console.log("Table");
        const table = Table.generateTable(this.moves);
        console.table(table);

      } else {
        const uIndex = Number(userInput) - 1;
        if(isNaN(uIndex) || uIndex < 0 || uIndex >= this.moves.length){
          console.log("Invalid move");
        } else {
          const uMove = this.moves[uIndex];
          console.log(`Your move: ${uMove}`);
          console.log(`Computer move: ${cMove}`);
          console.log(this.rules.findWinner(uMove, cMove));
          console.log(`HMAC key: ${key}`);
          break;
        }
      }
    }
  }
  

  menu(cHmac) {
    console.log("HMAC: ", cHmac);
    console.log("Available moves");
    this.moves.forEach((el, i) => console.log(`${i + 1} - ${el}`));
    console.log("0 - exit");
    console.log("? - help");
  }

  async input(msg) {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      rl.question(msg, (answer) => {
        rl.close();
        resolve(answer.trim());
      });
    });
  }

}


export default GameController;