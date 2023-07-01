let totalHomeScore = 0
let totalGuestScore = 0
let home = document.getElementById("totalHScore");
let guest = document.getElementById("totalGScore");
home.textContent = totalHomeScore;
guest.textContent = totalGuestScore;

function homePointOne() {
    totalHomeScore += 1
    home.innerText = totalHomeScore
}
function homePointTwo() {
    totalHomeScore += 2
    home.innerText = totalHomeScore;
}
function homePointThree() {
    totalHomeScore += 3
    home.innerText = totalHomeScore
    
} 
function guestPointOne() {
    totalGuestScore += 1
    guest.innerText = totalGuestScore
}
function guestPointTwo() {
    totalGuestScore += 2
    guest.innerText = totalGuestScore
}
function guestPointThree() {
    totalGuestScore += 3
    guest.innerText = totalGuestScore
}
// To reset the gamescore //
function refresh() {
    totalHomeScore = 0
    totalGuestScore = 0
    home.innerText = totalHomeScore;
    guest.innerText = totalGuestScore;
}
