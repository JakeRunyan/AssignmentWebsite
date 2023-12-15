"use strict";

/*
    7-1 Challenge: JavaScript Final
    Script to add the game to index.html
*/

// Global Variables
const gameDiv = document.getElementById("game");
var corrctCards = 0; // This is a variable to keep track of the number of correct cards
let prev = null; // This line keeps track of the previous card clicked
let prev2 = null; // This line keeps track of the second previous card clicked
var count = 0; // This is a variable to keep track of the number of clicks;

window.onload = function() {
    document.getElementById("startButton").addEventListener("click", start);
}



/**
 * start()
 * This starts the game
 */
function start() {
    // Get the number of symbols
    var symbolNum = Math.abs(document.getElementById("numSymbols").value);
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
    const cardNum = symbolNum * 2;
    const table = document.createElement("table");
    var symbolArray = [];

    // If the cols and rows can equal the same then create a square. If not then just make 4 cols
    if (Number.isInteger(Math.sqrt(cardNum)))
        var cols = Math.sqrt(cardNum);
    else
        var cols = 4;

    // Generate the cards in a table
    var row = document.createElement("tr");
    for (var i = 0; i < cardNum; i++) {
        var card = document.createElement("td");
        card.classList.add("card");
        // Create an array that has all the symbols
        symbolArray.push(symbols[i % symbolNum]);

        if (i % cols == 0)
            row = document.createElement("tr");
        card.setAttribute("id", i); // This line assigns each card a id number which later will match the indexes of the symbolsArray
        card.classList.add("unclicked");
        row.appendChild(card);

        table.appendChild(row);
    }

    // Scramble the symbols
    symbolArray.sort(function() { return 0.5 - Math.random() });
    // Add the click event to the table
    table.addEventListener("click", async function(event) {
        if (event.target.classList.contains("card")) {
            if(event.target.classList.contains("unclicked") && !event.target.classList.contains("correct") && prev != event.target) {
                
                event.target.innerHTML = symbolArray[event.target.getAttribute("id")];  // This line assigns each card to a symbol
                event.target.classList.remove("unclicked");
                event.target.classList.add("clicked");
                count++;

                // If the there are two cards selected and if they are not the same then unselect them
                if (count == 2 && symbolArray[prev.getAttribute("id")] != symbolArray[event.target.getAttribute("id")] && !event.target.classList.contains("correct")) {

                    await delay(250);
                    prev.innerHTML = "";
                    prev.classList.remove("clicked");
                    prev.classList.add("unclicked");
                    event.target.innerHTML = "";
                    event.target.classList.remove("clicked");
                    event.target.classList.add("unclicked");
                    
                    count = 0;
                }

                // If there are two cards selected and they aren't the same card then
                if(count == 2 && prev != event.target) {
                    // If the cards are the same then add them to the correct cards
                    if(symbolArray[prev.getAttribute("id")] == symbolArray[event.target.getAttribute("id")] && !event.target.classList.contains("correct")) {
                        // If the cards are unclicked then continue
                        if(event.target.classList.contains("clicked") && prev.classList.contains("clicked")) {
                            event.target.classList.add("correct");
                            prev.classList.add("correct");
                            correct(cardNum, event);
                            count = 0;
                        }
                        else
                        count = 0;
                    }
                }
                
            }
            // This is for debugging
            //else if (!event.target.classList.contains("correct")) {
            //    event.target.innerHTML = "";
            //    event.target.classList.remove("clicked");
            //    event.target.classList.add("unclicked");
            //}
            prev2 = prev; // This line keeps track of the second previous card clicked
            prev = event.target; // This line keeps track of the previous card clicked
            // If prev2 has any value get rid of it unless this value is correct
            if(prev2 != null && !prev2.classList.contains("correct")) {
                prev2.innerHTML = "";
                prev2.classList.remove("clicked");
                prev2.classList.add("unclicked");
            }
        }
    });

    // Add the table to the game div
    gameDiv.appendChild(table);

    var resetButton = document.createElement("button");
    resetButton.innerHTML = "Reset";
    resetButton.addEventListener("click", function() {
        location.reload();
    });
    gameDiv.insertAdjacentElement("afterend", resetButton);
}

function correct(cardNum, event) {
    corrctCards += 2;
    if (corrctCards == cardNum)
        alert("You won!");
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
            height: 50px; \
            margin: 5px; \
            padding: 10px; \
            border: 2px solid black; \
            font-size: 40px; \
            cursor: pointer; \
        }", 0);

    document.styleSheets[document.styleSheets.length - 1].insertRule(
        ".correct { \
            background-color: #b8a44f; \
        }", 0);

    document.styleSheets[document.styleSheets.length - 1].insertRule(
        ".clicked { \
            background-color: white; \
        }", 0);

    document.styleSheets[document.styleSheets.length - 1].insertRule(
        ".unclicked { \
            background-color: #1a4487; \
        }", 0);
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }