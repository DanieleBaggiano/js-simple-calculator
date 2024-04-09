function numClick() {
    const num = this.innerText;
    const resultElem = document.getElementById("result");

    if (resultElem.innerText === "0") {
        resultElem.innerText = num;
    } else {
        resultElem.innerText += num;
    }
}

document.getElementById("più").addEventListener("click", function () {
    const display = document.getElementById("result");
    operator = "+";
    firstNum = parseFloat(display.innerText);
    display.innerText = "";
});

document.getElementById("meno").addEventListener("click", function () {
    const display = document.getElementById("result");
    operator = "-";
    firstNum = parseFloat(display.innerText);
    display.innerText = "";
});

document.getElementById("molt").addEventListener("click", function () {
    const display = document.getElementById("result");
    operator = "*";
    firstNum = parseFloat(display.innerText);
    display.innerText = "";
});

document.getElementById("div").addEventListener("click", function () {
    const display = document.getElementById("result");
    operator = "/";
    firstNum = parseFloat(display.innerText);
    display.innerText = "";
});

document.getElementById("canc").addEventListener("click", function () {
    const display = document.getElementById("result");
    display.innerText = "0";
});

document.getElementById("equal").addEventListener("click", function () {
    const display = document.getElementById("result");
    secondNum = parseFloat(display.innerText);

    if (operator === "+") {
        display.innerText = firstNum + secondNum;
    } else if (operator === "-") {
        display.innerText = firstNum - secondNum;
    } else if (operator === "*") {
        display.innerText = firstNum * secondNum;
    } else if (operator === "/") {
        if (secondNum === 0) {
            display.innerText = "Errore";
        } else {
            display.innerText = firstNum / secondNum;
        }
    }
});