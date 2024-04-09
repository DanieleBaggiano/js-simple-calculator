// let firstOperand = null;
// let currentOperation = null;
// let resetDisplay = false;

// // Assegna event listeners ai pulsanti numerici
// document.querySelectorAll('.num').forEach(button => {
//     button.addEventListener('click', function () {
//         const display = document.getElementById('display');
//         if (display.textContent === "0" || resetDisplay) {
//             display.textContent = this.textContent;
//         } else {
//             display.textContent += this.textContent;
//         }
//         resetDisplay = false;
//     });
// });

// // Assegna event listeners agli operatori
// document.querySelectorAll('.op').forEach(button => {
//     button.addEventListener('click', function () {
//         if (!resetDisplay && currentOperation !== null) {
//             executeCalculation();
//         } else {
//             firstOperand = parseFloat(document.getElementById('display').textContent);
//         }
//         currentOperation = this.textContent;
//         resetDisplay = true;
//     });
// });

// // Esegue il calcolo
// function executeCalculation() {
//     const display = document.getElementById('display');
//     const secondOperand = parseFloat(display.textContent);
//     let result;

//     switch (currentOperation) {
//         case '+':
//             result = firstOperand + secondOperand;
//             break;
//         case '-':
//             result = firstOperand - secondOperand;
//             break;
//         case '*':
//             result = firstOperand * secondOperand;
//             break;
//         case '/':
//             if (secondOperand === 0) {
//                 alert("Non è possibile dividere per zero.");
//                 result = firstOperand; // Mantieni il valore precedente per evitare di mostrare risultati non validi.
//                 break;
//             }
//             result = firstOperand / secondOperand;
//             break;
//         default:
//             return; // Uscita precoce se l'operazione non è riconosciuta
//     }

//     display.textContent = result.toString();
//     firstOperand = result; // Aggiorna il primo operando con il risultato per calcoli successivi
//     resetDisplay = true;
// }

// // Gestione del pulsante '='
// document.getElementById('equals').addEventListener('click', function () {
//     if (currentOperation !== null) {
//         executeCalculation();
//         currentOperation = null;
//     }
// });

// // Reset completo con il pulsante 'CANC'
// document.getElementById('clear').addEventListener('click', function () {
//     document.getElementById('display').textContent = "0";
//     firstOperand = null;
//     currentOperation = null;
//     resetDisplay = false;
// });


const numElems = document.querySelectorAll(".num");

for (let i = 0; i < numElems.length; i++) {
    const curNumElem = numElems[i];
    curNumElem.addEventListener("click", numClick);
}

document.getElementById("equal").addEventListener("click", result);

function numClick() {
    const num = this.innerText;
    const resultElem = document.getElementById("result");

    if (resultElem.innerHTML === "0") {
        resultElem.innerHTML = num;
    } else {
        resultElem.innerHTML += num;
    }
}

// function result() {
//     const number = document.getElementById("result").innerText;
//     alert(number);
// }

const opElems = document.querySelectorAll(".op");

for (let i = 0; i < opElems.length; i++) {
    const curOpElems = opElems[i];
    curOpElems.addEventListener("click", opClick);
}

// function opClick() {
//     const op = 
// }