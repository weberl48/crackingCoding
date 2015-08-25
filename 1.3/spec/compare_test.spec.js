var compare = require('../compare.js');

describe("checks for string permutations", function(){

it("Compare permutation strings" , function(){
  var result = compare.permutation("god", "dog");
  expect(result).toEqual(true);
  });

it("Compare non-permutation strings" , function(){
    var result = compare.permutation("joe", "jon");
    expect(result).toEqual(false);
  });


it("Compares strings with spaces", function(){
    var result = compare.permutation("god  ", "dog  ");
    expect(result).toEqual(true);
});

});
