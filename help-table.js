

class Table {
  static generateTable(moves) {
    const table = [['v PC\User >', ...moves]];
    const n = moves.length;
    const p = Math.floor(n / 2);

    for (let a = 0; a < moves.length; a++) {
      const row = [moves[a]];
      for (let b = 0; b < moves.length; b++) {
        const winer = Math.sign(((a - b + p + n) % n) - p);
        if (winer === 1) {
          row.push("Lose")
        } else if (winer === -1) {
          row.push("Win");
        } else {
          row.push("Draw");
        }
        
      }
      table.push(row);
    }

    return table;
  }

  static displayTable(tableArray) {
    const table = new AsciiTable();
  
    // Add header row
    tableArray[0].forEach(cell => table.addRow(cell));
    table.setHeadingAlign(AsciiTable.CENTER);
  
    // Add remaining rows
    for (let i = 1; i < tableArray.length; i++) {
      tableArray[i].forEach(cell => table.addRow(cell));
    }
  
    console.log(table.toString());
  }
}


export default Table;