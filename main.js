import chalk from "chalk";
import GameController from "./game-controller.js";
import Rules from "./game-rules.js"

async function main() {
  try {
    const moves = process.argv.slice(2);
    if(moves.length % 2 === 0 || moves.length < 3 || moves.length !== new Set(moves).size) {
      throw new Error(chalk.red(`
      Invalid Arguments: Number of moves should be odd, greater than 2 and all moves should be unique.
      Example Vaid Arguments:
      node main.js move1 move2 move3
      node main.js Rock    Paper Scissors
      node main.js rock paper scissors lizard spock
      node main.js  1 2 3 4    5 6 7     8 9
      `));
    }
    console.log(moves);
    const rules = new Rules(moves);
    const game = new GameController(moves, rules);
    await game.play();

  } catch (e) {
    console.error(chalk.red(e.message));
  }
}


main();
