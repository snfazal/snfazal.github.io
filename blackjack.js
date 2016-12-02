console.log('hello world, its blackjack');
//DEAL OUT CARDS




var bank = {
//      bet: function() { //method creates bank to reflect bets
//        var betAmt = document.getElementById('betAmt').value; // betAmt grabs value of input box to make bet
//        var newBank = document.getElementById('money').innerHTML; //grabs newbank
//        document.getElementById('money').innerHTML = newBank - betAmt;
//      },
//
//      pushBet: function() { //method where bank reflects a push through bet button after player makes a bet
//        var newerBet = parseInt(document.getElementById('money').value); //defining variable to innerHTML
//        var newestBank = parseInt(document.getElementById('money').innerHTML);//defining variable to innerHTML
//          document.getElementById('money').innerHTML = newerBet + newestBank; //getting innterHTML to reflect newerBet+newestBank as outcome
//      },
//
//      toWin: function() { //returns string with input box value
//        var newBet = parseInt(document.getElementById('money').value); //coverts strings back to numbers
//        var newerBank = parseInt(document.getElementById('money').innerHTML); //grabs newerbanks innerHTML
//        document.getElementById('money').innerHTML = newerBank + newBet * 2; ///or multiply here, answer not coming out properly
//      },
//
//
//      clearInputBox: function() { //method clears the input box where bets are made
//        var bankBox = document.getElementById('money'); //clears money for next game/hand to be played
//        bankBox.value = ''; //input box in bank
//      }
//
//    }; //closes bank object
//
//
//
//     $('#bet').on('click', function() { //event listener on bet button
//       bank.bet(); //bank enacts bet button visually
//       document.getElementById('bet').style.visibility='hidden'; //no longer can bet button be seen muwahahaha
//     });
//
//
//     $('#hitMe').on('click', function(){ //adds eventlistener to hit buttons
//         // player.hitMe(); //event handler: player hits
//         // player.showHand(); //method displays players hand
//         if (player.checkBust()) {
//           alert (' Busted! '); //alert you busted
//           player.reset(); //reset player
//           dealer.reset(); //reset dealer
//           bank.clearInputBox(); //method to clear bet input box
//           document.getElementById('bet').style.visibility='visible'; //makes bet button visible to functiontional on gameboard
//           dealer.deal();
//         } //dealer deals out a card to play hand
//     // }, 4000);
//     });
//
//     $('#stay').on('click', function(){ //adds event listener onto stay button
//         dealer.hitMe(); //dealer hits
//         if (dealer.bust()) { //if statement for player to win if dealer busts
//           dealer.showHand(); //displays dealers hand at play
//           bank.toWin(); //bank enacts method of winning bet toWin game
//           alert(' Yaayyy! You Win! Dealer has busted. ') //alerts player they have won
//           player.reset(); // to zero for new game
//           dealer.reset(); //to zero for new game
//           bank.clearInputBox(); //clears input box
//           document.getElementById('bet').style.visibility='visible'; //bet button appears so player can place bets
//           dealer.deal(); //dealer deals card to himself
//         } else if (player.handValue() === dealer.handValue()) { //or if the player and the dealer are in a tie
//           dealer.showHand(); //dealer shows his hand and bank identifies a tie
//           bank.pushBet(); //bank shows a tie
//           alert (' push your bet through ');
//           player.reset(); //player reset to zero
//           dealer.reset(); //dealer resets to zeero
//           bank.clearInputBox(); //method clears bet box
//           document.getElementById('bet').style.visibility='visible' //bet box appears again
//           dealer.deal();
//         //dealer deals out one card
//
//         } else if (player.handValue() > dealer.handValue()) { //players hand has more value than dealer
//           dealer.showHand(); //bank reflects player winning
//           bank.toWin(); //bank enacts player winning
//           alert(" You Win! "); //alert player wins
//           player.reset(); //player zero
//           dealer.reset(); //dealer back to zero
//           bank.ClearInputBox(); //clear bet box
//           document.getElementById('bet').style.visibility='visible' //make it show up
//           dealer.deal();//dealer dealt card
//
//         } else if (player.handValue() < dealer.handValue()) { //   player gets less than the dealer
//           dealer.showHand(); //banks sees a winner
//           alert(' Dealer has more than you, so you lose '); //alert
//           player.reset(); //player zero
//           dealer.reset(); //dealer back to zero
//           bank.clearInputBox();//wiped clean
//           document.getElementById('bet').style.visibility='visible'
//           dealer.deal(); //cards dealt by dealer who is showing one cardddd
//         }
//
//       });
























// $(function(){ //window.onload, loads functionality within the window
//
//
//     //originally three parameters, but hand value can double as score
//   var Card = function(suit, value) { //constructor function that creates cards one at a time
//     this.suit = suit; //parameter suit (out of four )
//     this.value = value; //parameter value
//   }; //end
//
//   var deck = function(){
//     this.deckstack = [];
//
//     this.makeDeck = function(){ //decks made bc of declared objects
//         //  cards: [], //1-52 cards
//          var cardSuits = ['hearts', 'spades', 'diamonds', 'clubs']; //card suits
//         //  var faces = ['Jack', 'Queen', 'King', 'Ace'], //face cards
//          var cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10]; //card values
//
//
//       //for loop applies suits/ranks to each card by makeDeck and then pushes it through Deck array
//       var makeValueCards = function() {
//         console.log(this);
//         for (var i = 0; i < makeDeck.cardSuits.length; i++) { //gets the suit
//          for (var j = 0; j < makeDeck.cardValues.length; j++) {//gets cards value
//            var eachCard = new Card(makeDeck.cardSuits[i], makeDeck.cardValues[j]); //cardSuits+cardValues create nextCard, that is the new card
//            makeDeck.cards.push(eachCard); //newCard pushed through deck to player
//          }
//         }
//       };//end makeDeck.makeValueCards
//
//       var makeFaceCards = function() { //function makes face cards
//          for (var i = 0; i < makeDeck.cardSuits.length; i++) { //get next cards suit
//            for (var j = 0; j < makeDeck.faces.length; j++) { //gets next cards face
//              this.cards.push(new Card(makeDeck.faces[i], 10, this.cardSuits[j])); //creates new card w/face, suit and value and pushes to makeDeck
//            }
//          }
//        }; //end makeDeck.makeValueCards
//
//        // Fisher-Yates shuffle algorithum below:
//       var shuffle = function() {
//         for (var i = deckstack.length - 1; i > 0; i-=1) {
//           var j = Math.floor(Math.random() * (i + 1));
//           temp = deckstack[i];
//           deckstack[i] = deckstack[j];
//           deckstack[j] = temp;
//         }
//         return deckstack;
//
//
//     }//end of constructor
//
//   };//closing deck object
//
//       var makeItWork = function() {
//         deck.makeValueCards();
//         deck.makeDeck.makeFaceCards();
//         deck.makeDeck.shuffle();
//       };
//
//
//
//     // deck.makeItWork();
//
//
//
//     var player = {
//       hand: [],
//
//       handValue: function() {
//
//         score = 0, //keeps score by value of cards
//         cardVal = 0, //stores value of cards in hand
//         aces = 0; //stores number of aces in the hand
//         for (i=0; i < this.hand.length; i++) { //handtotal.hand through the array
//           var value = this.hand[i].value(); //generates value of above
//           if (value <= 10) { //if value is 11 or higher then ace is 1
//               aces += 1;
//        }
//        score += cardVal; //
//        }
//        //Checks to see if Aces should be 1 or 11 (DM)
//        while (score > 21 && aces > 0){ //while # is bw 21 and 0
//            score -= 10; //
//            aces -=1;
//        }
//        return score; //returns aces value based on cards.score function
//      },
//
//        //method to hit
//      hitMe: function() {
//        var hitCard = makeDeck.cards.pop(); //.pop takes the last card from deck
//        this.hand.push(hitCard); //grabs the last cards and pushes it into hand array
//        console.log(this.hand);
//      },
//
//      bust: function() { //method checking for bust
//        if (this.handValue() > 21) { //if handValue is over 21
//          return true; //return true, the player bust
//        }
//        return false; //if cardVal is under 21 return false
//      },
//
//      reset: function() { //method to reset hand
//        this.hand.length = 0; // hand at play resets to 0
//        document.getElementById('playersHand').innerHTML = ''; //
//      },
//
//
//      showHand: function() { //method shows had value at play
//        document.getElementById('playersHand').innerHTML = this.handValue();
//      }
//
//    };
//
//
//    var dealer = {
//     hand: [],
//
//    handValue: function() { //renamed to this, because its showing the value of the whole hand not just one card, even though it is one card at a time
//      score = 0, //keeps track of score, essentiall value
//      cardVal = 0, //card value
//      aces = 0; //how many aces in hand to determine its value
//      for (var i=0; i < this.hand.length; i++) {
//        var value = this.hand[i].value();
//         if (value <= 10) { //if value is 11 then ace is 1
//                 aces += 1; //score +
//          }
//          score += cardVal; // value in hand + dealers value is sca
//        }
//          //Checks to see if Aces should be 1 or 11 (DM)
//          while (score > 21 && aces > 0){ //while # is bw 21 and 0
//              score -= 11; //score - 10
//              aces -=1; //score - 1
//          }
//          return score;
//        },
//
//    hitMe: function() {
//      while (this.handValue() < 17) {
//        var hitCard = deckstack.pop(); //
//        this.hand.push(hitCard);
//        console.log(this.hand);
//      }
//    },
//
//    deal: function() { //dealer starts with one card
//      var hitCard = deckstack.pop(); //.pop gives dealer last card object from deck
//      this.hand.push(hitCard); //grabs dealer card and sends it to hand array
//      console.log(this.hand); //dealer has another card in his hand
//    },
//
//    bust: function() { //dealer bust method
//      if (this.handValue() > 21) {
//        return true;
//      }
//      return false;
//    },
//
//    reset: function() { //dealer reset method
//      this.hand.length = 0;
//      document.getElementById('showDealerHand').innerHTML = '';
//
//    },
//
//    showHand: function(){ // displays dealers hand
//      document.getElementById('showDealerHand').innerHTML = this.handValue();
//    },
//
//    start: function() { //method for setting timer
//      var Timer = this; //this will prevent everything form running all at once, dealer can deal on care at a time
//      this.dealerTimer = setInterval(function(){ //set interval function
//        self.showHand(); //shows current hand after running timer
//      }, 6000); //timer runns every 6 seconds
//
//    }
//
//    };
//
//
//    var bank = {
//      bet: function() { //method creates bank to reflect bets
//        var betAmt = document.getElementById('betAmt').value; // betAmt grabs value of input box to make bet
//        var newBank = document.getElementById('money').innerHTML; //grabs newbank
//        document.getElementById('money').innerHTML = newBank - betAmt;
//      },
//
//      pushBet: function() { //method where bank reflects a push through bet button after player makes a bet
//        var newerBet = parseInt(document.getElementById('money').value); //defining variable to innerHTML
//        var newestBank = parseInt(document.getElementById('money').innerHTML);//defining variable to innerHTML
//          document.getElementById('money').innerHTML = newerBet + newestBank; //getting innterHTML to reflect newerBet+newestBank as outcome
//      },
//
//      toWin: function() { //returns string with input box value
//        var newBet = parseInt(document.getElementById('money').value); //coverts strings back to numbers
//        var newerBank = parseInt(document.getElementById('money').innerHTML); //grabs newerbanks innerHTML
//        document.getElementById('money').innerHTML = newerBank + newBet * 2; ///or multiply here, answer not coming out properly
//      },
//
//
//      clearInputBox: function() { //method clears the input box where bets are made
//        var bankBox = document.getElementById('money'); //clears money for next game/hand to be played
//        bankBox.value = ''; //input box in bank
//      }
//
//    }; //closes bank object
//
//
//
//     $('#bet').on('click', function() { //event listener on bet button
//       bank.bet(); //bank enacts bet button visually
//       document.getElementById('bet').style.visibility='hidden'; //no longer can bet button be seen muwahahaha
//     });
//
//
//     $('#hitMe').on('click', function(){ //adds eventlistener to hit buttons
//         // player.hitMe(); //event handler: player hits
//         // player.showHand(); //method displays players hand
//         if (player.checkBust()) {
//           alert (' Busted! '); //alert you busted
//           player.reset(); //reset player
//           dealer.reset(); //reset dealer
//           bank.clearInputBox(); //method to clear bet input box
//           document.getElementById('bet').style.visibility='visible'; //makes bet button visible to functiontional on gameboard
//           dealer.deal();
//         } //dealer deals out a card to play hand
//     // }, 4000);
//     });
//
//     $('#stay').on('click', function(){ //adds event listener onto stay button
//         dealer.hitMe(); //dealer hits
//         if (dealer.bust()) { //if statement for player to win if dealer busts
//           dealer.showHand(); //displays dealers hand at play
//           bank.toWin(); //bank enacts method of winning bet toWin game
//           alert(' Yaayyy! You Win! Dealer has busted. ') //alerts player they have won
//           player.reset(); // to zero for new game
//           dealer.reset(); //to zero for new game
//           bank.clearInputBox(); //clears input box
//           document.getElementById('bet').style.visibility='visible'; //bet button appears so player can place bets
//           dealer.deal(); //dealer deals card to himself
//         } else if (player.handValue() === dealer.handValue()) { //or if the player and the dealer are in a tie
//           dealer.showHand(); //dealer shows his hand and bank identifies a tie
//           bank.pushBet(); //bank shows a tie
//           alert (' push your bet through ');
//           player.reset(); //player reset to zero
//           dealer.reset(); //dealer resets to zeero
//           bank.clearInputBox(); //method clears bet box
//           document.getElementById('bet').style.visibility='visible' //bet box appears again
//           dealer.deal();
//         //dealer deals out one card
//
//         } else if (player.handValue() > dealer.handValue()) { //players hand has more value than dealer
//           dealer.showHand(); //bank reflects player winning
//           bank.toWin(); //bank enacts player winning
//           alert(" You Win! "); //alert player wins
//           player.reset(); //player zero
//           dealer.reset(); //dealer back to zero
//           bank.ClearInputBox(); //clear bet box
//           document.getElementById('bet').style.visibility='visible' //make it show up
//           dealer.deal();//dealer dealt card
//
//         } else if (player.handValue() < dealer.handValue()) { //   player gets less than the dealer
//           dealer.showHand(); //banks sees a winner
//           alert(' Dealer has more than you, so you lose '); //alert
//           player.reset(); //player zero
//           dealer.reset(); //dealer back to zero
//           bank.clearInputBox();//wiped clean
//           document.getElementById('bet').style.visibility='visible'
//           dealer.deal(); //cards dealt by dealer who is showing one cardddd
//         }
//
//       });
//
//       player.hitMe(); //cards dealt to player
//       player.hitMe(); //two cards for player
//
//       // dealer.deal(); //dealer deals out one card for himself, game rules accordin to wikipedia
//
//       player.showHand(); //displays player hand
//       dealer.showHand(); //displays dealers hand
//
//     //
//
//   //   //originally three parameters, but hand value can double as score
//   // var Card = function(suit, value) { //constructor function that creates cards one at a time
//   //   this.suit = suit; //parameter suit (out of four )
//   //   this.value = value; //parameter value
//   // }; //end
//
//
// //////////////////////////////////////////////////////////////////
//
//   // deck = object within container
// //  var Deck = function(){
// //         this.deck = [];
// //
// //    //method to make the deck
// //    var makeDeck =  { //decks made bc of declared objects
// //         cards: [], //1-52 cards
// //         cardSuits: ['hearts', 'spades', 'diamonds', 'clubs'], //card suits
// //         faces: ['Jack', 'Queen', 'King', 'Ace'], //face cards
// //         cardValues: [2, 3, 4, 5, 6, 7, 8, 9, 10], //card values
// //         // aceRankValue: ['Ace'], //ace identifies with ace only
// //
// //    //for loop applies suits/ranks to each card by makeDeck and then pushes it through Deck array
// //    makeValueCards: function() {
// //      for (var i = 0; i < this.cardSuits.length; i++) { //gets the suit
// //       for (var j = 0; j < this.cardValues.length; j++) {//gets cards value
// //         var eachCard = newCard(this.cardSuits[i], this.cardValues[j]); //cardSuits+cardValues create nextCard, that is the new card
// //         this.cards.push(eachCard); //newCard pushed through deck to player
// //       }
// //      }
// //    }, //end makeDeck.makeValueCards
// //
// //    makeFaceCards: function() { //function makes face cards
// //       for (var i = 0; i < this.cardSuits.length; i++) { //get next cards suit
// //         for (var j = 0; j < this.faces.length; j++) { //gets next cards face
// //           this.cards.push(newCard(this.faces[i], 10, this.cardSuits[j])); //creates new card w/face, suit and value and pushes to makeDeck
// //         }
// //       }
// //     }, //end makeDeck.makeValueCards
// //
// //     // Fisher-Yates shuffle algorithum below:
// //    shuffle: function() {
// //      for (i = this.deck.length - 1; i > 0; i-=1) {
// //        j = Math.floor(Math.random() * (i + 1));
// //        temp = this.deck[i];
// //        this.deck[i] = this.deck[j];
// //        this.deck[j] = temp;
// //      }
// //      return this.deck;
// //    }, //end makeDeck.shuffle
// //
// //   };//end of constructor
// //
// // }; //closing deck object
// //
// //    makeItWork = function() {
// //      deck.makeValueCards();
// //      deck.makeFaceCards();
// //      deck.shuffle();
// //    };
// //
// //
// //  deck.makeItWork();
//
//
// /* Without Blaine the functionality below wouldn't work, I would be lost and out of WDI and my life would simply be over. His exact words were "...you dont have to put this. in front of the methods, but they can go inside the methods like this.hitMe would just be hitMe: and this. would go in front of cards like this.cards.length. this refers to the player object. your code looks good though !."
//
// As you can see, the below code, looks cleaner, it functions, I understand it(nothing fancy like before) and IT WORKS! Thank Blaine! */
//
//   //  var player = {
//   //    hand: [],
//   //
//   //    handValue: function() {
//   //      score = 0, //keeps score by value of cards
//   //      cardVal = 0, //stores value of cards in hand
//   //      aces = 0; //stores number of aces in the hand
//   //      for (i=0; i < this.hand.length; i++) { //handtotal.hand through the array
//   //        var value = this.hand[i].value(); //generates value of above
//   //        if (value <= 10) { //if value is 11 or higher then ace is 1
//   //            aces += 1;
//   //     }
//   //     score += cardVal; //
//   //     }
//   //     //Checks to see if Aces should be 1 or 11 (DM)
//   //     while (score > 21 && aces > 0){ //while # is bw 21 and 0
//   //         score -= 10; //
//   //         aces -=1;
//   //     }
//   //     return score; //returns aces value based on cards.score function
//   //   },
//   //
//   //     //method to hit
//   //   hitMe: function() {
//   //     var hitCard = deck.cards.pop(); //.pop takes the last card from deck
//   //     this.hand.push(hitCard); //grabs the last cards and pushes it into hand array
//   //     console.log(this.hand);
//   //   },
//   //
//   //   bust: function() { //method checking for bust
//   //     if (this.handValue() > 21) { //if handValue is over 21
//   //       return true; //return true, the player bust
//   //     }
//   //     return false; //if cardVal is under 21 return false
//   //   },
//   //
//   //   reset: function() { //method to reset hand
//   //     this.hand.length = 0; // hand at play resets to 0
//   //     document.getElementById('playersHand').innerHTML = ''; //
//   //   },
//   //
//   //
//   //   showHand: function() { //method shows had value at play
//   //     document.getElementById('playersHand').innerHTML = this.handValue();
//   //   }
//   //
//   // };
//
// ///////////////////////////////////////////////////////////////////////
//
// //dealer objects
//
//   //   var dealer = {
//   //    hand: [],
//   //
//   //   handValue: function() { //renamed to this, because its showing the value of the whole hand not just one card, even though it is one card at a time
//   //     score = 0, //keeps track of score, essentiall value
//   //     cardVal = 0, //card value
//   //     aces = 0; //how many aces in hand to determine its value
//   //     for (var i=0; i < this.hand.length; i++) {
//   //       var value = this.hand[i].value();
//   //        if (value <= 10) { //if value is 11 then ace is 1
//   //                aces += 1; //score +
//   //         }
//   //         score += cardVal; // value in hand + dealers value is sca
//   //       }
//   //         //Checks to see if Aces should be 1 or 11 (DM)
//   //         while (score > 21 && aces > 0){ //while # is bw 21 and 0
//   //             score -= 11; //score - 10
//   //             aces -=1; //score - 1
//   //         }
//   //         return score;
//   //       },
//   //
//   //   hitMe: function() {
//   //     while (this.handValue() < 17) {
//   //       var hitCard = deck.cards.pop(); //
//   //       this.hand.push(hitCard);
//   //       console.log(this.hand);
//   //     }
//   //   },
//   //
//   //   deal: function() { //dealer starts with one card
//   //     var hitCard = deck.cards.pop(); //.pop gives dealer last card object from deck
//   //     this.hand.push(hitCard); //grabs dealer card and sends it to hand array
//   //     console.log(this.hand); //dealer has another card in his hand
//   //   },
//   //
//   //   bust: function() { //dealer bust method
//   //     if (this.handValue() > 21) {
//   //       return true;
//   //     }
//   //     return false;
//   //   },
//   //
//   //   reset: function() { //dealer reset method
//   //     this.hand.length = 0;
//   //     document.getElementById('showDealerHand').innerHTML = '';
//   //
//   //   },
//   //
//   //   showHand: function(){ // displays dealers hand
//   //     document.getElementById('showDealerHand').innerHTML = this.handValue();
//   //   },
//   //
//   //   start: function() { //method for setting timer
//   //     var Timer = this; //this will prevent everything form running all at once, dealer can deal on care at a time
//   //     this.dealerTimer = setInterval(function(){ //set interval function
//   //       self.showHand(); //shows current hand after running timer
//   //     }, 6000); //timer runns every 6 seconds
//   //   }
//   //
//   // };
//
// ///////////////////////////////////////////////////////////////////////////////
//
// //bank object
//
// // var bank = {
// //   bet: function() { //method creates bank to reflect bets
// //     var betAmt = document.getElementById('betAmt').value; // betAmt grabs value of input box to make bet
// //     var newBank = document.getElementById('money').innerHTML; //grabs newbank
// //     document.getElementById('money').innerHTML = newBank - betAmt;
// //   },
// //
// //   pushBet: function() { //method where bank reflects a push through bet button after player makes a bet
// //     var newerBet = parseInt(document.getElementById('money').value); //defining variable to innerHTML
// //     var newestBank = parseInt(document.getElementById('money').innerHTML);//defining variable to innerHTML
// //       document.getElementById('money').innerHTML = newerBet + newestBank; //getting innterHTML to reflect newerBet+newestBank as outcome
// //   },
// //
// //   toWin: function() { //returns string with input box value
// //     var newBet = parseInt(document.getElementById('money').value); //coverts strings back to numbers
// //     var newerBank = parseInt(document.getElementById('money').innerHTML); //grabs newerbanks innerHTML
// //     document.getElementById('money').innerHTML = newerBank + newBet * 2; ///or multiply here, answer not coming out properly
// //   },
// //
// //
// //   clearInputBox: function() { //method clears the input box where bets are made
// //     var bankBox = document.getElementById('money'); //clears money for next game/hand to be played
// //     bankBox.value = ''; //input box in bank
// //   }
// //
// // }; //closes bank object
//
// }); //window onload close
