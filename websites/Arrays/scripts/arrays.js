"use strict";

/*
    Author: Jake Runyan
    Date: 11/9/23
*/

// Arrays for Part 1
var family = ["Erin", "Nick", "Luke", "Deanna", "Todd", "Cory", "Blanca", "Sammy", "Lexi", "Katie"];
var relationship = ["Wife", "Brother", "Brother", "Mom", "Dad", "Step-Dad", "Step-Mom", "Half-Brother", "Half-Sister", "Mother-In-Law"];

// Creating array for part 2
var colors = [];
var nColors = [];

colors.push("red", "green", "purple", "brown", "yellow", "pink", "blue", "orange");

// Arrays for part 3
var array1 = ["Hotel", "Alpha", "Delta", "Zebra", "Tagno", "Charlie", "Bravo"];
var array2 = [8, 4, 5, 7, -2, 1, 9];

// Variables for part 4
var lastModified = document.lastModified;
var thisDate = new Date();

// Part 1 - This calls and changes the innerHTML
document.getElementById("family").innerHTML = printFamily();

// Part 2 - This calls and changes the innerHTML
document.getElementById("allColors").innerHTML = printColors();
document.getElementById("pColors").innerHTML = printP();
document.getElementById("nonBColors").innerHTML = printNonB();
document.getElementById("filterColors").innerHTML = filterN();

// Part 3 - This calls and changes the innerHTML
document.getElementById("twoArrays").innerHTML = printTwoArrays();
document.getElementById("sortedArrays").innerHTML = printSortedArrays();
document.getElementById("sortedNumberArray").innerHTML = printNumberArrays();

// Part 4 - This calls and changes the innerHTML
document.getElementById("dates").innerHTML = printFooter();

// This prints the table for family relationships
function printFamily() {
    var HTMLCode = "<Table>";

    // Add the header cells
    HTMLCode += "<tr><th>Name</th><th>Relationship</th></tr>";

    for(var i = 0; i < family.length; i++) {
        HTMLCode += "<tr><td>" + family[i] + "</td>";
        HTMLCode += "<td>" + relationship[i] + "</td></tr>";
    }

    HTMLCode += "</Table>";
    return HTMLCode;
}

// This prints the different colors
function printColors() {
    var HTMLCode = "<ul>";

    for(var i = 0; i < colors.length; i++) {
        HTMLCode += "<li>" + colors[i] + "</li>";
    }

    HTMLCode += "</ul>";
    return HTMLCode;
}

function printP() {
    var HTMLCode = "<ul>";

    for(var i = 0; i < colors.length; i++) {
        if(colors[i][0] == "p") {
            HTMLCode += "<li>" + colors[i] + "</li>";
        }
    }

    HTMLCode += "</ul>";
    return HTMLCode;
}

function printNonB() {
    var HTMLCode = "<ul>";

    for(var i = 0; i < colors.length; i++) {
        if(colors[i][0] != "b") {
            HTMLCode += "<li>" + colors[i] + "</li>";
        }
    }

    HTMLCode += "</ul>";
    return HTMLCode;
}

function filterN() {
    var HTMLCode = "<ul>";

    // Add elements to the new array
    containsN();

    // Print the new array
    for(var i = 0; i < nColors.length; i++) {
        HTMLCode += "<li>" + nColors[i] + "</li>";
    }

    HTMLCode += "</ul>";
    return HTMLCode;
}

function containsN() {
    for(var i = 0; i < colors.length; i++) {
        if(colors[i].includes("n"))
            nColors.push(colors[i]);
    }
}

function printTwoArrays() {
    var HTMLCode = "";

    // Print the first array
    HTMLCode += "<p>" + array1.join(", ") + "</p>";

    // Print the second array
    HTMLCode += "<p>" + array2.join(", ") + "</p>";

    return HTMLCode;
}

function printSortedArrays() {
    var HTMLCode = "";

    // Print the first array
    array1.sort();
    HTMLCode += "<p>" + array1.join(", ") + "</p>";

    // Print the second array
    array2.sort()
    HTMLCode += "<p>" + array2.join(", ") + "</p>";

    return HTMLCode;
}

function printNumberArrays() {
    var HTMLCode = "";

    // Print the number array
    array2.sort()
    HTMLCode += "<p>" + array2.join(", ") + "</p>";

    return HTMLCode;
}

function printFooter() {
    var HTMLCode = "<h4>Last Modified: " + lastModified + "</h4>";
    HTMLCode += "<h4>Current Date: " + thisDate + "</h4>";

    return HTMLCode;
}