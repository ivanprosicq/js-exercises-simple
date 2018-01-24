/**
 * Write a function that tests whether a string is a palindrome.
 */
var Palindrome = function() {
  'use strict';

  function is(word) {
    console.log(word);
    var reverse = word.split('').reverse().join('');

    if(reverse === word){
      console.log("Yes, it is a palindrome.");
      return true;
    }
    else return false;
  }

  return {
    is: is
  };
};