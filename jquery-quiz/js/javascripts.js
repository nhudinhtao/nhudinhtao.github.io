var questions = [{
  question: "What is 2*5?",
  choices: [2, 5, 10, 15, 20],
  correctAnswer: 2
}, {
  question: "What is 3*6?",
  choices: [3, 6, 9, 12, 18],
  correctAnswer: 4
}, {
  question: "What is 8*9?",
  choices: [72, 99, 108, 134, 156],
  correctAnswer: 0
}, {
  question: "What is 1*7?",
  choices: [4, 5, 6, 7, 8],
  correctAnswer: 3
}, {
  question: "What is 8*8?",
  choices: [20, 30, 40, 50, 64],
  correctAnswer: 4
}];

var questionCounter = 0; //Tracks question number
var selections = []; //Array containing user choices
var quiz = $('.quiz'); //Quiz div object
var next = $('#next');
var prev = $('#prev');
var replay = $('#replay');
var toWhite = false;


//autorun javascript
(function() {

  // Display initial question
  displayNext();
  
})();

function goNext() {
  choose();

  // If no user selection, progress is stopped
  if (isNaN(selections[questionCounter])) {
    alert('Please make a selection!');
  } else {
    questionCounter++;
    displayNext();
  }
};

function goPreview() {
  choose();
  questionCounter--;
  displayNext();
}

function goRePlay() {
  location.reload();
}

function choose() {
  var radio = $('input[name="answer"]:checked');
  if (typeof(radio) != 'undefined' && radio != null) {
     selections[questionCounter] = radio.val();
  }
  
}

// Displays next requested element
function displayNext() {
  var question = $('#question');
  var wrong = $('#wrong');
  if (typeof(question) != 'undefined' && question != null) {
      question.remove();
  }

  if (typeof(wrong) != 'undefined' && wrong != null) {
      wrong.remove();
  }

  if(questionCounter < questions.length){
    var nextQuestion = createQuestionElement(questionCounter);
    quiz.append(nextQuestion);

    // Controls display of 'prev' button
    if(questionCounter >= 1){
      prev.show();
      next.show();
      replay.hide();
    } else if(questionCounter == 0){
      
      prev.hide();
      next.show();
      replay.hide();
    }
  } else {
      //display score
      var scoreElem = displayScore();
      var numWrong = 5 - scoreElem;
      var warning = '<p id=\'wrong\'\>You have ' + numWrong + ' wrong ';
      if (numWrong == 1) {
        warning += 'question.';
      } else {
        warning += 'questions.';
      }

      warning += ' Please try again!</p>';
      quiz.append(warning);

      if (scoreElem == 5) {
        window.location.href = "congratulation.html";
      }

      prev.hide();
      next.hide();
      replay.show();

  }
}

// Computes score and returns a paragraph element to be displayed
function displayScore() {  
  var numCorrect = 0;
  for (var i = 0, length = selections.length; i < length; i++) {
   if (selections[i] == questions[i].correctAnswer) {
      numCorrect++;
    }
  }
  
  return numCorrect;
}

// Creates and returns the div that contains the questions and 
// the answer selections
function createQuestionElement(index) {
  var qElement = '<div id=question>';
  qElement += '<p>';
  qElement += questions[index].question;
  qElement += '</p>';
  qElement += createRadios(index);
  qElement += '</div>';
  
  return qElement;
}
  
// Creates a list of the answer choices as radio inputs
function createRadios(index) {
  var radioList = '<ul>';
  var item;
  var input = '';
  for (var i = 0, length = questions[index].choices.length; i < length; i++) {
    item = '<li>';
    input = '<input type="radio" name="answer" value=' + i + ' />';
    input += questions[index].choices[i];
    item += input;
    radioList += item;
  }
  return radioList;
}

function goChangeTheme() {
  if (!toWhite) {
    $('#container').css('background-color', '#F1D557');
    $('#container').css('color', 'blue');
  } else {
    $('#container').css('background-color', '#06CFFB');
    $('#container').css('color', 'black');
  }
  toWhite = !toWhite;
}