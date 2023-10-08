/*
   New Perspectives on HTML and CSS, 7th Edition
   Tutorial 7
   Review Assignment


   Filename: rb_formsubmit2.js

   Purpose: The purpose of this program is to verify that the form
            passes an initial validation test.

            When the form is submitted, the onsubmit event handler
            verifies that the form data is complete and valid.
            An alert box is displayed notifying the user.

            The event function returns a value of false so that the
            student does not have to continually retype test values
            in the survey form.
            
            For the customer form, the script also disables and enables
            the delivery and pickup options so that only one set of
            options is enabled at any one time.


*/

window.onload = init;

function init() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Data passes initial validation tests");
      return false;
   }
   
   document.getElementById("tricks").onclick = boo;
}

function boo() {
   let checkBox = document.getElementById("tricks");

   if (checkBox.checked == true) {
      turnOnTricks();
   }
   else {
      turnOffTricks();
   }
}

function turnOnTricks() {
   document.getElementById("course").disabled=false;
   document.getElementById("catch").disabled=false;
   document.getElementById("roll").disabled=false;
   document.getElementById("otherTrick").disabled=false;
}

function turnOffTricks() {
   document.getElementById("course").disabled=true;
   document.getElementById("catch").disabled=true;
   document.getElementById("roll").disabled=true;
   document.getElementById("otherTrick").disabled=true;
}
   
