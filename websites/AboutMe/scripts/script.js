"use strict";

/* 
    Author: Jake Runyan
    Date: 11/16
*/

window.addEventListener("load", init);

function init() {
    // Adding the font style, my nickname and hometown
    document.body.setAttribute("style", "font-family: Arial, sans-serif");
    document.getElementById("nickname").innerHTML = "Jakey Boi";
    document.getElementById("hometown").innerHTML = "Cottonwood Heights";

    // Creating a new ol elem and getting the favorites elem
    var favElem = document.getElementById("favorites");
    var nestedList = document.createElement("ol");
    var doubleNestedList = document.createElement("ol");
    favElem.appendChild(nestedList);
    
    // Create an array that contains all of my favorite things and print them all into a list
    var favs = ["Erin (my wife)", "Coding", "Learning", "My brother", "Video games"];
    var favGames = ["Minecraft", "Call of Duty", "Fortnite", "Remnant"];

    // Print the favs list
    for (var i = 0; i < favs.length; i++) {
        // Create the new li elem each time
        var list = document.createElement("li");
        list.setAttribute("style", "color: red");
        list.innerHTML = favs[i];
        nestedList.appendChild(list);
    }

    for (var i = 0; i < favGames.length; i++) {
        // Create the new li elem each time
        var list = document.createElement("li");
        list.setAttribute("style", "color: red");
        list.innerHTML = favGames[i];
        doubleNestedList.appendChild(list);
    }
    favElem.appendChild(doubleNestedList);

    // Adding one of three different photos to an aside method
    var aside = document.getElementById("side");
    var imgElem = document.createElement("img");
    imgElem.src = "images/me" + Math.ceil(Math.random() * 3) + ".jpg";

    aside.appendChild(imgElem);
}