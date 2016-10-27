//This function encrypts a string based on column and row length
var encrypt = function(rowNumber, columnNumber, stringArray){
  var encryptedString = "";
  for (column = 0; column < columnNumber; column++) {
    for(row = 0; row < rowNumber; row++){
      if (stringArray[column + (row * columnNumber)]){
        encryptedString = encryptedString.concat(stringArray[column + (row * columnNumber)]);
      }
    }
  }
  return encryptedString;
}

//This function adds spaces every 5 character in a string
var addSpaces = function(encryptedString, stringLength) {
  var finalString = "";
  for (var index = 0; index < stringLength; index += 5) {
    word = encryptedString.slice(index, (index + 5) );
    finalString = finalString + word + " ";
  }
  return finalString;
}

//This function calculate the size of a cryptosquare and calls encrypt() and addSpaces().
var cryptoSquare = function(input) {
  var columnNumber, rowNumber, word;
  var stringArray = input.replace(/[^a-zA-Z]/g, "").toLowerCase().split("");
  var stringLength = stringArray.length;
  var root = Math.sqrt(stringLength);
  if (stringLength < 4) {
    return false;
  } else {
    columnNumber = parseInt(root);
    rowNumber = parseInt(root) + 1;
  }
  var encryptedString = encrypt(rowNumber, columnNumber, stringArray);
  var finalString = addSpaces(encryptedString, stringLength);
  return finalString;
}

//User interface Logic
$(document).ready(function(){
  $("form#romans").submit(function(event){
    var userSentence = $("#user-input").val();
    var outputString = cryptoSquare(userSentence);
    $("#output").text(outputString).show();
    event.preventDefault();
  });
});
