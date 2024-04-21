import chalk from "chalk";

class Rules {
  constructor(moves) {
    this.moves = moves;
  }

  findWinner(uMove, cMove) {
    const n = this.moves.length;
    const p = Math.floor(n / 2);
    const a = this.moves.indexOf(cMove);
    const b = this.moves.indexOf(uMove);

    if (a === -1 || b === -1) {
      throw new Error("Invalid moves");
    }

    const winer = Math.sign(((a - b + p + n) % n) - p);
    if (winer === 1) {
      return chalk.red("Computer win");
    } else if (winer === -1) {
      return chalk.green("You win!");
    } else {
      return chalk.yellow("Game Draw");
    }
  }
}

export default Rules;
