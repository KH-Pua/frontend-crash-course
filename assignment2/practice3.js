// 1) Create a simple html with some tags.

// Create a paragraph
var paragraph = document.createElement('p');
paragraph.textContent = "This is a new paragraph."
paragraph.setAttribute("id", "paragraph");

const tag = document.getElementsByTagName("body")[0];
tag.insertBefore(paragraph, tag.children[0]);

// Create a unordered list
const fruits = ["Apple", "Orange", "Pineapple", "Guava"];
var new_list = document.createElement("ul");
tag.insertBefore(new_list, tag.children[1]);
var ul_tag = document.getElementsByTagName("ul")[0]

for (let i = 0; i < fruits.length; i++){
    var list_item = document.createElement('li');
    list_item.textContent = fruits[i];
    list_item.setAttribute("class", "fruitlist");
    ul_tag.appendChild(list_item);
}

// 2) Using getElementById to get a element and print it.

const get_id = document.getElementById("paragraph");
console.log(get_id.innerHTML);

// 3) Using getElementByClassName to get elements and print all.

fruit_list = document.getElementsByClassName("fruitlist");
for (let i = 0; i < fruit_list.length; i++){
    console.log(fruit_list[i].innerHTML);
}

// 4) Using querySelector to get a element by id and print it.

const get_id_byquery = document.querySelector("#paragraph");
console.log(get_id_byquery.innerHTML);

// 5) Using querySelector to get a element by class and print it.

const get_class_byquery = document.querySelector(".fruitlist");
console.log(get_class_byquery.innerHTML);

// 6) Using querySelectorAll to get elements by calss and print all.

const get_class_byquery_all = document.querySelectorAll(".fruitlist");
for (let i = 0; i < fruits.length; i++){
    console.log(get_class_byquery_all[i].innerHTML) ;
}
