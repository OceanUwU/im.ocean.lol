if (window.location.href.includes('#'))
    window.location.replace('./index.html');

const animateTime = 2500;
const stampTime = 4000;
const stampWaitTime = 1000;
const beforePos = [$('#stamp').css('top'), $('#stamp').css('left')];

function slide(page, cb = null) {
    return $('html, body').animate({scrollLeft: $('#question').width() * page}, animateTime, 'swing', cb).promise();
}

async function choose(option) {
    switch (option) {
        case 0:
            $('#details').removeClass('hidden');
            slide(1);
            break;
        
        case 1:
            $('#fail').removeClass('hidden');
            $('#letter').css('visibility', 'hidden');
            slide(1);
            await $('#stamp').animate({top: 0, left: 0}, stampTime, 'linear').promise();
            $('#letter').css('visibility', 'visible');
            setTimeout(() => $('#stamp').animate({top: beforePos[0], left: beforePos[1]}, stampTime, 'linear'), stampWaitTime);
            break;
    }
}

function submit() {
    if ($('input').get().some(e => e.value == '')) { //if no inputs are filled in
        window.location.replace('#warning');
    } else {
        $('#finish').removeClass('hidden');
        slide(2);
    }
}

async function retry() {
    await slide(0);
    $('#fail').addClass('hidden');
}