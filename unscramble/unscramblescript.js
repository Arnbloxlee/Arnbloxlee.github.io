var words = ["PROGRAMMING", "APPLE", "GUESS", "TODAY", "ELECTRIC", "TOMORROW", "GRASS", "LANGUAGE", "TREEHOUSE", "VIOLIN", "STRING", "NOTEBOOK", "CAT", "NOTE", "DOG", "BOOK", "CONDENSATION", "HAPPY", "HAPPINESS", "EMOTION", "ADVENTURE", "GOVERNMENT", "CONTRIBUTION", "PARTICIPATE", "PERSISTANCE", "PERSIST"];
var word = words[Math.floor(Math.random() * words.length)];
var finalWord = word.toUpperCase()
var wordShuffled = word.split('').sort(function () {
  return 0.5 - Math.random();
}).join('');
var wordDisplay = wordShuffled.toUpperCase()
$(".scrambled").text(wordDisplay);

$("#programming-form").on("submit", function (event) {
  event.preventDefault();

  var $answer = $(this).find("#guess");
  var answer = $answer.val().toUpperCase();

  if (answer == finalWord) {
    $("#result").text("Correct!").css("background-color", "rgb(0, 255, 68)")
    setTimeout(function () {
      window.location.assign(window.location.href);
    }, 2000);
  } else if (answer === "") {
    $("#result").text("Please take a guess!").css("background-color", "rgb(255, 0, 0)")
  } else {
    $("#result").text("Try again").css("background-color", "rgb(255, 0, 0)")
  }
});

$("#show-word").on("click", function () {
  $("<p>").text("The word was " + finalWord)
    .appendTo("body");
  setInterval(function () {
    window.location.assign(window.location.href);
  }, 1000)
});