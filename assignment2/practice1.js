// 1) Declare a array called fruits with some fresh fruits in default.

const array = ["apple", "orange", "banana", "papaya"];

// 2) Print every element in the fuits array declared above.

console.log(array);

// 3) Modify the thirth fruit to Durian and print the fruit array.

const editedArray = array.map((element, index) => {
    if (index === 2){
        return "durian";
    } else {
        return element;
    }
})

console.log(editedArray);

// 4) Using the push method to add two fruits into array.

editedArray.push("pineapple", "guava");
console.log(editedArray);

//  5) Remove the first fruit from the array.

editedArray.shift();
console.log(editedArray);

// 6) Using for, while loop to print the element in the fruits array.

for (let i = 0; i < editedArray.length; i++){
    console.log(editedArray[i]);
}

let j = 0;
while (j < editedArray.length){
    console.log(editedArray[j]);
    j++;
}

// 7) Declare a array called numbers and set each element to its sqaured using map.

const number1 = [1,4,9,16,25];

const number_sqrt = number1.map((element) => {
    return Math.sqrt(element);
})

console.log(number_sqrt);

// 8) Declare a array called numbers and filter the prime number using filter.

const number2 = [1,2,3,4,5,6,7,8,9,10];

const number_prime = number2.filter((element) =>{
    if (element < 2){
        return false;
    }
    for (let k = 2; k < element; k++){
        if (element % k === 0){
            return false;
        } 
    }
    return true;
})

console.log(number_prime);

// 9) Declare a array called numbers and computed the sum of the elements using reduce.

const number3 = [1,2,3,4,5,6,7,8,9,10]; 

const sum = number3.reduce((accumulator, element) => {
    return accumulator + element;
}, 0);

console.log(sum);