document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('question').innerHTML = questions[1];
    document.getElementById('checkButton').setAttribute('onclick', 'checkAnswer(1)');
    document.getElementById('checkButton').innerText = 'Sprawdź';
});

const answers = {
    1: /(K|k)(S|Ś|s|ś)(I|i)(E|e|Ę|ę)(Z|Ż|z|ż)(Y|y)(C|c)/g,
    2: /pianino/gi,
    3: /cie(n|ń|N|Ń)/gi,
    4: 30,
    5: /prz(z|Z|y|Y)sz(ł|l|L|Ł)o(s|ś|Ś|S)(c|ć|C|Ć)/gi,
    6: /czas/gi,
    7: 312211,
    8: /blast/gi,
    9: /ferie zimowe/gi
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
            if (id != 9) {
                nextQuest(id+1);
            } else {
                document.getElementById('question').innerText = 'To była ostatnia zagadka.';
                document.getElementById('checkButton').style.display = 'none';
                document.getElementById('answer').style.display = 'none';
            }
        }

        document.getElementById('answer').value = '';
    }
}

function nextQuest(id) {
    document.getElementById('question').innerHTML = questions[id];
    document.getElementById('checkButton').setAttribute('onclick', `checkAnswer(${id})`);
}