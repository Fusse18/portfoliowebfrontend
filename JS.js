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


  

function cambiar_parrafo(){
  document.getElementById("edit-acercade").style.display="block";
  let texto = document.getElementById("text-acercade").innerText;
  console.log(texto);
};

function myFunction2(valor){
document.getElementById("text-acercade").innerText=valor;
}

function logMessage(message) {
  console.log(message + "<br>")
}

let textarea=document.getElementById("edit-acercade")
textarea.addEventListener('keyup', (e) => {
logMessage('Key "${e.key}" released [event: keyup]');
if (e.key=="Enter"){
  document.getElementById("edit-acercade").style.display="none"
}
});

function showFile(input) {
  let file = input.file[0];
  alert('File name: ${file.name}');
  alert('Last modified: ${file.lastModified}');

let reader = new FileReader();
reader.readAsText(file);
reader.onload = function() {
  console.log(reader.resul);
  document.getElementById("text-acercade").innerText=reader.result;
};
reader.onerror = function() {
  console.log(reader.error);
};
}


