//Below is a pseudo log-in page using javascript. 

let secret; 
do { 
  secret = prompt("What is the password? hint: See ReadME") 
} 
while (secret !== "analog"); 

var new_scroll_position = 0;
var last_scroll_position;
var header = document.getElementById("header");

window.addEventListener('scroll', function(e) {
  last_scroll_position = window.scrollY;

  // Scroll down
  if (new_scroll_position < last_scroll_position && last_scroll_position > 80) { 
    header.classList.remove("slideDown");
    header.classList.add("slideUp");

  // Scroll up
  } else if (new_scroll_position > last_scroll_position) {
    header.classList.remove("slideUp");
    header.classList.add("slideDown");
  }

  new_scroll_position = last_scroll_position;
});