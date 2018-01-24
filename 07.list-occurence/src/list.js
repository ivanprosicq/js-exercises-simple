/**
 * Write a function that checks whether an element occurs in a list.
 */
var List = function () {
  'use strict';

  function has(list, element) {
    console.log(list);
    console.log(element);
   
    var decision;
    for(var i=0; i<list.length; i++) {
      if(list.includes(element) == true){
        console.log("Yes in array.");
        decision = true;
      }
      else{
        console.log("Not in array.");
        decision = false;
      }

    }

    return decision;

  }

  return {
    has: has
  };
};