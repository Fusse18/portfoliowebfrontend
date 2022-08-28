let numero = document.getElementById("numero");
let counter = 0;
setInterval(() => {
  if (counter == 65) {
    clearInterval();
  } else {
    counter += 1;
    numero.innerHTML = counter + "%";
  }
},20);


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.backgroundColor = "rgb(51, 51, 51)";
  } else {
    document.getElementById("nav").style.backgroundColor = "rgba(221, 221, 221, 0)";
  }
  prevScrollpos = currentScrollPos;
} 