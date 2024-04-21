import readline from 'readline';
import chalk from 'chalk';
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

    console.log(chalk.green("      ******************************************************"));
    console.log(chalk.green("      *") + chalk.yellow("             Welcome to the RPSGame                 ") + chalk.green("*"));
    console.log(chalk.green("      ******************************************************"));
  
    while (true) {
      this.menu(hmac);
      const userInput = await this.input(chalk.bold("Enter your move: "));
      if (userInput === "0") {
        break;
      } else if (userInput === "?") {
        Table.printTable(this.moves);
      } else {
        const uIndex = Number(userInput) - 1;
        if(isNaN(uIndex) || uIndex < 0 || uIndex >= this.moves.length){
          console.log(chalk.red(`Invalid move: Please enter a valid move number.(1-${this.moves.length})`));
        } else {
          const uMove = this.moves[uIndex];
          console.log(chalk.bold(`Your move: ${uMove}`));
          console.log(chalk.bold(`Computer move: ${cMove}`));
          console.log(this.rules.findWinner(uMove, cMove));
          console.log(chalk.blue(`HMAC key: ${key}`));
          break;
        }
      }
    }
  }
  

  menu(cHmac) {
    console.log(chalk.bold.blueBright(`HMAC: ${cHmac}`));
    console.log(chalk.bold("Available moves:"));
    this.moves.forEach((el, i) => console.log(chalk.cyan(`${i + 1} - ${el}`)));
    console.log(chalk.red("0 - exit"));
    console.log(chalk.yellow("? - help"));
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