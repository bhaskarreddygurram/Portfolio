const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
const formname = document.querySelector('#formname');
const form = document.querySelector('#myForm');
const list = document.querySelector('#ul');


let Files = [
  {"fileTitle1" :"https://www.linkedin.com/in/chaitanya-mandala-27004360/"},
  {"fileTitle2": "https://www.linkedin.com/in/chaitanya-mandala-27004360/"},
  {"fileTitle3": "https://www.linkedin.com/in/chaitanya-mandala-27004360/"}
  /* and so on... */
];


/*fetch("../Downloadfiles.json")
.then(response => {
   return response.json();
})
.then(jsondata => console.log(jsondata));*/

/*const FilesData= require('../Downloadfiles.json'); 
console.log(FilesData);

console.log(FilesData.Files); */
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
/*
form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.debug( ' e:', event.target, ' this:', this);
  //alert(this.elements.searchTerm.value)
  let value = formname.value;
  console.debug( ' value:', value);
  if ( value ) {
    window.alert("Thanks "+ value + " for contacting us. we will reach you soon");
    form.reset();
  }
});
*/

let download = ['file1', 'file2']
let output = '';
for (i=0; i<download.length; i++) {
  //output += '<li>' + download[i]+ '</li>';
  
  output += '<li> <a href="https://www.linkedin.com/in/chaitanya-mandala-27004360/">'+download[i]+'</a></li>';

}
list.innerHTML = output;



const loadJSON = (callback) => {
  const xObj = new XMLHttpRequest();
  xObj.overrideMimeType("application/json");
  // 1. replace './data.json' with the local path of your file
  xObj.open('GET', '../Downloadfiles.json', true);
  xObj.onreadystatechange = () => {
      if (xObj.readyState === 4 && xObj.status === 200) {
          // 2. call your callback function
          callback(xObj.responseText);
      }
  };
  xObj.send(null);
}

const init = () => {
  loadJSON((response) => {
      // 3. parse JSON string into JSON Object
      console.log('response =', response);
      const json = JSON.parse(response);
      console.log('your local JSON =', JSON.stringify(json, null, 4).Files);
      // 4. render to your page
      //const app = document.querySelector('#app');
      //app.innerHTML = `<pre>${JSON.stringify(json, null, 4)}</pre>`;
  });
}

init();