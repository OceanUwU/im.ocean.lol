var cardTable = $('#cardData');
var timer = $('#timer');
var cardsToDo;
var cardImages;
var doing;
var drawTime;
var endTime;
var drawCanvas;
var drawCtx;
var resultCanvas;
var resultCtx;
var resizeCanvas = $('<canvas>')[0];
resizeCanvas.width = 250;
resizeCanvas.height = 190;
var resizeCtx = resizeCanvas.getContext('2d');
var lining = false;
var mask;
var masks = {};
var mousedown = false;
var mousepos;
var prevpos;
['a', 's', 'p'].forEach(i => {
    let img = new Image(500, 380);
    img.src = `img/${i}.png`;
    masks[i] = img;
});
var penColor = $('#penColor');
var bgColor = $('#bgColor');
var penSize = $('#penSize');
var penOn = $('#penOn');
$('#penSizeIndicator').text(penSize.val());

function loadStrings() {
    let cards = [];
    try {
        let data = JSON.parse($('#cardStrings').val());
        for (i in data) {
            cards.push([
                data[i].NAME,
                data[i].DESCRIPTION.replaceAll(' NL ', '\n'),
                data[i].TYPE,
                i.includes(':') ? i.slice(i.indexOf(':')+1) : i
            ]);
        }
    } catch(e) {
        console.error(e);
        cards.push(["", ""]);
    }

    for (let i of cards) {
        let row = $('#cardTableRowTemplate').clone();
        row.removeAttr('id');
        row.removeAttr('class');
        row.attr('cardid', i[3]);
        row.children().eq(0).children().eq(0).val(i[0]);
        row.children().eq(2).children().eq(0).val(i[1]);
        if (['a', 's', 'p'].includes(i[2]))
            row.children().eq(1).children().eq(0).val(i[2]);
        cardTable.append(row);
    }

    $('#step-one').addClass('d-none');
    $('#step-two').removeClass('d-none');
}

function newCard() {
    let row = $('#cardTableRowTemplate').clone();
    row.removeAttr('id');
    row.removeAttr('class');
    cardTable.append(row);
}

function beginDrawing() {
    $('#setup').addClass('d-none');
    $('#cardTableRowTemplate').remove();
    let table = cardTable.parent();
    table.detach();
    $('#draw').append(table);
    cardTable = $('#cardData');
    cardTable.children().each((i, el) => $(el).children().eq(4).remove());
    cardsToDo = Array(cardTable.children().length).fill(null).map((_, i) => i);
    cardImages = [...cardsToDo];
    drawTime = $('#drawTime').val();
    $('#durationDisplay').text(drawTime);
    nextCard();
    $('#draw').removeClass('d-none');
}

function nextCard() {
    $('#drawing').addClass('d-none');
    $('#ready').removeClass('d-none');
    $('#completedDisplay').text(`${cardImages.length - cardsToDo.length}/${cardImages.length}`);
    cardTable.children().each((i, el) => $(el).addClass('d-none'));
    doing = cardsToDo.splice($('#shuffleCards').prop('checked') ? Math.floor(Math.random() * cardsToDo.length) : 0, 1)[0];
    cardTable.children().eq(doing).removeClass('d-none');
}

function drawCard() {
    mask = cardTable.children().eq(doing).children().eq(1).children().eq(0).val();
    if (mask != "Type") {
        $('#ready').addClass('d-none');
        $('#drawing').removeClass('d-none');
        $('#cardName').text(cardTable.children().eq(doing).children().eq(0).children().eq(0).val());
        endTime = Date.now() + drawTime * 1000;

        drawCanvas = $('#drawCanvas')[0];
        drawCtx = drawCanvas.getContext('2d');
        drawCtx.clearRect(0, 0, drawCanvas.width, drawCanvas.height)
        drawCtx.lineCap = 'round';
        resultCanvas = $('#resultCanvas')[0];
        resultCtx = resultCanvas.getContext('2d');

        frame();
    } else alert("Set the card's type first!");
}

