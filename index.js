let i=0;
let txt="NodeJS Backend Developer.";
let speed=70;

typeWriter()

function typeWriter() {
    if(i < txt.length){
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  var myNav = document.getElementById('nav-menu');
  window.onscroll = function () { 
      if ( document.documentElement.scrollTop >= 15 ) {
          myNav.classList.add("nav-colored");
          // myNav.classList.remove("nav-transparent");
      } 
      else {
          // myNav.classList.add("nav-transparent");
          myNav.classList.remove("nav-colored");
      }
  };