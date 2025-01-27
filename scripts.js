//Create a Question Bank
//This will store your quiz questions.
const questions = [
  {
    question: "What is 5 * 3?",
    answers: [
      {text:"9",correct:false},
      {text:"15",correct:true},
      {text:"12",correct:false},
      {text:"18",correct:false},
    ]
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      {text:"Earth",correct:false},
      {text:"Mars",correct:true},
      {text:"Venus",correct:false},
      {text:"Jupiter",correct:false},
    ]
  },
  {
    question: "Which animal is known as king of jungle?",
    answers: [
      {text:"Tiger",correct:false},
      {text:"Lion",correct:true},
      {text:"Monkey",correct:false},
      {text:"Elephant",correct:false},
    ]
},
  {
    question: "What is the capital of Nepal?",
    answers: [
      {text:"Birgunj",correct:false},
      {text:"Pokhara",correct:false},
      {text:"Kathmandu",correct:true},
      {text:"Delhi",correct:false},
    ]
  },
  {
    question: "Who is known as the Father of Computers?",
    answers: [
      {text:"Steve Jobs",correct:false},
      {text:"Charles Babbage",correct:true},
      {text:"Alan Turing",correct:false},
      {text:"Pascal",correct:false},
    ]
  },
  {
    question: "What is the largest mammal in the world?",
    answers: [
      {text:"Elephant",correct:false},
      {text:"Blue Whale",correct:true},
      {text:"Girrafe",correct:false},
      {text:"Shark",correct:false},
    ]
  },
  {
    question: "Who wrote the national anthem of india,'Jana Gana Mana'",
    answers: [
      {text:"Mahatma Gandhi",correct:false},
      {text:"Rabindranath Tagore",correct:true},
      {text:"Jawaharlal Nehru",correct:false},
      {text:"Bankim Chandra Chatterjee",correct:false},
    ]
  },
  {
    question: "What is the smallest continent in the world",
    answers: [
      {text:"Europe",correct:false},
      {text:"Antarctica",correct:false},
      {text:"South America",correct:false},
      {text:"Australia",correct:true},
    ]
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: [
      {text:"Diamond",correct:true},
      {text:"Gold",correct:false},
      {text:"Steel",correct:false},
      {text:"Iron",correct:false},
    ]
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      {text:"Thar",correct:false},
      {text:"Gobi",correct:false},
      {text:"Sahara",correct:true},
      {text:"Arctic",correct:false},
    ]
  },
  {
    question: "Which country is known as the 'Land of the Rising Sun'?",
    answers: [
      {text:"China",correct:false},
      {text:"Japan",correct:true},
      {text:"South Korea",correct:false},
      {text:"Thailand",correct:false},
    ]
  },
  {
    question: "What is the name of the longest river in the world?",
    answers: [
      {text:"Amazon",correct:false},
      {text:"Yangtze",correct:false},
      {text:"Ganges",correct:false},
      {text:"Nile",correct:true},
    ]
  },
  {
    question: "Who was the first man walk on the Moon?",
    answers: [
      {text:"Neil Armstrong",correct:true},
      {text:"Yuri Gagarin",correct:false},
      {text:"Buzz Aldrin",correct:false},
      {text:"John Glenn",correct:false},
    ]
  },
  {
    question: "What is the national currency of Nepal?",
    answers: [
      {text:"Indian Rupee",correct:false},
      {text:"Nepali Rupee",correct:true},
      {text:"Yuan",correct:false},
      {text:"Dollar",correct:false},
    ]
  },
  {
    question: "Who is known as the 'Missile Man of India'?",
    answers: [
      {text:"Vikram Sarabhai",correct:false},
      {text:"C.V. Raman",correct:false},
      {text:"Dr. A.P.J. Abdul Kalam",correct:true},
      {text:"Homi Bhabha",correct:false},
    ]
  },
  {
    question: "Which gas is most abundant in the Earth's atmosphere?",
    answers: [
      {text:"Nitrogen",correct:true},
      {text:"Oxygen",correct:false},
      {text:"Carbon Dioxide",correct:false},
      {text:"Hydrogen",correct:false},
    ]
  },
  {
    question: "In which year did India gain independance?",
    answers: [
      {text:"1945",correct:false},
      {text:"1946",correct:false},
      {text:"1947",correct:true},
      {text:"1948",correct:false},
    ]
  },
  {
    question: "What is the main source of energy for the Earth?",
    answers: [
      {text:"The Moon",correct:false},
      {text:"The sun",correct:true},
      {text:"Geothermal Energy",correct:false},
      {text:"Tides",correct:false},
    ]
  },
  {
    question: "What is the tallest mountain in the world?",
    answers: [
      {text:"Mount Kilimanjaro",correct:false},
      {text:"Mount K2",correct:false},
      {text:"Mount Everest",correct:true},
      {text:"Mount Elbrus",correct:false},
    ]
  },
  {
    question: "Which country invented the Olympic Games?",
    answers: [
      {text:"Italy",correct:false},
      {text:"France",correct:false},
      {text:"Germany",correct:false},
      {text:"Greece",correct:true},
    ]
  },
];

//Create Functions
//Show Start button and hide quiz container
const startButton = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const quizContainer = document.getElementById("quiz-container");

//Create Functions
//Load a Question: Dynamically display the current question and its options.
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
      
let currentQuestionIndex = 0;
let score = 0;

// Event listener for Start Quiz button
startButton.addEventListener("click", () => {
  startScreen.style.display = "none"; // Hide the start screen
  quizContainer.style.display = "block"; // Show the quiz container
  startQuiz();
});


function startQuiz(){
  currentQuestionIndex=0;
  score=0
  nextButton.innerHTML="Next";
  showQuestion();
}

function showQuestion(){
  resetState();
  let currentQuestion=questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML= answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState(){
  nextButton.style.display="none";
  while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach(button => {
    if(button.dataset.correct==="true"){
      button.classList.add("correct");
    }
    button.disabled=true;
  });
  nextButton.style.display="block";
}

//Display the score at the end
function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block"; //show the play again button
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}
nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }
  else{
    quizContainer.style.display = "none"; // Hide the quiz container
    startScreen.style.display = "block"; // Return to the start screen
  }
});
startQuiz();
