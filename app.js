let note = document.querySelector(".note");
let list = document.querySelector(".list");
let pianoMemo = [];

function play(x) {
    let audio = new Audio(`sound/${x}.mp3`);
    audio.play();
    note.value += x + "  ";
}

let m = ["C4", "A4", "B4", "E4", "D4"];

function runMemo(x, delay = 500) {

    let a = window.prompt('Enter Temp In Seconds');
    raiser = Number(a) * 1000;
    console.log(raiser)
    x.map((val, ind) => {
        setTimeout(play, delay, val);
        let wait = '';
        switch (val) {
            case 'C4':
                wait = 1;
                break;
            case 'D4':
                wait = 2;
                break;
            case 'E4':
                wait = 3;
                break;
            case 'F4':
                wait = 4;
                break;
            case 'G4':
                wait = 5;
                break;
            case 'A4':
                wait = 6;
                break;
            case 'B4':
                wait = 7;
                break;
            case 'C5':
                wait = 8;
                break;

        }
        setTimeout(color, delay, wait);

        delay += raiser;
    });
}

function back() {
    note.value = note.value.substring(0, note.value.length - 4);
}

function remove() {
    note.value = "";
    // console.log(current.length);
}
let ind = 0;

function saveNote() {
    let notes = note.value;
    pianoMemo.push(notes);
    note.value = "";
    // list.innerHTML = "";
    console.log("save in memory");

    function add() {
        let li = document.createElement('li');
        let btn = document.createElement('button');
        let val2 = document.createTextNode(notes);
        let btnText = document.createTextNode('Replay');
        let replayWrap = document.createElement('div');
        let i = document.createElement('i');
        i.setAttribute('class', 'feather-rotate-cw')
        btn.setAttribute('onclick', `rePlay(${ind})`);
        btn.setAttribute('class', 'replay');
        btn.appendChild(btnText);
        li.appendChild(replayWrap);
        replayWrap.appendChild(val2);
        li.appendChild(btn);
        btn.appendChild(i);
        li.setAttribute('class', 'animate__animated animate__fadeInLeft')
        list.appendChild(li);
        // list.innerHTML += `<li>${val} <button class='replay' onclick="rePlay(${ind});">Replay</button></li>`;
        // ;
        ind++;
    }
    add();
}

function rePlay(x) {
    let current = pianoMemo[x].split("  ");
    current.pop();
    runMemo(current);

    function remove() {
        note.value = '';
    }
    let t = (current.length + 1) * raiser;
    setTimeout(remove, t)

}
let key = document.querySelectorAll('.key');
key.forEach((val, ind) => {
    let range = document.querySelector('.color-range-' + (ind + 1));
    val.addEventListener('click', () => {
        color(ind + 1);
    })
})

function color(x) {
    let range1 = document.querySelector('.color-range-' + x);
    switch (x) {
        case 1:
            range1.style.backgroundColor = '#778beb';
            break;
        case 2:
            range1.style.backgroundColor = '#786fa6';
            break;
        case 3:
            range1.style.backgroundColor = '#63cdda';
            break;
        case 4:
            range1.style.backgroundColor = '#3ae374';
            break;
        case 5:
            range1.style.backgroundColor = '#e77f67';
            break;
        case 6:
            range1.style.backgroundColor = '#ea8685';
            break;
        case 7:
            range1.style.backgroundColor = '#f5cd79';
            break;
        case 8:
            range1.style.backgroundColor = '#ff3838';
            break;
    }
    range1.style.height = 10 + (x * 10) + '%';
    console.log('hello' + (ind + 1));

    function remove() {
        range1.style.height = '10%';
    }
    setTimeout(remove, 500);
}
document.addEventListener('keyup', (e) => {
    switch (e.keyCode) {
        case 65:
            play('C4');
            color(1);
            break;
        case 83:
            play('D4');
            color(2);
            break;
        case 68:
            play('E4');
            color(3);
            break;
        case 70:
            play('F4');
            color(4);
            break;
        case 74:
            play('G4');
            color(5);
            break;
        case 75:
            play('A4');
            color(6);
            break;
        case 76:
            play('B4');
            color(7);
            break;
        case 186:
            play('C5');
            color(8);
            break;
        case 8:
            back();
            break;
        case 13:
            saveNote();
            break;
    }
})