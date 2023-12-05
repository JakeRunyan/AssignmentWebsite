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
   document.getElementById("subButton").onclick = runSubmit;
   document.getElementById("cardName").oninput = validateName;
   document.getElementById("cardNumber").oninput = validateNumber;
   document.getElementById("expMonth").onchange = validateMonth;
   document.getElementById("expYear").onchange = validateYear;
   document.getElementById("cvc").oninput = validateCVC;

   // Retrieve the fild/value pairs from URL
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

function validateName() {
   var cardName = document.getElementById("cardName");
   if (cardName.validity.valueMissing) {
      cardName.setCustomValidity("Enter your name as it appears on the card");
   }
   else {
      cardName.setCustomValidity("");
   }
}

function runSubmit() {
   validateName();
   validateCredit();
   validateNumber();
   validateMonth();
   validateYear();
   validateCVC();
}

function validateCredit() {
   var creditCard = document.forms.payment.elements.credit[0];
   if (creditCard.validity.valueMissing) {
      creditCard.setCustomValidity("Select your credit card");
   }
   else {
      creditCard.setCustomValidity("");
   }
}

function validateNumber() {
   var cardNumber = document.getElementById("cardNumber");
   if (cardNumber.validity.valueMissing) {
      cardNumber.setCustomValidity("Enter your card number");
   }
   else if (cardNumber.validity.patternMismatch) {
      cardNumber.setCustomValidity("Enter a valid card number");
   }
   else if (luhn(cardNumber.value) === false) {
      cardNumber.setCustomValidity("Enter a legitimate card number");
   }
   else {
      cardNumber.setCustomValidity("");
   }
}

function validateMonth() {
   var month = document.getElementById("expMonth");
   if (month.selectedIndex === 0) {
      month.setCustomValidity("Enter your expiration month");
   }
   else {
      month.setCustomValidity("");
   }
}

function validateYear() {
   var year = document.getElementById("expYear");
   if (year.selectedIndex === 0) {
      year.setCustomValidity("Enter your expiration year");
   }
   else {
      year.setCustomValidity("");
   }
}

function validateCVC() {
   var cvc = document.getElementById("cvc");
   var creditCard = document.querySelector('input[name="credit"]:checked').value;

   if (cvc.validity.valueMissing) {
      cvc.setCustomValidity("Enter your CVC number");
   }
   else if ((creditCard === "amex" && (/^\d{4}$/.test(cvc.value) === false))) {
      cvc.setCustomValidity("Enter a 4 digit CVC number");
   }
   else if ((creditCard !== "amex" && (/^\d{3}$/.test(cvc.value) === false))) {
      cvc.setCustomValidity("Enter a 3 digit CVC number");
   }
   else {
      cvc.setCustomValidity("");
   }
}

function sumDigits(numStr) {
   var digitTotal = 0;
   for (var i = 0; i < numStr.length; i++) {
      digitTotal += parseInt(numStr.charAt(i));
   }
   return digitTotal;
}

function luhn(idNum) {
   var string1 = "";
   var string2 = "";

   // Retrieve the odd-numbered digits
   for (var i = idNum.length - 1; i >= 0; i -= 2) {
      string1 += idNum.charAt(i);
   }

   // Retrieve the even-numbered digits and double them
   for (var i = idNum.length - 2; i >= 0; i -= 2) {
      string2 += 2 * idNum.charAt(i);
   }

   // Return whether the sum of the digits is divisible by 10
   return sumDigits(string1 + string2) % 10 === 0;
}