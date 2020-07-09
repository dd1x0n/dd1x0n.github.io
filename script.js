//Below is a pseudo log-in page using javascript. 

// let secret; 
// do { 
//   secret = prompt("What is the password? hint: See ReadME") 
// } 
// while (secret.toLowerCase() !== "analog"); 

//Below is the JavaScript needed to have the nav bar pop in and out.
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

function validateForm() {
  if (isEmpty(document.getElementById('data_2').value.trim())) {
  alert('First name is required!');
  return false;
  }
  if (isEmpty(document.getElementById('data_3').value.trim())) {
  alert('Last name is required!');
  return false;
  }
  if (isEmpty(document.getElementById('data_4').value.trim())) {
  alert('Email is required!');
  return false;
  }
  if (!validateEmail(document.getElementById('data_4').value.trim())) {
  alert('Email must be a valid email address!');
  return false;
  }
  return true;
  }
  function isEmpty(str) { return (str.length === 0 || !str.trim()); }
  function validateEmail(email) {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,15}(?:\.[a-z]{2})?)$/i;
  return isEmpty(email) || re.test(email);
  }