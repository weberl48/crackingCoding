
var compare = {
  permutation: function (string, string2) {

  var s1 = string.trim("").split("").sort().join(',');
  var s2 = string2.trim("").split("").sort().join(',');

  if (s1 === s2) {
      return true;
    } else {
      return false;
    }
  }
};


module.exports = compare;
