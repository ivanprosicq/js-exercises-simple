/**
 * Write a function that returns the largest element in a list.
 */
var List = function () {
  'use strict';

  function findLargest(list) {
    var largest = 0;

    if (list.length > 0) {
      for (var i = 0; i < list.length; i++) {

        if (list[i] > 0) {
          if (largest < list[i]) {
            largest = list[i];
          }
          console.log(largest);
        }

        else if (list[i] < 0) {
          largest = -1;
          if (largest < list[i]) {
            largest = list[i];
          }
          console.log(largest);
        }
      }
    }
    else {
      throw ("List cannot be empty.");
    }
    
    return largest;
  }

  return {
    findLargest: findLargest
  };
};