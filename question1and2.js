//question 1
let studentAge = 20;
console.log(studentAge);
let studentName = "John";
console.log(studentName);
let studentGrade = (.90 * 100);
console.log(studentGrade);
let studentAttend = true;
console.log(studentAttend);

//question 2

//task 1 & 2
let x = 10;
let y = 5;
let num1 = addition(x, y);
let num2 = subtraction(x, y);

function addition(x, y) {
    return x + y;
}

function subtraction(x, y) {
    return x -y;
}

function multiplication(x, y) {
    return x * y;
}

function division(x, y) {
    return x / y;
}

//task3
console.log("Sum:", addition(x,y));
console.log("Difference:", subtraction(x,y));
console.log("Multiplication:", multiplication(x,y));
console.log("Division:", division(x,y));

//task 4
x += 20;
y -= 1;
console.log("Updated x:", x);
console.log("Updated y:", y);

//task 5
console.log("x == y", x == y);
console.log("x != y", x != y);
console.log("x > y", x > y);
console.log("x < y", x < y);

// Task 6: Apply logical operators
let isPositive = x > 0 && y > 0;
let isEven = x % 2 == 0 || y % 2 ==0;
console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);