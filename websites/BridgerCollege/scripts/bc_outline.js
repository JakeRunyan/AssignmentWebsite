"use strict";

/*

   Author: Jake Runyan
   Date:   11/14

   Filename: bc_outline.js


   Function List
   =============

   makeOutline()
      Generates the text of the table of contents
      as a nested list

   createList(source, TOCList, headings)
      Creates an outline based on the source document,
      list items are appended to TOCList,
      the items list are based on the element names
      specified in the headings array


*/
window.addEventListener("load", makeOutline);

function makeOutline() {
   // Location of the document outline
   var outline = document.getElementById("outline");

   // source of document
   var source = document.getElementById("doc");

   var mainHeading = document.createElement("h1");
   var outlineList = document.createElement("ol");
   var headingText = document.createTextNode("Outline");

   mainHeading.appendChild(headingText);
   outline.appendChild(mainHeading);
   outline.appendChild(outlineList);

   createList(source, outlineList);
}

function createList(source, outlineList) {
   // Loop through all the child nodes of the source article until no child nodes left

   var headings = ["H1", "H2", "H3", "H4", "H5", "H6"];
   //Previous level of heading
   var prevLevel = 0;
   // Running total of the number of Outlined items in the list
   var headNum = 0;

   for (var n = source.firstChild; n !== null; n = n.nextSibling) {
      var headLevel = headings.indexOf(n.nodeName);
      if (headLevel !== -1) {

         headNum++;
         if (n.hasAttribute("id") === false)
            n.setAttribute("id", "head", headNum);

         var listElem = document.createElement("li");
         listElem.innerHTML = n.firstChild.nodeValue;

         if(headLevel === prevLevel) {
            // Append the list item to the current list
            outlineList.appendChild(listElem);
         }
         else if (headLevel > prevLevel) {
            // Start a new nested list
            var nestedList = document.createElement("ol");
            nestedList.appendChild(listElem);

            // Append this nested list to the last item on the current list
            outlineList.lastChild.appendChild(nestedList);
            // Change the current list to the nested list
            outlineList = nestedList;
         }
         else {
            // Append the list item to the higher list
            // Calculate the differnece between current and previous level
            var levelUp = prevLevel - headLevel;
            for (var i = 1; i <= levelUp; i++) {
               outlineList = outlineList.parentNode.parentNode;
            }
            outlineList.appendChild(listElem);
         }
         prevLevel = headLevel;
      }
   }
}