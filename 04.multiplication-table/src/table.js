/**
 * Write a function that outputs a multiplication table for numbers up to 5.
 * The table should be a two-dimensional array.
 */
var MultiplicationTable = function () {
  'use strict';

  function generate5() {
      var num = 5;
      var table = [];
      var row = [];
      //create first array
      for (let i = 0; i <= num; i++) {
        console.log(i);
        row.push(i);
      }
      row.forEach((i, x) => table.push(row.map(item => item * x)));
      table.forEach((item, index) => item.splice(item[0], 1, row[index]));
      table[0] = row;
      console.log(table);
  
      return table;

  }

  return {
    generate5: generate5
  };
};