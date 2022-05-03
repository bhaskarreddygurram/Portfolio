const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
const formname = document.querySelector('#formname');
const form = document.querySelector('#myForm');
// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// set year
date.innerHTML = new Date().getFullYear();

function submitForm(e){
  console.debug(' e:', e);
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.debug( ' e:', event.target, ' this:', this);
  //alert(this.elements.searchTerm.value)
  let value = formname.value;
  console.debug( ' value:', value);
  if ( value ) {
    window.alert("Thanks"+ value + " for contacting us. we will reach you soon");
    form.reset();
  }
});
