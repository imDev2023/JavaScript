const questions = [
    {
      question: "Which is the largest animal in the world?",
      answers: [
        { text: "Shark", correct: false },
        { text: "Blue Whale", correct: true },
        { text: "elephant", correct: false },
        { text: "Giraffe", correct: false },
      ],
    },
    {
      question: "Which is the smallest country in the world?",
      answers: [
        { text: "Vatican City", correct: true },
        { text: "Bhutan", correct: false },
        { text: "Nepal", correct: false },
        { text: "Shri Lanka", correct: false },
      ],
    },
    {
      question: "Which is the largest desert in the world?",
      answers: [
        { text: "Kalahari", correct: false },
        { text: "Gobi", correct: false },
        { text: "Sahara", correct: false },
        { text: "Antarctica", correct: true },
      ],
    },
    {
      question: "Which is the smallest continent in the world?",
      answers: [
        { text: "Asia", correct: false },
        { text: "Australia", correct: true },
        { text: "Arctic", correct: false },
        { text: "Africa", correct: false },
      ],
    },
  ];
  
  let currentQuestionIndex=0;
  let score = 0;

  function startQuiz(){
    currentQuestionIndex = 0;
    score = 0
    
    nextButton.innerHTML = 'Next';
    showQuestion();
  }

  function showQuestion(){
  let currentQuestion=questions[currentQuestionIndex]
    let questionNo = `${currentQuestion}. ${currentQuestionIndex.question}`

    
  }