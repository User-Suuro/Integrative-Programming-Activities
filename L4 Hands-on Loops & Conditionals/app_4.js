const MY_CONT = document.getElementById("resultContainer")

const INP_START = document.getElementById("myInput01");
const INP_END = document.getElementById("myInput02");

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log(number + " is even.");
        return "even"
    } else {
        console.log(number + " is odd.");
        return "odd"
    }
}

function startCheck() {
    let val_start = parseInt(INP_START.value)
    let val_end = parseInt(INP_END.value)

    // CHECKER
    
    if (val_start > val_end) {
        alert("Input Start cannot be greater than to Input End!")
        return
    }

    for (let i = val_start; i <= val_end; i++) {
        MY_CONT.innerHTML += "<p>" + "Number " + i + " is " + checkEvenOdd(i) + "</p>"; 
    }
}


