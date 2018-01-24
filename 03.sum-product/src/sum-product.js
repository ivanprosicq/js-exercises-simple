/**
 * Write a function that calculates a sum or a product of the numbers from 1 to n
 * If opts.mode is 'sum', then it calclates the sum.
 * If opts.mode is 'product', then it calclates the product.
 */
var SumProduct = function () {
  'use strict';

  function calculate(n, opts) {
    var asd = 0;
    var ase = 1;
    if (opts.mode == 'sum') {
      for (var i = 0; i <= n; i++) {
        asd += i;
      }
      return asd;
    }
    else if (opts.mode == 'product') {
      for (var i = 1; i <= n; i++) {
        ase *= i;
      }
      return ase;
    }
    else throw ('Invalid calculation mode.');

  }

  return {
    calculate: calculate
  };
};