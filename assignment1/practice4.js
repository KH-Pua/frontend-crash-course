// 1. Show 1 to 10000
// --For loop

for (let i = 1; i <= 10000; i++) {
    console.log(i);
}

// --While loop

let i = 1
while (i <= 10000) {
    console.log(i);
    i++;
}


// 2. Show 1 to 100 even numbers
// --For loop

for (let j = 1; j <= 100; j++){
    if (j % 2 == 0){
        console.log(j);
    }
}

// --While loop

let j = 1
while (j <= 100) {
    if (j % 2 == 0){
        console.log(j);
    }
    j++;
}


// 3. Show 1 to 100 odd numbers
// --For loop

for (let k = 1; k <= 100; k++){
    if (k % 2 != 0){
        console.log(k);
    }
}

// --For loop
let k = 1
while (k <= 100) {
    if (k % 2 != 0){
        console.log(k);
    }
    k++;
}


// 4. Show 1 to 100 prime numbers
// --For Loop

for (let m = 2; m <= 100; m++){
    let is_prime = true
    for (let n = 2; n < m; n++){
        if (m % n === 0){  // if either one number inside the second loop have no remainder after division, the number is not a prime number
            is_prime = false;
            break;
        }
    }
    if (is_prime){
        console.log(m);
    }
}

// -- While Loop

let m = 2, n = 2;

while(m <= 100){
    let is_prime_2 = true
    let n = 2;
    while (n < m){
        if (m % n === 0){
            is_prime_2 = false;
            break;
        }
        n++;
    }
    if (is_prime_2){
        console.log(m);
    }
    m++;
}



// 5. Declare a variable called size and show the height of size triangle
// --For Loop

let size = 6;

for (let p = 0; p < size; p++){
    let row = '';
    for (let q = 0; q < p + 1; q++){
        row += '*';
    }
    console.log(row)
}

// --While Loop

let size_2 = 8
let r = 0;
let s = 0;

while (r < size_2){
    let row_2 = '';
    let s = 0; // reset s to 0 for each row
    while (s < r + 1){
        row_2 += '*';
        s++;
    }
    console.log(row_2)
    r++;
}


// 6. Show Multiplication Table (from 1*1 to 9*9)
// --For Loop

for (let t = 1; t <= 9; t++){
    for (let u = 1; u <= 9; u++){
        console.log(`${t} * ${u} = ${t*u}`);
    }
}

// --While Loop

let v = 1, w = 1;

while (v <= 9){
    let w = 1;
    while (w <= 9){
        console.log(`${v} * ${w} = ${v*w}`);
        w++;
    }
    v++;
}