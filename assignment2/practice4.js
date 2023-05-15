// 1) Create a simple HTML like example.

var new_div = document.createElement("div");
new_div.setAttribute("class", "container");

const tag = document.getElementsByTagName("body")[0];
tag.insertBefore(new_div, tag.children[0]);


// 2) Append a p tag with "My first DOM created." into container.

var p_tag = document.createElement("p");
p_tag.textContent = "My first DOM created."

var get_div = document.getElementsByClassName("container")[0];
get_div.appendChild(p_tag);


// 3) Append a ul tag.

var ul_tag = document.createElement("ul");
tag.insertBefore(ul_tag, tag.children[1]);


// 4) Append 3 li tags into ul tag with 3 terms: red, Blue, yellow using for loop.

const colors = ["red", "blue", "yellow"];
var ul_select = document.querySelector("ul");

for(let i = 0; i < colors.length; i++){
    var li_tag = document.createElement("li");
    li_tag.textContent = colors[i];
    ul_select.appendChild(li_tag);
}
