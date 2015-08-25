compress = require("../compress.js");
 describe('compress an array using numbers to represent repeating characters', function() {

   xit('returns a', function(){
      var result = compress('a');
      expect(result).toEqual("a");
   });

   xit('returns a2' ,function(){
     var result = compress('aa');
     expect(result).toEqual("a2");
   });

  it('description', function() {
    var result = compress("aabcccccaaa");
    expect(result).toEqual("a2blc5a3");
  });
 });
