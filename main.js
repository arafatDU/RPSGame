import GameController from "./game-controller.js";
import Rules from "./game-rules.js"

async function main() {
  try {
    const moves = process.argv.slice(2);
    if(moves.length % 2 === 0 || moves.length < 3 || moves.length !== new Set(moves).size) {
      throw new Error('Invalid input. Try node main.js move1 move2 move3 ...(odd number)');
    }
    console.log(moves);
    const rules = new Rules(moves);
    const game = new GameController(moves, rules);
    await game.play();

  } catch (e) {
    console.error(e.message);
  }
}


main();
