(function () {
function Question(question, answer, correct){
    Object.assign(this, {question, answer, correct});
    // this.question = question;
    // this.answer = answer;
    // this.correct = correct;
};

Question.prototype.display = function(){
    console.log(this.question);
    for (const key in this.answer) {
        console.log(key + ': ' + this.answer[key]);
    }
};

Question.prototype.checkAnswer = function(answer, callback) {
    var sc;
    if(answer === this.correct){
        console.log('correct answer');
        sc = callback(true);
    }else{
        console.log('wrong answer');
        sc = callback(false);
    }
    this.displayScore(sc);
};

Question.prototype.displayScore = function(score) {
    console.log('Your score is ' + score);
    console.log('----------------------------------------------');
}

q1 = new Question('Q1', ['a', 'b'], 1);
q2 = new Question('Q2', ['x', 'y', 'z'], 2);
q3 = new Question('Q3', ['p', 'q', 'r'], 3);

var questionCollection = [q1, q2, q3];

function score(){
    var sc = 0;
    return function(correct) {
        if(correct){
            sc++;
        }
        return sc;
    }
};

var keepScore = score();

function nextQuestion() {
    var randomQuestion = Math.floor(Math.random() * questionCollection.length);

    questionCollection[randomQuestion].display();
    
    var answer = prompt('Please answer');
    
    
    if(answer !== 'exit'){
        questionCollection[randomQuestion].checkAnswer(parseInt(answer), keepScore);
        nextQuestion();
    }
}

nextQuestion();

})()