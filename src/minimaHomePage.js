console.log("made with love")


// let inputEmail = document.querySelector('#inputEmail');

// inputEmail.oninput = function (){
//  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value))
//   {
//     console.log("email valid")
//     return (true)
//   }
//     console.log("You have entered an invalid email address!")
//     return (false)
// }





var modal = document.getElementById("myModal");
var btn2 = document.getElementById("emailBtn");

var span = document.getElementsByClassName("close")[0];

btn2.onclick = function() {
  

  modal.style.display = "block";
  console.log("button clicked emalBtn")
  document.body.style.overflow = "hidden"
}


span.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflow = "auto"
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
   document.body.style.overflow = "auto"
  }
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyd2l8Nn4X1BMqAOAMPMtdKQfgfap--Q4owxxzuvW-4K3wEQIgNYktMXqeq3tKJfCZU/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e=>{
	e.preventDefault()
	fetch(scriptURL, { method: 'POST', body: new FormData(form)})
	.then(response => alert("You have successfully subscribed for email reminder"))
	.catch(error => console.error('Error!', error.message))
})


document.querySelector("#btnTry").addEventListener("click", ()=>{
	window.location.href = 'install.html'
	
	console.log("button clicked: btnTry")
});


document.querySelector("#cardBtn").addEventListener("click", ()=>{
	
	
	window.location.href = 'demoPage.html'
	
	
	console.log("button clicked: cardBtn")
});



