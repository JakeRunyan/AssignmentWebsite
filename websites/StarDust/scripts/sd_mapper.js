"use strict";
/*
   Planisphere Script
   Author: Jake Runyan
   Date: 11/2/23
*/

// Create a new date and store it in a string
var thisTime = new Date("February 3, 2018 3:15:28 AM");
var timeStr = thisTime.toLocaleString();

// This changes a string in the actual HTML
document.getElementById("timeStamp").innerHTML = timeStr;

// This extracts the hours and month and calculates map number
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();
var mapNum = (2*thisMonth + thisHour) % 24;

var imgStr = "<img src='sd_skyMap.png' />";