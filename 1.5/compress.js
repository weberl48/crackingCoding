var compress = function(str){
  var array = str.split("")
  var compress = [[],[],[]];
  for (var i = 0; i < array.length; i++) {
    if (array[i - 1] === array[i] ) {
      if (compress[0][i] != array[i])
        compress[1].push(array[i]);
    } else {
      compress[0].push(array[i]);
    }

  }
console.log(compress[0][0]);
return compress;
};
module.exports = compress;
