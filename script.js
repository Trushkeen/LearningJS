var text = document.getElementById("text");
var phrase = document.getElementById("phrase");
var next = document.getElementById("next");
var back = document.getElementById("back");

var phrases = ["СОГЛАСНЫ?", "УЗНАЛИ?", "БЫЛО?", "ПАКЕТ?",
    "АПТЕКА", "ДЕНЧИК ЛОХ", "JSJSJSJSJSJS"];
var phCount = 0;
var colors = ["red", "green", "black", "blueviolet", "coral",
"orange", "gold", "indigo", "pink"];

function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

text.onclick = function () {
    text.style.color = colors[getRandom(0, colors.length)];
    text.style.border = getRandom(1, 20) + "px ridge " + colors[getRandom(0, colors.length)];
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

