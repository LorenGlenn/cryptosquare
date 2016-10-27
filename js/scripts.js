var cryptoSquare = function(input) {
  var columnNumber, rowNumber, word;
  var finalString = "";
  var encryptedString = "";
  var stringArray = input.replace(/[^a-zA-Z]/g, "").toLowerCase().split("");
  var stringLength = stringArray.length;
  var root = Math.sqrt(stringLength);
  if (stringLength < 4) {
    return false;
  } else if (Number.isInteger(root)) {
    columnNumber = root;
    rowNumber = root;
  } else {
    columnNumber = parseInt(root);
    rowNumber = parseInt(root) + 1;
  }

  for (column = 0; column < columnNumber; column++) {
    for(row = 0; row < rowNumber; row++){
      if (stringArray[column + (row * columnNumber)]){
        encryptedString = encryptedString.concat(stringArray[column + (row * columnNumber)]);
      }
    }
  }

  for (var index = 0; index < stringLength; index += 5) {
    word = encryptedString.slice(index, (index + 5) );
    finalString = finalString + word + " ";
    console.log(finalString);
  }

  return finalString;
}

$(document).ready(function(){
  $("form#romans").submit(function(event){
    var userSentence = $("#user-input").val();
    var outputString = cryptoSquare(userSentence);
    $("#output").text(outputString).show();
    event.preventDefault();
  });
});
