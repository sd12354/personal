var i = 0;
var txt = 'Hello there! \n My name is Sameer Dhanda, and I am a Full Stack Web Developer!'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("main").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}