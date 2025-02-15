const MY_TEXT = document.getElementById("message")
const MY_BTN = document.getElementById("myBtn")

let changed = false;

function changeText() {

    if (changed) {
        resetText()
    }

    else if (!changed) {
        changeTxtTo("Text Changed!")
    }
         
}

function changeTxtTo(your_text) {
    MY_TEXT.innerText = your_text;
    MY_BTN.innerText = "Reset"
    changed  = true;
}

function resetText() {
    MY_TEXT.innerText = "Click the button to change text";
    MY_BTN.innerText = "Click me"
    changed  = false;
}