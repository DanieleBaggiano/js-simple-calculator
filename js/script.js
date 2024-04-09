const numElems = document.querySelectorAll(".num");

for (let i = 0; i < numElems.length; i++) {
    const curNumElem = numElems[i];
    curNumElem.addEventListener("click", numClick);
}

document.getElementById("equal").addEventListener("click", result);

let firstNum = null;
let secondNum = null;
let operator = null;