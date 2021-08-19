/**
 * Try to manipulate the page
 * 
 * Easiest
 * 1) Get the title for each dog/cat services, and put them into the console using console.log
 * 2) Change the title of the page to "We're the CAT People"
 * 3) Change the main image to be something cat related.
 * 
 * 
 * Harder
 * 1) Replace the call to action button background color with "red"
 * 2) Find another image and replace the header (try unsplash.com, get familiar with searching for images)
 * 3) When someone clicks the "Book your next Rover sitter" button, change the text of the button to say "Thanks"
 * 
 * 
 * Hardest (only if you get the others first)
 * 1) Make the responsive menu work!
 * 2) Implement a modal window - "Sign up now" CTA when someone clicks the 'Sign Up' button
 */ 


 let heading = document.querySelector("h1");
 let btn1 =document.querySelector('#Btn4');
 let btn2 =document.querySelector('#Btn5');

btn1.addEventListener('click', () =>{
    document.querySelector('.rover-hero-container').style.backgroundImage="url('https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/09/24/15/cat-pet-owner.jpg?width=1200')";
    heading.innerHTML = "We're the CAT People";
    heading.style.color = "white";
    document.querySelector('.rover-hero-container p').style.color = "white";
    document.querySelector('.typetoogle h4').innerHTML = "Or maybe... You're a Dog Person?";
    document.querySelector('.typetoogle h4').style.color = "rgb(95, 95, 95)";
});
 
btn2.addEventListener('click', () =>{
    document.querySelector('.rover-hero-container').style.backgroundImage="url('https://github.com/lilian1116/fewd_mid_lab/blob/master/img/hero.jpg?raw=true')";
    heading.innerHTML = "We're the DOG People";
    document.querySelector('.typetoogle h4').innerHTML = "Or maybe... You're a Cat Person?";
    document.querySelector('.typetoogle h4').style.color = "rgb(95, 95, 95)";
    heading.style.color = "rgb(95, 95, 95)";
    document.querySelector('.rover-hero-container p').style.color = "rgb(95, 95, 95)";
});

let Btn33 =document.querySelector('#Btn3');

Btn3.addEventListener('click', () =>{
    Btn3.style.backgroundColor='red';
    Btn3.innerHTML = "Thanks!";
});


/*SIGNUP*/
var modal = document.getElementById("SignUPid");
var btn = document.querySelector(".SignUP");
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

