// DROP DOWN NAV BAR 
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-170px";
    }
    prevScrollpos = currentScrollPos;
}


/*
// Get the modal BILLEDER 
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

*/


var modal = document.getElementById('myModal');

function myFunction(imgs) {
    var modalImg = document.getElementById("img01");
    modalImg.src = imgs.src;
    modal.style.display = "block";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

function closeThis() {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}