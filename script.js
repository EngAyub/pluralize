// Good Luck 💪🏾
function pluralize(Arr) {
  var wordCount = {};
  var pluralArr = [];

  for (var i = 0; i < Arr.length; i++) {
    var word = Arr[i];
    if (wordCount[word]) {
      var pluralForm = word + 's';
      if (!wordCount[pluralForm]) {
        var singularIndex = pluralArr.indexOf(word);
        pluralArr[singularIndex] = pluralForm; 
        wordCount[pluralForm] = true;
      }
    } else {
      wordCount[word] = true;
      pluralArr.push(word); 
    }
  }
  return pluralArr;
}
var Arr = (["cat", "dog", "cat", "mouse"]);  // cats
var pluralArr = pluralize(Arr);

console.log(pluralArr);