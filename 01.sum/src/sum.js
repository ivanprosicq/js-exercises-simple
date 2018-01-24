/**
 * Write a function that sums the numbers from 1 to n.
 */
var Sum = function() {
  'use strict';

  function sumNumbers(n) {
    var answer = 0;
    if ( n > 0 ){
      for (var i=1; i<= n; i++) {
        answer += i;
      }
    }

    if( n < 0 ){
      for (var i=-1; i>= n; i--) {
        answer += i;
      }
    }

    if( n==0 ){
      console.log("Can't sum 0.")
    }
    
  console.log(answer);
  return answer;
  }


  return {
    sumNumbers: sumNumbers
  };
};