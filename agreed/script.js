var text = document.getElementById("text");
var phrase = document.getElementById("phrase");
var next = document.getElementById("next");
var back = document.getElementById("back");

var memeImg = document.getElementById("meme");
var phrases = ["СОГЛАСНЫ?", "УЗНАЛИ?", "БЫЛО?", "ПАКЕТ?",
    "АПТЕКА", "JS рулит"];
var phCount = 0;
var colors = ["red", "green", "black", "blueviolet", "coral", "orange", "gold", "indigo", "pink"];
var borders = ["dotted", "dashed", "double", "groove", "ridge", "inset", "outset"];

var memes = ["https://pp.userapi.com/c845520/v845520794/1dc6eb/hWXWlmYqXoE.jpg",
    "https://pp.userapi.com/c852124/v852124098/108c7f/XOMcEsVGlT0.jpg",
    "https://pp.userapi.com/c855632/v855632944/1ca78/bcFxFwHypR0.jpg",
    "https://pp.userapi.com/c851416/v851416155/10960e/xDc1DW3cgwg.jpg",
    "https://pp.userapi.com/c543104/v543104945/536b8/nvstSr6g6DM.jpg",
    "https://pp.userapi.com/c845523/v845523891/1f789e/TD-nb8eoCPM.jpg"];

function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

text.onclick = function () {
    text.style.color = colors[getRandom(0, colors.length)];
    text.style.border = "5em " +
        borders[getRandom(0, borders.length)] + " " +
        colors[getRandom(0, colors.length)];
    text.style.fontWeight = "bold";
}

next.onclick = function () {
    phCount++;
    if (phCount > phrases.length - 1) {
        phCount = 0;
    }
    memeImg.setAttribute("src", memes[phCount]);
    memeImg.style.visibility = true;
    phrase.innerHTML = phrases[phCount];
}

back.onclick = function () {
    phCount--;
    if (phCount <= 0) {
        phCount = phrases.length - 1;
    }
    memeImg.setAttribute("src", memes[phCount]);
    memeImg.style.visibility = true;
    phrase.innerHTML = phrases[phCount];
}

