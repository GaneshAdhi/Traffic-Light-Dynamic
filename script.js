let stopBtb = document.getElementById("stopButton");
let readyBtb = document.getElementById("readyButton");
let goBtb = document.getElementById("goButton");

let stopLight = document.getElementById("stopLight");
let readyLight = document.getElementById("readyLight");
let goLight = document.getElementById("goLight");

function stop() {
    stopBtb.style.backgroundColor = "#cf1124";
    readyBtb.style.backgroundColor = "#1f1d41";
    goBtb.style.backgroundColor = "#1f1d41";

    stopLight.style.backgroundColor = "#cf1124";
    readyLight.style.backgroundColor = "#4b5069";
    goLight.style.backgroundColor = "#4b5069";
}

function ready() {
    stopBtb.style.backgroundColor = "#1f1d41";
    readyBtb.style.backgroundColor = "#f7c948";
    goBtb.style.backgroundColor = "#1f1d41";

    stopLight.style.backgroundColor = "#4b5069";
    readyLight.style.backgroundColor = "#f7c948";
    goLight.style.backgroundColor = "#4b5069";
}

function go() {
    stopBtb.style.backgroundColor = "#1f1d41";
    readyBtb.style.backgroundColor = "#1f1d41";
    goBtb.style.backgroundColor = "#199473";

    stopLight.style.backgroundColor = "#4b5069";
    readyLight.style.backgroundColor = "#4b5069";
    goLight.style.backgroundColor = "#199473";
}
