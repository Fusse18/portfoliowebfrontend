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


/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
} 