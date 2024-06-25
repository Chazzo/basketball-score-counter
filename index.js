//HOME
let countHome = 0

function plusOneHome() {
    countHome += 1
    document.getElementById("score-home-el").innerHTML = countHome
}
function plusTwoHome() {
    countHome += 2
    document.getElementById("score-home-el").innerHTML = countHome
}
function plusThreeHome() {
    countHome += 3
    document.getElementById("score-home-el").innerHTML = countHome
}


//GUEST
let countGuest = 0

function plusOneGuest() {
    countGuest += 1
    document.getElementById("score-guest-el").innerHTML = countGuest
}
function plusTwoGuest() {
    countGuest += 2
    document.getElementById("score-guest-el").innerHTML = countGuest
}
function plusThreeGuest() {
    countGuest += 3
    document.getElementById("score-guest-el").innerHTML = countGuest
}


//RESET
function resetButton() {
    countHome = 0
    countGuest = 0
    document.getElementById("score-home-el").innerHTML = countHome
    document.getElementById("score-guest-el").innerHTML = countGuest
}



// This code didn't work lol, but I tried
// if (countHome = countGuest) {
//     document.getElementById("score-home-el").style.color = "#F9FAFB"
//     document.getElementById("score-guest-el").style.color = "#F9FAFB"
// } else if (countHome > countGuest) {
//     document.getElementById("score-home-el").style.color = "yellow"
// } else {
//     document.getElementById("score-guest-el").style.color = "yellow"
// }
