let homeScore = 12;
let guestScore = 5;

document.getElementById("output").innerText = output
document.getElementById("output2").innerText = output2

let sumEl = document.getElementById("sum-el")


function updateHomeDisplay() {
  document.getElementById("home-score").innerText = homeScore
}

function updateGuestDisplay() {
    document.getElementById("guest-score").innerText = guestScore
}

function addHomeScore(points) {
    homeScore += points
    updateHomeDisplay()
}

function addGuestScore(points) {
    guestScore += points
    updateGuestDisplay()
}

