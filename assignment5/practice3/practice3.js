import { getNodes } from "./domhandler3.js";
const { countDownSecond, executionButton, addButton, subtractButton, cancelButton } = getNodes();
console.log(addButton);

var timer
var paused = false;

//function isNumber(evt){
//    evt = (evt) ? evt : window.event;
//    var charCode = (evt.which) ? evt.which : evt.keyCode;
//    if(charCode > 31 && (charCode < 48 || charCode > 57)){
//        return false;
//    }
//    return true;
//}

countDownSecond.addEventListener("keypress", (event)=>{
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        event.preventDefault();
    }
})

function countDown(){
    //var currentTime = new Date().getTime();
    //var inputMilliSeconds = Number(document.querySelector(".input-number").value) * 1000;
    //var countDownMilliSecond = currentTime + inputMilliSeconds;

    timer = setInterval(function(){
        var countDownSecond = Number(document.querySelector(".input-number").value);   
        
        if (!paused) {
            if (countDownSecond < 1){
                clearInterval(timer);
                executionButton.textContent = "Start";
                addButton.removeAttribute("disabled");
                subtractButton.removeAttribute("disabled");
            } 
            if (countDownSecond > 0){
                document.querySelector(".input-number").value = countDownSecond - 1;
            }
        }
    }, 1000)

    return timer;
}

function pausedInterval(){
    paused = true;
    clearInterval(timer);
    executionButton.textContent = "Resume";

}

executionButton.addEventListener("click", (event)=>{
    //1) If the timer function is not counting, appear start.
    //2) else when counting, appear pause.
    //3) else when pause, appear resume. 
    
    if (executionButton.textContent === "Start" || executionButton.textContent === "Resume"){
        executionButton.textContent = "Pause";
        addButton.setAttribute("disabled", "");
        subtractButton.setAttribute("disabled", "");
        paused = false;
        countDown();

    } else if (executionButton.textContent === "Pause"){
        executionButton.textContent = "Resume"
        addButton.removeAttribute("disabled");
        subtractButton.removeAttribute("disabled");
        pausedInterval();
    }
})


cancelButton.addEventListener("click", (event) =>{
    clearInterval(timer);
    countDownSecond.value = 0;
    executionButton.textContent = "Start";
    addButton.removeAttribute("disabled");
    subtractButton.removeAttribute("disabled");
})

addButton.addEventListener("click", (event) =>{
    countDownSecond.value = Number(countDownSecond.value) + 1;
})

subtractButton.addEventListener("click", (event) =>{
    countDownSecond.value = Number(countDownSecond.value) - 1;
})
