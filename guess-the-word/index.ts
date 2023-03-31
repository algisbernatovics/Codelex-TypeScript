const prompts = require("prompts");

(async () => {
  const listOfWords: string[] = ["terminators", "klara", "grieta", "algis"];
  const word: string =
    listOfWords[Math.floor(Math.random() * listOfWords.length)];
  const wordParts: string[] = word.split("");

  let targetWord: string[] = "_".repeat(word.length).split("");

  let guesses: number = 0;
  const maxGuesses: number = word.length + 3;
  console.log(targetWord.join(""));
  while (guesses < maxGuesses) {
    const response = await prompts({
      type: "text",
      name: "letter",
      message: "Enter letter:",
    });

    let letterPosition = wordParts.indexOf(response.letter);

    if (letterPosition > -1) {
      targetWord[letterPosition] = response.letter;
      wordParts[letterPosition] = "-";

      if (word == targetWord.join("")) {
        console.log("Correct! The word was :" + word);
        break;
      }
    }

    guesses++;

    console.log(targetWord.join(""));
  }
  if (word != targetWord.join("")) {
    console.log("Wrong! The word was:" + word);
  }
})();
