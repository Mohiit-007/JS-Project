const questions = [
    {
        question:"Which is capital of India?",
        answers :[
            {text :"Delhi" , correct : true },
            {text :"Rajasthan" , correct : false },
            {text :"Maharashtra" , correct : false },
            {text :"Gujarat" , correct : false },
        ]
    },
    {
        question:"Which is capital of Rajasthan?",
        answers :[
            {text :"Kota" , correct :false },
            {text :"Jodhpur" , correct : false },
            {text :"Jaipur" , correct : true },
            {text :"Ajmer", correct : false },
        ]
    },
    {
        question:"Who is President of India?",
        answers :[
            {text :"Droupadi Murmu", correct : true },
            {text :"Narendra Modi", correct : false },
            {text :"Rahul Gandhi" , correct : false },
            {text :"Jay Shah" , correct : false },
        ]
    },
    {
        question:"Who is Iorn man of India?",
        answers :[
            {text :"Mahtma Gandhi" , correct : false     },
            {text :"Sardar Vallabhbhai Patel" , correct : true },
            {text :"APJ Abdul kalam" , correct : false },
            {text :"Bhagat Singh" , correct : false },
        ]
    },
]

const questionelement = document.querySelector('#question')
const answerButton  =  document.querySelector('.answers-button')
const nextButton = document.querySelector('#next-btn')

let score= 0;
let currentQuestionIndex = 0;

function startQuiz(){
    score= 0;
    currentQuestionIndex = 0;
    nextButton.innerHTML = "Next";
    ShowQuestion();
}
function ShowQuestion(){
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    const Questionnumber = currentQuestionIndex + 1;

    questionelement.innerHTML = Questionnumber +'.' + currentQuestion.question;
    // answerbutton.innerHTML = currentQuestion.answers ; 

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click',selectanswer);
    } );
}

    function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectanswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
         }
        else{ 
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct == 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block'
}
    function  handlenextbutton(){
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            ShowQuestion();
        }else{
            showscore();
        }
    }
    function showscore(){
        resetState();
        questionelement.innerHTML = `You scored ${score} out of ${questions.length}! `;
        nextButton.innerHTML = "play Again";
        nextButton.style.display = "block";
    }
nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex < questions.length ){
        handlenextbutton();
    }
    else{
        startQuiz();
    }
})

startQuiz();

