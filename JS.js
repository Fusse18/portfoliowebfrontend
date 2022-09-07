//boton edicion
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


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 

function closeNav() {
  document.getElementById("myLinks").style.display = "none";
 
} 