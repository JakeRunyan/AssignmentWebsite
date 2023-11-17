"use strict";

/* 
    Author: Jake Runyan
    Date: 11/16
*/

window.addEventListener("load", init);

function init() {
    // Adding the font style and my nickname
    document.body.setAttribute("font-family", "Arial, sans-serif");
    document.getElementById("nickname").innerHTML = "Jakey Boi";

    // Creating a new ol elem and getting the favorites elem
    var favElem = document.getElementById("favorites");
    var nestedList = document.createElement("ol");
    favElem.appendChild(nestedList);
    
    // Create an array that contains all of my favorite things and print them all into a list
    var favs = ["Erin (my wife)", "Coding", "Learning", "My brother", "Video games"];
    var favGames = ["Minecraft", "Call of Duty", "Fortnite", "Remnant"];

    for (var i = 0; i < favs.length; i++) {
        // Create the new li elem each time
        var list = document.createElement("li");
        list.innerHTML = favs[i];
        nestedList.appendChild(list);
    }
}