function finishDrawing() {
    resizeCtx.clearRect(0, 0, resizeCanvas.width, resizeCanvas.height);
    resizeCtx.drawImage(resultCanvas, 0, 0, resizeCanvas.width, resizeCanvas.height);
    resizeCanvas.toBlob(smallBlob => {
        resultCanvas.toBlob(blob => {
            cardImages[doing] = [smallBlob, blob, resultCanvas.toDataURL()];

            if (cardsToDo.length > 0)
                nextCard();
            else
                showResult();
        })
    })
}

function frame() {
    let timeLeft = (endTime - Date.now()) / 1000;
    if (timeLeft >= 0) {
        timer.text(timeLeft.toFixed(2));

        if (mousedown) {
            drawCtx.globalCompositeOperation = penOn.prop('checked') ? "source-over" : "destination-out";
            drawCtx.strokeStyle = penColor.val();
            drawCtx.lineWidth = penSize.val();
            if (!lining)
                prevpos = mousepos;
            lining = true;
            drawCtx.beginPath();
            drawCtx.moveTo(prevpos[0], prevpos[1]);
            drawCtx.lineTo(mousepos[0], mousepos[1]);
            drawCtx.stroke();
            drawCtx.closePath();
            prevpos = mousepos;
        }
        resultCtx.fillStyle = bgColor.val();
        resultCtx.fillRect(0, 0, resultCanvas.width, resultCanvas.height);
        resultCtx.drawImage(drawCanvas, 0, 0);
        resultCtx.globalCompositeOperation = "destination-out";
        resultCtx.drawImage(masks[mask], 0, 0);
        resultCtx.globalCompositeOperation = "source-over";

        requestAnimationFrame(frame);
    } else
        finishDrawing();
}

async function showResult() {
    $('#draw').addClass('d-none');
    $('#result').removeClass('d-none');
    let imageBank = $('#cardImages');
    for (let i in cardImages)
        imageBank.append($(`<div><h4 cardid="${cardTable.children().eq(Number(i)).attr('cardid')}">${cardTable.children().eq(Number(i)).children().eq(0).children().eq(0).val()}</h4><img src="${cardImages[i][2]}" /></div>`));
}

async function zip() {
    var zipper = new JSZip();
    var namesUsed = [];
    for (let i in cardImages) {
        let images = cardImages[i];
        let name = $('#cardImages').children().eq(i).children().eq(0).attr('cardid')
            .replaceAll(' ', '');
        while (name == "" || namesUsed.includes(name))
            name += "1";
        zipper.file(`${name}.png`, images[0]);
        zipper.file(`${name}_p.png`, images[1]);
        namesUsed.push(name);
    }

    let url = window.URL.createObjectURL(await zipper.generateAsync({type:"blob"}));
    let a = $('<a>')[0];
    a.style.display = 'none';
    a.href = url;
    a.download = `sts-cast-${Date.now()}.zip`;
    $('body').append($(a));
    a.click();
    window.URL.revokeObjectURL(url);
}

window.addEventListener('mousedown', ev => mousedown = true);
window.addEventListener('mouseup', ev => {mousedown = false; lining = false;});
window.addEventListener('mousemove', ev => {if (resultCanvas != undefined) mousepos = [ev.clientX - resultCanvas.offsetLeft, ev.clientY - resultCanvas.offsetTop]});
window.addEventListener('touchstart', ev => mousedown = true);
window.addEventListener('touchend', ev => {mousedown = false; lining = false;});
window.addEventListener('touchcancel', ev => {mousedown = false; lining = false;});
window.addEventListener('touchmove', ev => {if (resultCanvas != undefined) mousepos = [ev.touches[0].clientX - resultCanvas.offsetLeft, ev.touches[0].clientY - resultCanvas.offsetTop]});

$(window).bind('beforeunload', ev => {
    if($('#step-one').hasClass('d-none')){
        let message = "You have unsaved changes on this page. Do you want to leave this page and discard your changes or stay on this page?";
        ev.returnValue = message;
        return message;
    }
});