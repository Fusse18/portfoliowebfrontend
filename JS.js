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
