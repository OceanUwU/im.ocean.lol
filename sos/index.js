function newQuestion() {
    questions = Object.keys(questions); //questions = ["0", "1", "2", ...]
    while (questions.length > 0) { //while there are questions in the question pool
        let question = questions[Math.floor(Math.random() * questions.length)]; //get random question number
        if (answers.hasOwnProperty(question)) //if this question has already been attempted
            questions.splice(questions.indexOf(question), 1); //remove it from the question pool
        else {
            window.location.replace(`q?${question}`); //otherwise do that question
            break;
        }
    }
    
    if (questions.length == 0) //if all questions have already been attempted
        window.location.replace('q?end');
}

if (Object.keys(answers).length > 0) //if the user has played this already
    newQuestion(); //send them to a new question
else { //otherwise show them the homepage
    document.getElementById('home').classList.remove('d-none');
    document.getElementById('question-amount').innerText = questions.length;
}