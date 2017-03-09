var words = ["ground", "control", "to", "major", "tom"];

function myMap(arr, func) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++){
    newArr.push( func(arr[i]) );
  }
  return newArr;
}

var wordLengths = myMap(words, function(word) {
  return word.length;
});

console.log( wordLengths );
