// 1) Show a random activity suggestion with a button 

const url = "https://www.boredapi.com/api/activity"

function activity_api(){
    fetch(url)
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(received_data => {
            const random_activity = received_data.activity;
            console.log(random_activity);

            const paragraph = document.querySelector("#activity_suggest");
            paragraph.textContent = random_activity;
        })
        .catch(error => {
            console.log("error");
        })
}


// 2) Predict the age of a person's name with a query string
//    a. Should have a text input to enter user's name
//    b. Should have a button to click. 


function post_to_api(){
    const submit_value = document.querySelector("#input").value;
    const url2 = `https://api.agify.io/?name=${submit_value}`;
    console.log(url2);

    fetch(url2)
    .then(response => response.json())
    .then(return_data2 => {
        const age_count = return_data2.age;
        const display = document.querySelector("#display_age");
        display.textContent = `${submit_value}'s age is ${age_count}.`;
        document.querySelector("#input").value = "";
    })
    .catch(error =>{
        console.log("error");
    })
}




