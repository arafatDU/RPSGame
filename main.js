
function main() {
  try {
    const moves = process.argv.slice(2);
    if(moves.length % 2 === 0 || moves.length < 3 || moves.length !== new Set(moves).size) {
      throw new Error('Invalid input. Try node main.js move1 move2 move3 ...(odd number)');
    }
    console.log(moves);

  } catch (e) {
    console.error(e.message);
  }
}


main();
