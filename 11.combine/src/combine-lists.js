/**
 * Write a function that concatenates two lists.
 */
var List = function() {
  'use strict';

  function combine(list1, list2) {

    var newArray = [];

    list1.forEach(function(i, index){
      newArray.push(i);
      if(list2[index]) {
        newArray.push(list2[index]);
      }
    })


    console.log(newArray);
    return newArray;
  }

  return {
    combine: combine
  };
};