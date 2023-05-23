// 1) Create a counter with add and sub and show current number

function addition() {
    const current_number = document.querySelector("#number");
    const new_number = Number(current_number.innerHTML) + 1;
    current_number.innerHTML = new_number;
}

function subtraction(){
    const current_number = document.querySelector("#number"); 
    const new_number = Number(current_number.innerHTML) - 1;
    current_number.innerHTML = new_number;
}

function reset() {
    const current_number = document.querySelector("#number");
    const new_number = 0;
    current_number.innerHTML = new_number;
}



// 2) Create a todo list a.Input text b.add button c.block with todo items.

function add_todo(){

    check = document.querySelector("#list");
    console.log(check);
    if (check === null){
        const list_container = document.querySelector("#display_row");
        const ul_list = document.createElement("ul");
        ul_list.setAttribute("id", "list");
        list_container.appendChild(ul_list);
        append_list();
    }else{
        append_list();
    }
}

function append_list(){
    // Create delete button
    const new_button = document.createElement("button");
    new_button.setAttribute("onclick", "delete_function(this.id)");
    new_button.setAttribute("class", "btn btn-primary");
    new_button.textContent = "Delete";

    // Create p item
    const new_line = document.createElement("p");

    // Append p to div tag
    const todo_text = document.querySelector("#todo_item");
    if (todo_text.value !== ""){
        new_line.textContent = todo_text.value;
        new_button.setAttribute("id", `${todo_text.value}`);
        new_line.appendChild(new_button);
        const div_tag = document.querySelector("#list");
        div_tag.appendChild(new_line);
    } 

    // Cleanup txtbox value
    document.querySelector("#todo_item").value = "";

    // Update total number of task
    const num = document.querySelector("#list").childElementCount;
    const announce_num = document.querySelector("#pending_task");
    announce_num.textContent = `You have ${num} pending task.`;
}

function delete_function(id){
    selected_list = document.querySelector(`#${id}`).parentNode;
    selected_list.remove();

    const num = document.querySelector("#list").childElementCount;
    const announce_num = document.querySelector("#pending_task");
    announce_num.textContent = `You have ${num} pending task.`;
}

function clear_function(){
    todo_list = document.querySelector("#list");
    todo_list.remove();

    const announce_num = document.querySelector("#pending_task");
    announce_num.textContent = `You have 0 pending task.`;
}
