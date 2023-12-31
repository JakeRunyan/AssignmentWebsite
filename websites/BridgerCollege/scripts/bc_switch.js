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

   buttonDIV.appendChild(webButton);
   buttonDIV.appendChild(pageButton);

   document.body.insertBefore(buttonDIV, document.body.firstChild);

   // Appended embedded <style> in out <head>
   var buttonStyles = document.createElement("style");
   document.head.appendChild(buttonStyles);

   // Add the style rules to the embedded stylesheet
   document.styleSheets[document.styleSheets.length - 1].insertRule(
      "div#styleButtons { \
         position: fixed; \
      }", 0);

   document.styleSheets[document.styleSheets.length - 1].insertRule(
      "div#styleButtons input { \
         background-color: rgba(68, 94, 186, 0.6); \
         border: 3px solid rgba(0, 24, 123, 0.6); \
         border-radius: 50%; \
         color: white; \
         display: inline-block; \
         font-size: 1.2em; \
         height: 60px; \
         margin: 5px; 10px; \
         width: 100px; \
      }", 1);

   document.styleSheets[document.styleSheets.length - 1].insertRule(
      "@media print { \
         div#styleButtons { \
            display: none; \
         } \
      }", 2);

   webButton.onclick = function() {
      pageStyle.disabled = true;
   }
   pageButton.onclick = function() {
      pageStyle.disabled = true;
   }
}