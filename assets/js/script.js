// Get All Dom Element
let lightMode = localStorage.getItem("lightMode");
const root = document.documentElement;
const themeToggler = document.querySelector("#themeToggler");
const chanceNumber = document.querySelector("#chanceNumber");
const counter = document.querySelector("#counter");
const playerTitle = document.querySelector("#playerTitle");
const inputGroup__one = document.querySelector("#inputGroup__one");
const inputGroup__two = document.querySelector("#inputGroup__two");
const inputGroupBox__one = document.querySelector("#inputGroupBox__one");
const inputGroupBox__two = document.querySelector("#inputGroupBox__two");
const inputGroupBtn__one = document.querySelector("#inputGroupBtn__one");
const inputGroupBtn__two = document.querySelector("#inputGroupBtn__two");
const showMessage = document.querySelector("#showMessage");
const hintMessage = document.querySelector("#hintMessage");
const hintMessageGreater = document.querySelector("#hintMessage__greater");
const hintMessageLower = document.querySelector("#hintMessage__lower");
const modal = document.querySelector("#modal");
const showResults = document.querySelector("#showResults");
const refreshBtn = document.querySelector("#refreshBtn");

// Set Initial Counter Number and Append it
let clickedNumber = 0;
chanceNumber.innerText = clickedNumber;

// Player 1 Input setup, Show and hide hint Results Function
inputGroupBtn__one.addEventListener("click", ()=>{
    inputGroupBoxOne__value = parseInt(inputGroupBox__one.value, 10);
    inputGroup__one.style.display = "none";
    inputGroup__two.style.display = "block";
    counter.style.display = "block";
    hintMessage.style.display = "block";
    hintMessageGreater.innerText = inputGroupBoxOne__value + Math.floor(Math.random() * (18 - 7 + 1) + 7);
    hintMessageLower.innerText = inputGroupBoxOne__value - Math.floor(Math.random() * (10 - 8 + 1) + 8);
    playerTitle.innerText = "😅 Player 2";
    setTimeout(() => {
        hintMessage.style.display = "none";
    }, 3100);
})

// Player 2 Input setup, Show Results and Messages Function
inputGroupBtn__two.addEventListener("click", ()=>{
    inputGroupBoxOne__value = parseInt(inputGroupBox__one.value, 10);
    inputGroupBoxTwo__value = parseInt(inputGroupBox__two.value, 10);
    clickedNumber++;
    chanceNumber.innerText = clickedNumber;
    inputGroupBox__two.value = "";
    if( inputGroupBoxOne__value < inputGroupBoxTwo__value){
        showMessage.innerHTML = "Your guessed number is <span id='guessedNumber'></span> & it's greater than the actual number"
        guessedNumber = document.querySelector("#guessedNumber");
        guessedNumber.innerText = inputGroupBoxTwo__value;
    }
    else if( inputGroupBoxOne__value > inputGroupBoxTwo__value){
        showMessage.innerHTML = "Your guessed number is <span id='guessedNumber'></span> & it's lower than the actual number"
        guessedNumber = document.querySelector("#guessedNumber");
        guessedNumber.innerText = inputGroupBoxTwo__value;
    }
    else if( inputGroupBoxOne__value == inputGroupBoxTwo__value){
        modal.classList.add("active");
        showResults.classList.add("modal__body__title--win");
        showResults.innerText = "You are winner 🎉";
        showMessage.innerHTML = "";
    }
    else if( inputGroupBox__two.value == ""){
        showMessage.innerHTML = "Please Guess and Select a Number";
    }
    if( clickedNumber >= 5 && inputGroupBoxOne__value !== inputGroupBoxTwo__value){
        modal.classList.add("active");
        showResults.classList.add("modal__body__title--lose");
        showResults.innerText = "Game Over 😭"
    }
})

// Page Onload Function
window.addEventListener("load", ()=>{
    modal.classList.remove("active");
})

// Play Again Function
refreshBtn.addEventListener("click", ()=>{
    location.reload();
})

// Enable LightMode Function
const enableLightMode = () =>{
    // 1. Add the class lightMode to the root Element
    root.classList.add("lightMode");
    // 2. Add the class toggle to themeToggler
    themeToggler.classList.add("toggle");
    // 3. Update lightMode in the localStorage
    localStorage.setItem("lightMode", "enabled")
}

// Disable LightMode Function
const disableLightMode = () =>{
    // 1. Remove the class lightMode to the root Element
    root.classList.remove("lightMode");
    // 2. Remove the class toggle to themeToggler
    themeToggler.classList.remove("toggle");
    // 3. Update lightMode in the localStorage
    localStorage.setItem("lightMode", null)
}

// Check localStorage lightMode value
if(lightMode === "enabled"){
    enableLightMode();
}

// Theme Change Event Functions
themeToggler.addEventListener("click", ()=>{
    lightMode = localStorage.getItem("lightMode");
    if(lightMode !== "enabled"){
        enableLightMode();
    } else{
        disableLightMode()
    }
})