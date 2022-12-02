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
    document.getElementById('q').innerText = questions[q][1];
} else {
    document.getElementById('q-container').classList.add('d-none');
    document.getElementById('options').classList.add('d-none');
    document.getElementById('end').classList.remove('d-none');
    updateStats();
    document.getElementById('stats').classList.remove('d-none');
}


function guess(guessedSymbol) {
    let isSymbol = questions[q][0];
    let correct = isSymbol == guessedSymbol;

    answers[String(q)] = correct;
    localStorage.stationQuizAnswers = JSON.stringify(answers);

    document.getElementById('info').innerHTML = isSymbol ? `This is a real tube station - ${questions[q][2]}` : `This is fake! - ${questions[q][2]}`;
    document.getElementById('options').classList.add('d-none'); //hide buttons
    document.getElementById('info').classList.remove('d-none'); //show info
    document.getElementById('next').classList.remove('d-none');
    updateStats();
    document.getElementById('stats').classList.remove('d-none');
    if (isSymbol) {
        document.getElementById('line').innerText = questions[q][3];
        document.getElementById('line').classList.remove('d-none');
        let map = document.getElementById('map');
        map.src = `https://www.google.com/maps/embed?pb=${questions[q][4]}`;
        map.classList.remove('d-none');
    } else {
        document.getElementById('info').classList.add('text-center');
    }
    document.getElementById(`${correct ? '' : 'in'}correct`).classList.remove('d-none'); //show result
    let container = document.getElementById('q-container').children[0];
    container.classList.remove('bg-light');
    container.classList.add(`bg-${isSymbol ? 'primary' : 'danger'}`);
}

function updateStats() {
    let answerContainers = [
        document.getElementById('incorrect-list'),
        document.getElementById('correct-list')
    ];
    for (let i in answers) {
        let symbol = questions[Number(i)];
        let correct = answers[i];
        
        let title = document.createElement('h5');
        title.innerText = symbol[1];
        title.classList.add(`bg-${symbol[0] ? 'primary' : 'danger'}`);
        answerContainers[Number(correct)].appendChild(title);
    }

    document.getElementById('accuracy').innerText = Math.floor(Object.values(answers).filter(e => e).length / Object.values(answers).length * 100);
}

function reset() {
    delete localStorage.stationQuizAnswers;
    window.location.replace('.');
}