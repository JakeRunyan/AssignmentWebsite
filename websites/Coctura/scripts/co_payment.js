"use strict";

/*

   Payment Form Script
   
   Author: Jake Runyan
   Date: 11/28/2023
   
   Filename: co_payment.js
   
   Function List
   =============
   
   runSubmit()
      Runs validation tests when the submit button is clicked
      
   validateCVC()
      Validates the credit card CVC number
      
   validateMonth()
      Validates that the user has selected the expiration month of the credit card
      
   validateYear()
      Validates that the user has selected the expiration year of the credit card
      
   validateNumber()
      Validates that the user has entered a valid and legitimate card number
      
   validateCredit()
      Validates that the user has selected a credit card type
      
   validateName()
      Validates that the user has specified the name on the credit card
      
   sumDigits(numStr)
      Sums the digits characters in a text string
      
   luhn(idNum)
      Returns true of idNum satisfies the Luhn Algorithm

*/

window.addEventListener("load", function() {
   var formData = location.search.slice(1);
   formData = formData.replace(/\+/g, " "); // Replacing + with a space
   formData = decodeURIComponent(formData); // Decodeing %24 to render $, decode %28 to (
   var formField = formData.split(/[&=]/g);

   // Write values out to form
   document.forms.order.elements.orderDate.value = formField[1];
   document.forms.order.elements.modelName.value = formField[5];
   document.forms.order.elements.qty.value = formField[7];
   document.forms.order.elements.initialCost.value = formField[9];
   document.forms.order.elements.protectionName.value = formField[13];
   document.forms.order.elements.protectionCost.value = formField[15];
   document.forms.order.elements.subtotal.value = formField[17];
   document.forms.order.elements.salesTax.value = formField[19];
   document.forms.order.elements.totalCost.value = formField[21];
});

