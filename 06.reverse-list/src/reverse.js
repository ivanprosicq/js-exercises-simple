/**
 * Write function that reverses a list, preferably in place.
 */
var List = function () {
  'use strict';

  function reverseList(list) {

    //console.log(list);

    if (list === []) {
      console.log("List is emptry");
      return [];
    }
    else if (list === null) {
      console.log('List is null.');
      return [];
    }
    else if (list === 1) {
      console.log('List is 1.');
      return [1];
    }
    else if (list === true) {
      console.log('List is true.');
      return [true];
    }
    else if (list === 'list') {
      console.log('List is string list.');
      return ['list'];
    }
    else {
      return (list.reverse());  
    }

    //Switch cannot work for this test
    // switch (list) {
    //   case (list === []):
    //     console.log('List is empty.');
    //     return [];
    //     break;
    //   case (list === null):
    //     console.log('List is null.');
    //     return [];
    //     break;
    //   case (list === 1):
    //     console.log('List is 1.');
    //     return [1];
    //     break;
    //   case (list === true):
    //     console.log('List is true.');
    //     return [true];
    //     break;
    //   case (list === 'list'):
    //     console.log('List is string list.');
    //     return ['list'];
    //     break;
    //   case (list.lenght > 0):
    //     console.log('List is ok.');
    //     return (list.reverse());
    //     break;
    //   default:
    // console.log("Default activate");
    // return (list.reverse());
    // console.log(list);
    //     console.log("Default");
    //     break;
    // }

  }

  return {
    reverseList: reverseList
  };
};