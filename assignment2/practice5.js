// 1) Create a text input and button called "add color", when the user click the button add the color in the text input into the list.

// Create a HTML with ul.
var ul_tag = document.createElement("ul");
const tag = document.getElementsByTagName("body")[0];
tag.insertBefore(ul_tag, tag.children[0]);


// Create a textbox and button.
var text_box = document.createElement("input");
text_box.setAttribute("type", "text");
tag.insertBefore(text_box, tag.children[0]);

var button = document.createElement("input");
text_box.setAttribute("type", "button");
text_box.setAttribute("value", "Add Color");
text_box.setAttribute("onclick", "addValue()");
tag.insertBefore(button, tag.children[0]);

function addValue(){
    var add_value = document.querySelector("input").value;
    var li_list = document.createElement("li");
    li_list.textContent = add_value;

    var ul_list = document.querySelector("ul");
    ul_list.appendChild(li_list);
}
