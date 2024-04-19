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
      return "Computer win";
    } else if (winer === -1) {
      return "Your win";
    } else {
      return "Draw";
    }
  }
}

export default Rules;
