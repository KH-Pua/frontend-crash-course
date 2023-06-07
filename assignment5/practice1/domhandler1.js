export const getNodes = () =>{
    const calculateButton = document.querySelector(".calculate-button");

    const number1 = document.querySelector(".number1-input");
    const number2 = document.querySelector(".number2-input");
    const arithmatic = document.querySelector("#arithmatic");
    const numberOutput = document.querySelector(".number-output");

    return{
        calculateButton,
        number1,
        number2,
        arithmatic,
        numberOutput
    };

}


