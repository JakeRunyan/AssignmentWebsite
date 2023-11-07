"use strict";

/*
   Author: Jake Runyan
   Date: 11/7/23
*/

// This is the day that we are testing with
var thisDay = new Date("August 30, 2022");

// This calls and changes the innerHTML
document.getElementById("eventList").innerHTML = createTable(thisDay);

// This creates the innerHTML code
function createTable(date) {
   var tableHTML = "<table id='eventTable'><caption>Upcoming Events</caption>";
   tableHTML += "<tr><th>Date</th><th>Event</th><th>Price</th></tr>";

   tableHTML += printEvent();

   tableHTML += "</table>";
   return tableHTML;
}

// This function with a for loop prints all the individual events
function printEvent() {
   // Variable to tell the calendar to stop on this date
   var endDate = new Date(thisDay.getTime() + 14*24*60*60*1000);
   var HTMLCode = "";

   for(var i = 0; i < eventDates.length; i++) {
      var eventDate = new Date(eventDates[i]);
      var eventDay = eventDate.toDateString();
      var eventTime = eventDate.toLocaleTimeString();
      
      if(thisDay <= eventDate && eventDate <= endDate) {
         HTMLCode += "<tr><td>" + eventDay + " @ " + eventTime + "</td>";
         HTMLCode += "<td>" + eventDescriptions[i] + "</td>";
         HTMLCode += "<td>" + eventPrices[i] + "</td></tr>";
      }
   }
   return HTMLCode;
}