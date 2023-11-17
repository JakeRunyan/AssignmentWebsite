"use strict";

/* 
    Author: Jake Runyan
    Date: 11/16
*/

window.addEventListener("load", init);
window.addEventListener("load", createStyles);

function init() {
    // Creating a table and adding it to the body
    var table = document.createElement("table");
    document.body.appendChild(table);

    // Creating a heading row
    var row = document.createElement("tr");
    table.appendChild(row);

    // Creating title column
    var headTitle = document.createElement("th");
    headTitle.innerHTML = "Title";
    row.appendChild(headTitle);

    // Creating author column
    var authorTitle = document.createElement("th");
    authorTitle.innerHTML = "Author";
    row.appendChild(authorTitle);

    // Creating alreadyRead column
    var readTitle = document.createElement("th");
    readTitle.innerHTML = "Read?";
    row.appendChild(readTitle);

    for (var i = 0; i < books.length; i++) {
        // Creating a new row
        var row = document.createElement("tr");
        table.appendChild(row);

        var col1 = document.createElement("th");
    }
}


function createStyles() {
    var style = document.createElement("style");
    document.head.appendChild(style);
    
    // Add the style rules to the embedded stylesheet
    document.styleSheets[document.styleSheets.length - 1].insertRule(
        "table {\
            border-collapse: collapse;\
        }", 0);
    
    document.styleSheets[document.styleSheets.length - 1].insertRule(
        "th { \
            border: 1px solid rgb(101, 101, 101);\
            padding: 3px 10px;\
            width: 33%;\
            text-align: center;\
        }", 1);
}

// This is the array containing the books
var books = [
    {title: 'The Design of EveryDay Things',
     author: 'Don Norman',
     alreadyRead: false
    },
    {title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
    }];