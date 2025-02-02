document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('question').innerHTML = questions[1];
    document.getElementById('checkButton').setAttribute('onclick', 'checkAnswer(1)');
    document.getElementById('checkButton').innerText = 'Sprawdź';
});

const answers = {
    1: /k(s|ś)ie(z|ż)yc/gi,
    2: /pianino/,
    3: /cie(n|ń)/,
    4: 30,
    5: /prz(z|y)sz(ł|l)o(s|ś)(c|ć)/,
    6: /czas/,
    7: 312211,
    8: /blast/,
    9: /ferie zimowe/
}

const questions = {
    1: `
        Gdy noc zapada i gwiazdy lśnią,
        <br>
        wielki księżyc nad światem trwa.
        <br>
        Choć blasku nie ma tak jak słońce,
        <br>
        jego imię wpisz – a droga twa!
    `,
    2: `
        Ma klucz, lecz nie drzwi,
        <br>
        Ma dźwięk, choć nie mówi.
        <br>
        Jego białe i czarne brzmienie,
        <br>
        w sercu muzyki wciąż się tli.
    `,
    3: `
        To, czego szukasz, nie widać okiem,
        <br>
        choć często towarzyszy krokom.
        <br>
        Nie możesz go dotknąć, nie możesz złapać,
        lecz gdy cię braknie – świat chce płakać.
    `,
    4: `
        2, 6, 12, 20, ?, 42, 56
        <br>
        Jakiej liczby brakuje w tym ciągu?
    `,
    5: `
        Jestem zawsze przed Tobą, ale nigdy mnie nie dogonisz. Czym jestem?
    `,
    6: `
        Im więcej mnie używasz, tym mniej mnie masz. Czym jestem?
    `,
    7: `
        1, 11, 21, 1211, 111221, ?
        <br>
        Jaka liczba pasuje w miejsce '?' w tym ciągu?
    `,
    8: `
        .-- / --- -.. .--. --- .-- .. . -.. --.. .. / .-- .--. .. ... --.. / ... .-..- --- .-- --- / -... .-.. .- ... -
    `,
    9: `
        H zoazhtpokt hatdk qclkp qpctp ktxzhp
    `
}

function checkAnswer(id) {
    const answer = document.getElementById('answer').value;
    if (answer) {
        if (answer.match(answers[id])) {
            // if (id != 7) {
            //     nextQuest(id+1);
            // } else {
            //     document.getElementById('question').innerText = 'To była ostatnia zagadka.';
            //     document.getElementById('checkButton').style.display = 'none';
            //     document.getElementById('answer').style.display = 'none';
            // }
            nextQuest(id+1);
        }

        document.getElementById('answer').value = '';
    }
}

function nextQuest(id) {
    document.getElementById('question').innerHTML = questions[id];
    document.getElementById('checkButton').setAttribute('onclick', `checkAnswer(${id})`);
}