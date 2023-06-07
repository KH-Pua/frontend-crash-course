export const getNodes = () => {
    
    var output = document.querySelector("h3");
    var submitButton = document.querySelector(".submit-button");
    var resetButton = document.querySelector(".reset-button");
    var inputBox = document.querySelector(".guess-number-box");

    return {
        output,
        submitButton,
        resetButton,
        inputBox
    }
}

