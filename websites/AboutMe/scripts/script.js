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

    // Creating a new li elem and getting the favorites elem
    var list = document.createElement("li");
    var favElem = document.getElementById("favorites");
    favElem.appendChild(document.createElement("ol"));
    
    // Create an array that contains all of my favorite things and print them all into a list
    var favs = ["Erin (my wife)", "Coding", "Learning", "My brother", "Video games"];
    var favGames = ["Minecraft", "Call of Duty", "Fortnite", "Remnant"];

    for (var i = 0; i < favs.length; i++) {
        list.innerHTML = favs[i];
        favElem.appendChild(list);
    }
}