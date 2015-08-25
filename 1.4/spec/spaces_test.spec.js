var spaces = require('../spaces.js');

describe("adds %20 to strings with spaces ", function(){
  it("", function(){
    var result = spaces("Mr John Smith   ");
    expect(result).toEqual("Mr%20John%20Smith");
  });
});
