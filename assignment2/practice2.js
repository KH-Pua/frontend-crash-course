// 1) Create an object called person with properties for name, age and gender.
//    Assign values to these properties and then display the name and age of the person.

const person = {
    name: 'Peter',
    age: 12,
    gender: 'Male'
};

console.log(`${person.name}, ${person.age}, ${person.gender}`);

// 2) Add a method to the person object created in the pervious assignment called greet. The method should display a greeting message "Hello". Invoke the greet method to see the greeting message.

function greet() {
    return console.log("Hello!");
}

person.greet = greet;
person.greet();

// 3) Add a properties called friends to the person which containes several names and print it.

person.friends = ["Adam", "Alice", "Aaron"];
console.log(person.friends);