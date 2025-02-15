function addNumbers(a, b) {
    return parseInt(a) + parseInt(b);
}

console.log(addNumbers(100, 15)); // Output: 15

let num1 = prompt("Please input the first number to add: ")
let num2  = prompt("Please input the second number to add: ")
    
let res = "The total is " + addNumbers(num1, num2)
alert(res)