//var app = document.getElementById('app');

//var typewriter = new Typewriter(app, {
//    loop: true
//});

//typewriter.typeString('Hello World!')
//    .pauseFor(2500)
//    .deleteAll()
//    .typeString('Strings can be removed')
//    .pauseFor(2500)
//    .deleteChars(7)
//    .typeString('<strong>altered!</strong>')
//    .pauseFor(2500)
//    .start();

const phrases = ["I'm Dana Ismail", "Marketing Executive"];

const el = document.querySelector("#typewiter");
let sleepTime = 100;
let curPhraseIndex = 0;

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

const writeloop = async () => {
    while (true) {
        let curWord = phrases[curPhraseIndex];

        for (let i = 0; i < curWord.length; i++) {
            el.innerHTML = curWord.substring(0, i + 1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 10);

        for (let i = curWord.length; i > 0; i--) {
            el.innerHTML = curWord.substring(0, i - 1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 5);

        if (curPhraseIndex === phrases.length - 1) {
            curPhraseIndex = 0;
        } else {
            curPhraseIndex++;
        }
    }
}


writeloop();