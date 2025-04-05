let q; //question number
let validQ = true;
if (window.location.search.length > 1) {
    q = window.location.search.slice(1) //get URL query (without the ?)
    if (q != 'end' && (!Object.keys(questions).hasOwnProperty(q) || q == 'length')) //if question doesnt exist
        validQ = false;
} else validQ = false;

if (!validQ) //if question not available
    window.location.replace(''); //get a new question






if (q != 'end') {
    document.getElementById('q').src = `img/${q}.png`;
} else {
    document.getElementById('q-container').classList.add('d-none');
    document.getElementById('options').classList.add('d-none');
    document.getElementById('end').classList.remove('d-none');
    updateStats();
    document.getElementById('stats').classList.remove('d-none');
}


function guess(guessedSymbol) {
    let isSymbol = Array.isArray(questions[q]);
    let correct = isSymbol == guessedSymbol;

    answers[String(q)] = correct;
    localStorage.symbolQuizAnswers = JSON.stringify(answers);

    document.getElementById('info').innerText = isSymbol ? `${questions[q][0]} - ${questions[q][1]}` : `Scribble - ${questions[q]}`;
    document.getElementById('options').classList.add('d-none'); //hide buttons
    document.getElementById('info').classList.remove('d-none'); //show info
    document.getElementById('next').classList.remove('d-none');
    updateStats();
    document.getElementById('stats').classList.remove('d-none');
    //document.getElementById('completed-questions').innerText = Object.keys(answers).length;
    //document.getElementById('total-questions').innerText = questions.length;
    document.getElementById(`${correct ? '' : 'in'}correct`).classList.remove('d-none'); //show result
    let container = document.getElementById('q-container').children[0];
    container.classList.remove('bg-light');
    container.classList.add(`bg-${isSymbol ? 'info' : 'warning'}`);
}

function updateStats() {
    let answerContainers = [
        document.getElementById('incorrect-list'),
        document.getElementById('correct-list')
    ];
    for (let i in answers) {
        let symbol = questions[Number(i)];
        let correct = answers[i];
        
        let img = document.createElement('img');
        img.src = `img/${i}.png`;
        img.title = Array.isArray(symbol) ? `${symbol[0]} - ${symbol[1]}` : `Scribble - ${symbol}`;
        img.setAttribute('data-bs-toggle', 'tooltip');
        new bootstrap.Tooltip(img);
        img.classList.add(`bg-${Array.isArray(symbol) ? 'info' : 'warning'}`);
        console.log(answers, answers[i], i);
        answerContainers[Number(correct)].appendChild(img);
    }

    document.getElementById('accuracy').innerText = Math.floor(Object.values(answers).filter(e => e).length / Object.values(answers).length * 100);
}

function reset() {
    delete localStorage.symbolQuizAnswers;
    window.location.replace('.');
}