import { getNodes } from "./domhandler1.js";
const { calculateButton, number1, number2, arithmatic, numberOutput } = getNodes();

var inputTextBox = [number1, number2];

inputTextBox.forEach((textbox) => {
    textbox.addEventListener("keypress", (event) => {
        const charCode = event.which ? event.which : event.keyCode;
        if(charCode > 31 && (charCode < 48 || charCode > 57)){
            event.preventDefault();
        }
    })
})

calculateButton.addEventListener("click", () =>{

    let totalNumber
    const number_1 = number1.value;
    const number_2 = number2.value;
    const arithmatic_ = arithmatic.value;

    switch (arithmatic_) {
        case "addition":
            totalNumber = Number(number_1) + Number(number_2);
            console.log(totalNumber);
            numberOutput.value = totalNumber;
            break;
        case "subtraction":
            totalNumber = Number(number_1) - Number(number_2);
            console.log(totalNumber);
            numberOutput.value = totalNumber;
            break;
        case "multiplication":
            totalNumber = Number(number_1) * Number(number_2);
            console.log(totalNumber);
            numberOutput.value = totalNumber;
            break;
        case "division":
            totalNumber = Number(number_1) / Number(number_2);
            console.log(totalNumber);
            numberOutput.value = totalNumber;
            break;
    }
});

