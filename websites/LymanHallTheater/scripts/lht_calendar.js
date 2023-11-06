"use strict";

/*

   Author: 
   Date:  

   Filename:   lht_calendar.js  

   Function List:
   createCalendar(calDate)
      Creates the calendar table for the month specified in the
      calDate parameter. The current date is highlighted in 
      the table.

   calCaption(calDate)
      Writes the caption of the calendar table

   calWeekdayRow()
      Writes the title weekday rows in the calendar table

   daysInMonth(calDate)
      Returns the number of days in the month from calDate

   calDays(calDate)
      Writes the daily rows in the calendar table, highlighting calDate
	
*/

// Create the current date
var thisDay = new Date("August 24, 2018");

// Add the table inside the div
document.getElementById("calendar").innerHTML = createCalendar(thisDay);

// Create a function that generates the calendar table
function createCalendar(calDate) {
   var calHTML = "<table id='calendarTable'>";


   calHTML += "</table>";
   return calHTML;
}

// Create the caption for the table
function calCaption(calDate) {
   
}