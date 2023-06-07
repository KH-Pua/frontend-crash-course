export const getNodes = () =>{
    var countDownSecond = document.querySelector(".input-number");
    var executionButton = document.querySelector(".execution");
    var addButton = document.querySelector(".add");
    var subtractButton = document.querySelector(".subtract"); 
    var cancelButton = document.querySelector(".cancel");

    return {
        countDownSecond,
        executionButton,
        addButton,
        subtractButton,
        cancelButton
    }
}



