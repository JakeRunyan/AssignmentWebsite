"use strict";
/*
   Planisphere Script
   Author: Jake Runyan
   Date: 11/2/23
*/

var thisTime = new Date("February 3, 2018 3:15:28 AM");
var timeStr = thisTime.toLocaleString();

var timeDiv = document.getElementById("timeStamp");

timeDiv.innerHTML = timeStr;