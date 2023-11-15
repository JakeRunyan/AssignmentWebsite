"use strict";

/*

   Author: Jake Ruyan
   Date: 11/15

   Filename: bc_switch.js
   
   setupStyles()
   Function to set up the style sheet switcher and insert
   from buttons to allow the user to switch between web
   view and page view
   
*/

window.addEventListener("load", setupStyles);

function setupStyles() {
   // Create a link elem for the style sheet
   var pageStyle = document.createElement("link");
   pageStyle.setAttribute("href", "styles/bc_page.css");
   pageStyle.setAttribute("rel", "stylesheet");
   pageStyle.setAttribute("disabled", "disabled");

   // Append that link elem to that doc head
   document.head.appendChild(pageStyle);
   pageStyle.disabled = true;

   // Insert buttons for the style switcher
   var buttonDIV = document.createElement("div");
   buttonDIV.setAttribute("id", "styleButtons");

   var webButton = document.createElement("input");
   webButton.setAttribute("type", "button");
   webButton.setAttribute("value", "Web View")

   var pageButton = document.createElement("input");
   pageButton.setAttribute("type", "button");
   pageButton.setAttribute("value", "Page View");
}