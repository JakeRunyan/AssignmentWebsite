"use strict";

/*
    6-7 Challenge script file
*/

window.addEventListener("load", function() {
    document.getElementById("weight").oninput = weight;
    document.getElementById("days").onchange = totalCost;
    document.getElementById("sing").onchange = checkbox(document.getElementById("sing").value);
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
 * calcBoardCost()
 * Determines the cost by getting the value for Days of Boarding
 */
function calcBoardCost() {
    var days = document.getElementById("days").value;
    var cost = 0;
    if (days != null)
        cost = days * 19.99;
    if (cost > 0) {
        document.getElementById("boardingFee").value = formatNumber(cost, 2);
        document.getElementById("boardingCost").value = formatNumber(cost, 2);
    }
    else {
        document.getElementById("boardingFee").value = "0.00";
        document.getElementById("boardingCost").value = "0.00";
    }
}

function totalCost() {
    calcBoardCost();
    calc
    var cost = document.getElementById("totalCost").value;
    document.getElementById("totalCost").value = formatNumber(cost, 2);
}

/**
 * formatNumber()
 * decimals sets the amount of decimals to display
 */
function formatNumber(val, decimals) {
    return val.toLocaleString(undefined, {
       minimumFractionDigits: decimals,
       maximumFractionDigits: decimals
    });
 }

 /**
  * checkbox()
  * This method hides or shows the different checkbox divs
  * @param {True or false} object 
  */
 function checkbox(object) {
    document.getElementById("singTitle").value = object;
 }