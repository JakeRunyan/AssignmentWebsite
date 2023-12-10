"use strict";

/*
    6-7 Challenge script file
*/

window.addEventListener("load", function() {
    document.getElementById("weight").oninput = weight;
    document.getElementById("days").oninput = calcCost;
});


/**
 * weight()
 * Determines the size of the Kennel when weight is calculated
 */
function weight() {
    var size = document.getElementById("weight").value;
    if (size > 50)
        document.getElementById("size").value = "Large";
    else if (size > 12)
        document.getElementById("size").value = "Medium";
    else if (size > 4)
        document.getElementById("size").value = "Small";
    else if (size > 0)
        document.getElementById("size").value = "Mini";
    else
        document.getElementById("size").value = "";
}

/**
 * calcCost()
 * Determines the cost by getting the value for Days of Boarding
 */
function calcCost() {
    var days = document.getElementById("days").value;
    var cost = days * 50;
    if (cost > 0)
        document.getElementById("BoardingFee").value = cost;
    else
        document.getElementById("BoardingFee").value = "0";
}