import { getNodes } from "./domhandler2.js";

const { addButton, todoList } = getNodes();

//function delete_function(id) {
//    const parentNode = document.querySelector(`#${id}`).parentNode;
//    parentNode.remove();
//}

//var delButton = document.querySelector(".delete-button");

addButton.addEventListener("click", () =>{
    var todoItem = document.querySelector("#todo-item");
    if (todoItem.value !== ""){
        console.log(todoList);
    
        //Create the div container 
        const wrapperDiv = document.createElement("div");
        wrapperDiv.classList = "items";
    
        //Create the row of todo-item;
        const textDiv = document.createElement("div");
        textDiv.classList = "text";
        const userInput = document.createTextNode(todoItem.value);
        textDiv.appendChild(userInput);
    
        //Create delete button with class, id, onclick, and innerhtml.
        const delButton = document.createElement("button");
        delButton.setAttribute("id", todoItem.value);
        delButton.classList = "delete-button";
        delButton.innerHTML = "Del";
    
        console.log(delButton);
    
        //Append child to wrapperDiv.
        wrapperDiv.appendChild(textDiv);
        wrapperDiv.appendChild(delButton);
    
        //Append wrapperDiv to todoList.
        todoList.appendChild(wrapperDiv);
        todoItem.value = "";
    }
})


document.addEventListener("click", (event)=>{
    console.log(event);
    if (event.target.classList.contains("delete-button")) {
        var delButtonId = event.target.id;
        var id = document.querySelector(`#${delButtonId}`);
        const parentNode = id.parentNode;
        parentNode.remove();
    }
});

