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
   var calHTML = "<table id='calendar_table'>";
   
   calHTML += calCaption(thisDay);
   calHTML += calWeekdayRow();
   calHTML += calDays(thisDay)

   calHTML += "</table>";
   return calHTML;
}

// Create the caption for the table
function calCaption(calDate) {
   var monthName = ["January", "February", "March", "April", "May", 
   "June", "July", "August", "September", "October", "November", "December"];

   var thisMonth = calDate.getMonth();
   var thisYear = calDate.getFullYear();

   return "<caption>" + monthName[thisMonth] + " " + thisYear + "</caption>";
}

function calWeekdayRow() {
   var dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
   var rowHTML = "<tr>";

   // Loop through the array and create the tr elements
   for(var i = 0; i < dayName.length; i++) {
      rowHTML += "<th class='calendar_weekdays'>" + dayName[i] + "</th>";
   }

   rowHTML += "</tr>";
   return rowHTML;
}

function daysInMonth(calDate) {
   // Array of days in each month
   var dayCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

   // Get month and year from date
   var thisMonth = calDate.getMonth();
   var thisYear = calDate.getFullYear();

   // Change Feb days to 29 when it is leap year
   if(thisYear % 4 == 0) {
      if(thisYear % 100 != 0 || thisYear % 400 == 0)
      dayCount[1] = 29;
   }

   return dayCount[thisMonth];
}

function calDays(calDate) {
   // Figure out what day the 1st is on
   var day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
   var weekDay = day.getDay();

   // Code the beginning blank days
   var HTMLCode = "<tr>";
   for(var i = 0; i < weekDay; i++) {
      HTMLCode += "<td></td>";
   }

   // Add calendar days for each day of the month
   var totalDays = daysInMonth(calDate);

   var highlightDay = calDate.getDate();
   for(var i = 1; i <= totalDays; i++) {
      day.setDate(i);
      weekDay = day.getDay();

      if (weekDay == 0)
         HTMLCode += "<tr>";
         
      if (i == highlightDay)
         HTMLCode += "<td class='calendar_dates' id = 'calendar_today'>" + i + dayEvent[i] + "</td>";
      else
         HTMLCode += "<td class='calendar_dates'>" + i + dayEvent[i] + "</td>";

      if (weekDay == 6) 
         HTMLCode += "</tr>";
   }

   return HTMLCode;
}