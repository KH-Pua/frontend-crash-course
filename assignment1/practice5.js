// 1. Declare a arrow fucntion called isEven, should pass a number variable and should return the result if isEven return true.

let a = 57;

isEven = (a) => {
    if (a % 2 === 0){
        return true;
    } else {
        return false;
    }
}
console.log(`Number ${a} ${isEven(a) ? 'is' : 'is not' } Even Number`);


// 2. Declare a arrow function called isLeapYear, should pass a number variable and should return the result if isLeapYear return true.

let b = 1974;

isLeapYear = (b) => {
    if (b % 4 === 0){
        if (b % 100 === 0){
            if (b % 400 === 0){
                return true  // the number can be divide by 4, 100 & 400. Leap Year
            }
            return false // the number can be divide by 4, 100, but not 400. Is not Leap Year
        }
        return true // the number can be divide by 4, but not 100. Leap Year
    }
    return false // the number cannot be divide by 4. Is not Leap Year.
}
console.log(`Year ${b} ${isLeapYear(b) ? 'is' : 'is not'} Leap Year`);


// 3. Declare a arrow function called isPrime, should pass a number variable and should return the result if isPrime return true.

let c = 74

isPrime = (c) => {
    for (let i = 2; i <= c; i++){
        let is_prime = true;
        for (let j = 2; j < c; j++){
            if (i % j === 0){
                is_prime = false;
                return is_prime;
            }
        }
    }
    return is_prime;
}
console.log(`Number ${c} ${isPrime(c) ? 'is' : 'is not'} a Prime Number`);


// 4. Declare a arrow function called findMax, should pass 3 number variables and should return the max number of them.

let d = 82, e = 25, f = 48

findMax = (d, e, f) => {
    let largest_number_return = Math.max(d, e, f);
    let result
    if (d == e && e == f) {
        result = 'The three numbers are equalled';
    } else if (d == e && d == largest_number_return) {
        result = 'Both "d" & "e" are the largest.'
    } else if (e == f && f == largest_number_return) {
        result = 'Both "e" & "f" are the largest.'
    } else if (d == f && d == largest_number_return) {
        result = 'Both "d" & "f" are the largest.'
    } else {
        if (d == largest_number_return) {
            result = '"d" is the largest'
        } else if (e == largest_number_return) {
            result = '"e" is the largest'
        } else if (f == largest_number_return) {
            result = '"f" is the largest'
        }
    }
    return result;
}
console.log(findMax(d, e, f));