import chalk from 'chalk';
import { AsciiTable3 } from 'ascii-table3';


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
    const table = new AsciiTable3();
    table.setHeading(...tableArray[0]);
    table.setAlignCenter(0);
    for (let i = 1; i < tableArray.length; i++) {
      table.addRow(...tableArray[i]);
      if (i < tableArray.length - 1) {
        const separator = new Array(tableArray[0].length).fill('-');
        table.addRow(separator);
    }
    }
    console.log(table.toString());
  }

  static printTable(moves) {
    const table = this.generateTable(moves);
    const totalLength = 15 + (moves.length * 12);
    const separator = chalk.greenBright('+'.padEnd(totalLength, '-'));

    console.log(chalk.bold.blueBright('Result in what? You Win / Lose / Draw\n'));
    console.log(separator);
    console.log(`| ${chalk.bold.red('v PC\\User >')}  | ${moves.map((move) => chalk.bold.blueBright(move.padEnd(9))).join(' | ')}|`);
    console.log(separator);

    for (let i = 1; i < table.length; i++) {
      const row = table[i];
      console.log(`| ${chalk.bold.blueBright(row[0].padEnd(13))}| ${row.slice(1).map((cell) => cell.padEnd(9)).join(' | ')}|`);
      console.log(separator);
    }
  }
}


export default Table;