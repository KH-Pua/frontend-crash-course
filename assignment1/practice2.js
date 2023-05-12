// 1. Declare a variable called age and show 'can vote' if age >= 18, show 'can't vote' if age < 18

let age = 20;
if (age >= 18) {
    console.log("can vote");
} else {
    console.log("can't vote");
}

// 2. Check if a number is odd or even

let num = 15;

if (num % 2 == 1) {
    console.log("'num' is odd.");
} else {
    console.log("'num' is even.");
}


// 3. Declare two variables and check which one is big or they're eqaulled.

let a = 10, b = 20;

if (a < b) {
    console.log("'a' is smaller than 'b'");
} else if (a > b) {
    console.log("'a' is bigger than 'b'");
} else if (a === b) {
    console.log("'a' is equalled to 'b'");
}


// 4. Declare three variables and check which one is big or they're equalled.

let i = 23, j = 34, k = 46;

let largest_number_return = Math.max(i, j, k);

check_largest = (i, j, k) => {
    let result
    if (i == j && j == k) {
        result = 'The three numbers are equalled';
    } else if (i == j && i == largest_number_return) {
        result = 'Both "i" & "j" are the largest.'
    } else if (j == k && j == largest_number_return) {
        result = 'Both "j" & "k" are the largest.'
    } else if (i == k && i == largest_number_return) {
        result = 'Both "i" & "k" are the largest.'
    } else {
        if (i == largest_number_return) {
            result = '"i" is the largest'
        } else if (j == largest_number_return) {
            result = '"j" is the largest'
        } else if (k == largest_number_return) {
            result = '"k" is the largest'
        }
    }
    return result
}

console.log(check_largest(i, j, k));

// 5. Declare two variables for range (eg. 10, 100), declare another number variable and check a number is present in given range?

let x = 10, y = 100;
let input = 101;

check_range = (input) => {
    let answer
    if ((input >= x) && (input <= y)) {
        answer = '"input" within range.'
    } else {
        answer = '"input" out of range.'
    }
    return answer
}

console.log(check_range(input));


// 6. Declare a variable called year and check the year is leap year or not

let year = 1986;

check_leapyear = (year) => {
    if (year % 4 == 0){
        if (year % 100 == 0){
            if (year % 400 == 0){
                return true
            }
            return false
        }
        return true
    }
    return false
}

console.log(`Year ${year} ${check_leapyear(year) ? 'is' : 'is not'} a leap year`)
