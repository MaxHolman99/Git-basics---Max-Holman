var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function printInfo(){
  document.getElementById("content-print").innerHTML = "dit is info!";
}

function printOmgeving(){
  document.getElementById("content-print").innerHTML = "dit zijn omgeving!";
}

function printVoorraden(){
  document.getElementById("content-print").innerHTML = "dit zijn mijn voorraden!";
}

function printTools(){
  document.getElementById("content-print").innerHTML = "dit zijn mijn tools!";
}