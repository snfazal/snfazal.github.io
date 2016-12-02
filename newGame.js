






















//below the bank functions work!
var bank = {
     bet: function() { //method creates bank to reflect bets
       var betAmt = document.getElementById('betAmt').value; // betAmt grabs value of input box to make bet
       var newBank = document.getElementById('money').innerHTML; //grabs newbank
       document.getElementById('money').innerHTML = newBank - betAmt;
     },

     pushBet: function() { //method where bank reflects a push through bet button after player makes a bet
       var newerBet = parseInt(document.getElementById('money').value); //defining variable to innerHTML
       var newestBank = parseInt(document.getElementById('money').innerHTML);//defining variable to innerHTML
         document.getElementById('money').innerHTML = newerBet + newestBank; //getting innterHTML to reflect newerBet+newestBank as outcome
     },

     toWin: function() { //to win bank must
       var newBet = parseInt(document.getElementById('money').value); //coverts strings back to numbers
       var newerBank = parseInt(document.getElementById('money').innerHTML); //grabs newerbanks innerHTML
       document.getElementById('money').innerHTML = newerBank + newBet * 2; ///bank must add or multiply itself
     },


     clearInputBox: function() { //method clears the input box where bets are made
       var bankBox = document.getElementById('money'); //clears money for next game/hand to be played
       bankBox.value = ''; //input box in bank
     }

   }; //closes bank object
