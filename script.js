var text = document.getElementById("text");
var phrase = document.getElementById("phrase");
var next = document.getElementById("next");
var back = document.getElementById("back");

var phrases = ["СОГЛАСНЫ?", "УЗНАЛИ?", "БЫЛО?", "ПАКЕТ?",
"АПТЕКА", "ДЕНЧИК ЛОХ", "JSJSJSJSJSJS"];
var phCount = 0;

text.onclick = function () {
    text.style.color = "red";
    text.style.border = "20px ridge red";
    text.style.fontWeight = "bold";
}

next.onclick = function () {
    phCount++;
    if (phCount > phrases.length - 1) {
        phCount = 0;
    }
    phrase.innerHTML = phrases[phCount];
}

back.onclick = function () {
    phCount--;
    if (phCount <= 0) {
        phCount = phrases.length - 1;
    }
    phrase.innerHTML = phrases[phCount];
}