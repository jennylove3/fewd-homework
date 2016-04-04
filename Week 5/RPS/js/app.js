$(document).ready(function() {
  var computerWeapon = "scissors"

function choseRock() {
  console.log("You chose rock!")
  if(computerWeapon == "rock"){
    alert("It's a tie")
  }
  else if (computerWeapon == "scissors") {
    alert("You win!!!")
  }
  else if (computerWeapon == "paper") {
    alert("You lost :'''(")
  }
  else {
    alert("oops. something went wrong XD")
  }
}
function chosePaper() {
  console.log("You chose paper")
}
function choseScissors() {
  console.log("You chose scissors!")
}

$("#rock").click(choseRock)
$("#paper").click(chosePaper)
$("#scissors").click(choseScissors)




});
