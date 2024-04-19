import readline from 'readline';
import HMAC from './hmac-generator.js';

class GameController {
  constructor(moves, rules) {
    this.moves = moves;
    this.rules = rules;
  }

  play() {
    const cMove = this.moves[Math.floor(Math.random() * this.moves.length)];
    const key = HMAC.generateKey(32);
    const hmac = HMAC.generateHMAC(cMove, key);
    this.menu(hmac);

    //const uMove = this.moves[Math.floor(Math.random() * this.moves.length)];
    const uMove = this.moves[0];
    //const result = this.rules.findWinner(uMove, cMove);

    console.log(`Your move: ${uMove}`);
    console.log(`Computer move: ${cMove}`);
    console.log(this.rules.findWinner(uMove, cMove));
    console.log(`HMAC key: ${key}`);

  }

  menu(cHmac) {
    console.log("HMAC: ", cHmac);
    console.log("Available moves");
    this.moves.forEach((el, i) => console.log(`${i + 1} - ${el}`));
    console.log("0 - exit");
    console.log("? - help");
  }

}


export default GameController;