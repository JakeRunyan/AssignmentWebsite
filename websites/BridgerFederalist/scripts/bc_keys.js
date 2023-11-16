"use strict";

/*

   Author: Jake Runyan
   Date: 11/15

   Filename: bc_keys.js

   Functions
   =========
   
   findKeyWords()
      Locate the keywords in the article indicated by the <dfn> tag
      and add those keywords in alphabetical order to a keyword box.
      
   makeKeyStyles()
      Create an embedded style sheet for the keyword box.

      
   replaceWS(textStr)
      Replaces occurences of one or more consecutive white space
      characters with the "_" character.

*/

window.addEventListener("load", findKeyWords);
window.addEventListener("load", makeKeyStyles);

/* findKeyWords()
      Locate the keywords in the article indicated by the <dfn> tag
      and add those keywords in alphabetical order to a keyword box.
*/
function findKeyWords() {

   // Create an aside and h1 elem and put h1 in aside
   var aside = document.getElementById("keywords");
   var heading = document.createElement("h1");
   var headingText = document.createTextNode("Keyword List");
   
   heading.appendChild(headingText);
   aside.appendChild(heading); // This connects my code to the HTML

   // Creating an ol elem and adding to the aside
   var list = document.createElement("ol");
   aside.appendChild(list);

   var keywordElems = document.querySelectorAll("dfn");
   var keywords = new Array(keywordElems.length);

   for (var i = 0; i < keywordElems.length; i++) {
      keywords[i] = keywordElems[i].innerHTML;
      var linkId = replaceWS(keywords[i]);
      keywordElems[i].setAttribute("id", "keyword_" + linkId);
   }

   keywords.sort;

   // Create a for loop to get each item in keywords
   for (var i = 0; i < keywords.length; i++) {
      var listItem = document.createElement("li");
      var keywordLink = document.createElement("a");
      keywordLink.innerHTML = keywords[i];
      keywordLink.setAttribute("href", "#keyword_" + linkId);
      listItem.appendChild(keywordLink);
      list.appendChild(listItem);
   }
}


/* makeKeyStyles()
      Create an embedded style sheet for the keyword box.
*/
function makeKeyStyles() {

   var style = document.createElement("style");
   document.head.appendChild(style);

   // Add the style rules to the embedded stylesheet
   document.styleSheets[document.styleSheets.length - 1].insertRule(
      "aside#keywords { \
         float: right;\
         width: 320px;\
         margin: 20px 0px 20px 20px;\
         border: 1px solid rgb(101, 101, 101);\
         padding: 10px;\
      }", 0);

   document.styleSheets[document.styleSheets.length - 1].insertRule(
      "aside#keywords h1 { \
         font-size: 2em;\
         margin: 5px;\
         text-align: center;\
      }", 1);

   document.styleSheets[document.styleSheets.length - 1].insertRule(
      "aside#keywords ol { \
         margin-left: 20px;\
         font-size: 1.2em;\
      }", 2);

   document.styleSheets[document.styleSheets.length - 1].insertRule(
      "aside#keywords ol li { \
         line-height: 1.5em;\
      }", 3);

   document.styleSheets[document.styleSheets.length - 1].insertRule(
      "aside#keywords ol li a { \
         text-decoration: none;\
         color: rgb(101, 101, 101);\
      }", 4);
}


/* replaceWS(textStr)
      Replaces occurences of one or more consecutive white space
      characters with the "_" character.
*/
function replaceWS(textStr) {

}


/*Supplied Functions*/

function replaceWS(textStr) {
   var revText = textStr.replace(/\s+/g,"_");
   return revText;
}
