document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;

function switchGray() {
  document.body.style.backgroundColor = 'rgb(244, 228, 212)';
 document.body.style.color = 'black';
}

function switchWhite() {
  document.body.style.backgroundColor = 'dodgerblue';
  document.body.style.color = 'black';
}
