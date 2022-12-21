// change the word inside the function parameters and run in in the console for diffrent results
function countWords(word) {
  var wordcount = 0;
  var lettercount = 0;
  for (i = 0; i < word.length; i++) {
    switch (word[i]) {
      case " ":
        wordcount++;
        break;
      case ".":
        console.log(
          "this sentence has " +
            lettercount +
            " letters and " +
            parseInt(wordcount + 1) +
            " words"
        );
        break;
      default:
        lettercount++;
    }
  }
}
countWords("hello world.");
