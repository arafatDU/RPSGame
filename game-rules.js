class Rules {
  constructor(moves) {
    this.moves = moves;
  }

  findWinner(uMove, cMove) {
    const n = this.moves.length;
    const p = Math.floor(n / 2);
    const a = this.moves.indexOf(uMove);
    const b = this.moves.indexOf(cMove);


    return "Computer wins!";
  }
}


export default Rules;