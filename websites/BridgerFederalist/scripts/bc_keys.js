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
window.addEventListener("load", makeKeyWords);

/* findKeyWords()
      Locate the keywords in the article indicated by the <dfn> tag
      and add those keywords in alphabetical order to a keyword box.
*/
function findKeyWords() {

}


/* makeKeyStyles()
      Create an embedded style sheet for the keyword box.
*/
function makeKeyWords() {

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
