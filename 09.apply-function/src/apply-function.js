/**
 * Write a function on_all that applies a function to every element of a list.
 * You cannot use Array.map, but have to implement it yourself.
 */
var MyFunction = function() {
  'use strict';

  function applyFunction(list, f) {
    var final = [];

    console.log(list);
    console.log("F is: " + f);

    for(var i=0; i<list.length - 1; i++) {
      console.log("This is current element: " + list[i]);
      on_all();
      
    }
    
    function on_all(){
      var u = f(list[i]);
      console.log(u);
      final.push(u);
      console.log("Variable u: " + u);
      console.log("Final is: " + final);

      return final;
    }

    return on_all();

  }

  return {
    applyFunction: applyFunction
  };
};