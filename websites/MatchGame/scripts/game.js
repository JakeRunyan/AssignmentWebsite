"use strict";

/*
    7-1 Challenge: JavaScript Final
    Script to add the game to index.html
*/

// Global Variables
const gameDiv = document.getElementById("game");

window.onload = function() {
    document.getElementById("startButton").addEventListener("click", start);
}



/**
 * start()
 * This starts the game
 */
function start() {
    // Get the number of symbols
    var symbolNum = document.getElementById("numSymbols").value;
    if (symbolNum > 8)
        symbolNum = 8;

    // Set up the game
    document.getElementById("startForm").style.display = "none";
    GenerateGameBoard(symbolNum);
    addStyles();
}

/**
 * GenerateGameBoard()
 * This generates the game board
 * @param {int} symbolNum
 */
function GenerateGameBoard(symbolNum) {
    // Array containing all the symbols
    const symbols = ["!", "@", "#", "$", "%", "^", "&", "*",];
    const cardNum = Math.abs(symbolNum * 2);
    const table = document.createElement("table");

    // If the cols and rows can equal the same then create a square. If not then just make 4 cols
    if (Number.isInteger(Math.sqrt(cardNum)))
        var cols = Math.sqrt(cardNum);
    else
        var cols = 4;

    // Generate randomly all the symbols
    var row = document.createElement("tr");
    for (var i = 0; i < cardNum; i++) {
        const card = document.createElement("td");
        card.classList.add("card");
        card.innerHTML = symbols[i % symbolNum];
        
        if (i % cols == 0) {
            row = document.createElement("tr");
            row.appendChild(card);
        }
        else
            row.appendChild(card);

        table.appendChild(row);
    }

    // Add the click event to the table
    table.addEventListener("click", function(event) {
        if (event.target.classList.contains("card")) {
            event.target.style.backgroundColor = "black";
        }
    });

    // Add the table to the game div
    gameDiv.appendChild(table);
}

function addStyles() {

    // Appended embedded <style> in out <head>
    var tableStyles = document.createElement("style");
    document.head.appendChild(tableStyles);

    // Add the style rules for the table
    document.styleSheets[document.styleSheets.length - 1].insertRule(
        "div#game table { \
            margin: auto; \
            width: 70%; \
            font-size: 40px; \
            color: black; \
        }", 0);

    // Add the style rules for the td
    document.styleSheets[document.styleSheets.length - 1].insertRule(
        "div#game table td { \
            display: inline-block; \
            width: 20%; \
            margin: 5px; \
            padding: 10px; \
            border: 2px solid black; \
            font-size: 40px; \
            background-color: white; \
            color: black; \
            cursor: pointer; \
        }", 0);
}