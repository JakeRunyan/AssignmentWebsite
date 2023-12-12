"use strict";

/*
    6-7 Challenge script file
*/

window.addEventListener("load", function() {
    document.getElementById("weight").oninput = weight;
    document.getElementById("days").onchange = totalCost;

    document.getElementById("singAdd").style.display = "none";
    document.getElementById("sing").onchange = checkboxS;
    document.getElementById("cuteAdd").style.display = "none";
    document.getElementById("cute").onchange = checkboxC;
    document.getElementById("trickAdd").style.display = "none";
    document.getElementById("trick").onchange = checkboxT;
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
 * totalCost()
 * This calculates the total cost.
 */
function totalCost() {
    calcBoardCost();
    var cost = "0.00";
    var board = document.getElementById("boardingCost");
    var reg = calcRegistrationCost();

    // If board doesn't contain a value
    if (board != null) {
        // If reg doesn't contain a value
        if (reg != null)
            cost = int(board.value) + int(reg.value);
        else
            cost = board.value;
    }
    // If reg doesn't contain a value
    else if (reg != null)
        cost = reg.value;
    
    document.getElementById("totalCost").value = formatNumber(cost, 2);
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
    return document.getElementById("boardingCost").value;
}

/**
 * calcRegistrationCost()
 * This calculates the total cost of registration
 */
function calcRegistrationCost() {
    var boxes = document.querySelectorAll("input[type='checkbox']:checked");
    var count = boxes.length;
    document.getElementById("registrationCost").value = formatNumber(count * 120 ,2);
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
  * checkboxS()
  * This method hides or shows the different checkbox divs
  */
 function checkboxS() {
    calcRegistrationCost();
    var checkBox = document.getElementById("sing");
    var div = document.getElementById("singAdd");

    if (checkBox.checked)
        div.style.display = "block";
    else
        div.style.display = "none";
 }

  /**
  * checkboxC()
  * This method hides or shows the different checkbox divs
  */
  function checkboxC() {
    calcRegistrationCost();
    var checkBox = document.getElementById("cute");
    var div = document.getElementById("cuteAdd");

    if (checkBox.checked)
        div.style.display = "block";
    else
        div.style.display = "none";
 }

  /**
  * checkboxT()
  * This method hides or shows the different checkbox divs
  */
  function checkboxT() {
    calcRegistrationCost();
    var checkBox = document.getElementById("trick");
    var div = document.getElementById("trickAdd");

    if (checkBox.checked)
        div.style.display = "block";
    else
        div.style.display = "none";
 }