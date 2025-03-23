let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Was ist ein Algorithmus?",
        "answer_1": "Eine Programmiersprache",
        "answer_2": "Eine Folge von Anweisungen zur Lösung eines Problems",
        "answer_3": "Ein Hardware-Bauteil",
        "answer_4": "Ein Software-Entwicklungswerkzeug",
        "right_answer": 2
    },
    {
        "question": "Was ist eine Variable in der Programmierung?",
        "answer_1": "Ein Datentyp für Zahlen",
        "answer_2": "Ein Speicherplatz für Daten mit einem bestimmten Namen",
        "answer_3": "Eine Funktion zur Datenmanipulation",
        "answer_4": "Ein Befehl zur Programmausführung",
        "right_answer": 2
    },
    {
        "question": "Was bedeutet 'Debugging'?",
        "answer_1": "Das Schreiben von Code",
        "answer_2": "Das Testen von Code",
        "answer_3": "Das Entfernen von Fehlern im Code",
        "answer_4": "Das Optimieren von Code",
        "right_answer": 3
    },
    {
        "question": "Was ist eine 'Schleife' in der Programmierung?",
        "answer_1": "Eine Funktion zur Datenmanipulation",
        "answer_2": "Ein Befehl zur Programmausführung",
        "answer_3": "Eine Kontrollstruktur, die es ermöglicht, einen Codeblock wiederholt auszuführen",
        "answer_4": "Ein Datentyp für Zeichenketten",
        "right_answer": 3
    },
];

let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('audio/right.mp3');
let AUDIO_FAIL = new Audio('audio/wrong.mp3');


function init() {
    document.getElementById('allQuestions').innerHTML = questions.length;

    showQuestion();
}


function showQuestion() {

    if (currentQuestion >= questions.length) {
        //Show Endscreen
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none';
        document.getElementById('amountOfQuestions').innerHTML = questions.length;
        document.getElementById('amountOfRightQuestions').innerHTML = rightQuestions;
        document.getElementById('headerImage').src = './img/tropy.png';
    } else {

        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progressBar').innerHTML = `${percent} %`;
        document.getElementById('progressBar').style = `width: ${percent}%;`;

        let question = questions[currentQuestion];

        document.getElementById('questionNumber').innerHTML = currentQuestion + 1;
        document.getElementById('questionText').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play();
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    document.getElementById('nextButton').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('nextButton').disabled = true;
    resetAnswerButtons();
    showQuestion();




}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame(){
    document.getElementById('headerImage').src = './img/pencil.jpg';
    document.getElementById('questionBody').style = '';
    document.getElementById('endScreen').style = 'display: none';
    rightQuestions = 0;
    currentQuestion = 0;
    init();
}