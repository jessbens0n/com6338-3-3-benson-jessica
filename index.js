var trueOrFalse = 'OK for True. CANCEL for False: '

var questionsArr = [
    { question: trueOrFalse + 'The Pittsburgh Steelers won the Super Bowl six times.',
    answer: true },
    { question: trueOrFalse + 'Golden Retrievers are the most popular dog breed in the United States.', 
    answer: true },
    { question: trueOrFalse + 'There are 45 states in the United States.', 
    answer: false },
    { question: trueOrFalse + 'Tallahassee is the capital of Florida.', 
    answer: true },
    { question: trueOrFalse + 'Sharks are mammals.', 
    answer: false }
]

var numCorrect = 0

function runQuiz() {
    for (var i = 0; i<questionsArr.length; i++) {
        if(confirm(questionsArr[i].question)===questionsArr[i].answer){
        numCorrect++
            }
    }
    var score = Math.round ((numCorrect/questionsArr.length) * 100)

    alert ("You scored " + score + "%!")
    numCorrect=0
}
