import { getNodes } from "./domhandler4.js";
const { output, submitButton, resetButton, inputBox} = getNodes();

var randomNumber = Number(Math.round(Math.random() * 10));
console.log(randomNumber);

inputBox.addEventListener("keypress", (event) => {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)){
        event.preventDefault();
    }
})

submitButton.addEventListener("click", () => {
    var inputNumber = Number(document.querySelector(".guess-number-box").value);
    console.log(inputNumber);
    if (inputNumber === 0){
        output.innerHTML = "Please input a number.";
    } else if (inputNumber < randomNumber){
        output.innerHTML = "Please input a larger number.";
    } else if (inputNumber > randomNumber){
        output.innerHTML = "Please input a smaller number.";
    } else if (inputNumber === randomNumber){
        output.innerHTML = "Congratulations. You have the guessed the correct number.";
    }
})

resetButton.addEventListener("click", () => {
    var inputNumber = document.querySelector(".guess-number-box");
    output.innerHTML = "";
    inputNumber.value = "";
    randomNumber = Number(Math.round(Math.random() * 10));
})
