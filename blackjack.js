console.log('hello world, its blackjack');
//DEAL OUT CARDS

$(function(){ //window.onload, loads functionality within the window


    player.hitMe(); //cards dealt to player
    player.hitMe(); //two cards for player

    dealer.deal(); //dealer deals out one card for himself, game rules accordin to wikipedia

    player.showHand(); //displays player hand
    dealer.showHand(); //displays dealers hand

    $('#bet').on('click', function() { //event listener on bet button
      bank.bet(); //bank enacts bet button visually
      document.getElementById('bet').style.visibility='hidden'; //no longer can bet button be seen muwahahaha

    $('#hitMe').on('click', function(){ //adds eventlistener to hit buttons
        player.hitMe(); //event handler: player hits
        player.showHand(); //method displays players hand
        if (player.checkBust()) {
          alert (' Busted! ');

          player.reset();
          dealer.reset();

          bank.clearInputBox(); //method to clear bet input box
          document.getElementById('bet').style.visibility='visible'; //makes bet button visible to functiontional on gameboard
          dealer.deal(); //dealer deals out a card to play hand
        }

    $('#stay').on('click', function(){ //adds event listener onto stay button
        dealer.hitMe(); //dealer hits
        if (dealer.bust()) { //if statement for player to win if dealer busts
          dealer.showHand(); //displays dealers hand at play
          bank.toWin(); //bank enacts method of winning bet toWin game
          alert(' Yaayyy! You Win! Dealer has busted. ') //alerts player they have won
          player.reset(); // to zero for new game
          dealer.reset(); //to zero for new game
          bank.clearInputBox(); //clears input box
          document.getElementById('bet').style.visibility='visible'; //bet button appears so player can place bets
          dealer.deal(); //dealer deals card to himself
        } else if (player.handValue() === dealer.handValue()) { //or if the player and the dealer are in a tie
          dealer.showHand(); //dealer shows his hand and bank identifies a tie
          bank.pushBet(); //bank shows a tie
          alert (' push your bet through ');
          player.reset(); //player reset to zero
          dealer.reset(); //dealer resets to zeero
          bank.clearInputBox(); //method clears bet box
          document.getElementById('bet').style.visibility='visible' //bet box appears again
          dealer.deal(); //dealer deals out one card
        } else if (player.handValue() > dealer.handValue()) { //players hand has more value than dealer
          dealer.showHand(); //bank reflects player winning
          bank.toWin(); //bank enacts player winning
          alert(" You Win! "); //alert player wins
          player.reset(); //player zero
          dealer.reset(); //dealer back to zero
          bank.ClearInputBox(); //clear bet box
          document.getElementById('bet').style.visibility='visible' //make it show up
          dealer.deal(); //dealer dealt card
        } else if (player.handValue() < dealer.handValue()) { // player gets less than the dealer
          dealer.showHand(); //banks sees a winner
          alert(' Dealer has more than you, so you lose '); //alert
          player.reset(); //player zero
          dealer.reset(); //dealer back to zero
          bank.clearInputBox();//wiped clean
          document.getElementById('bet').style.visibility='visible'
          dealer.deal(); //cards dealt by dealer who is showing one cardddd

        }


      })


    })

    // })//



//////////////////////////////////////////////////////////////////

  //deck = object within container
  var Deck = function() {
        this.deck = [];
   //method to make the deck
   var makeDeck =  { //decks made bc of declared objects
        cards: [], //1-52 cards
        cardSuits: ['hearts', 'spades', 'diamonds', 'clubs'], //card suits
        faces: ['Jack', 'Queen', 'King'], //face cards
        cardValues: ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10], //card values
        // aceRankValue: ['Ace'], //ace identifies with ace only

   //for loop applies suits/ranks to each card by makeDeck and then pushes it through Deck array
   makeValueCards: function() {
     for (var i = 0; i < this.cardSuits.length; i++) { //gets the suit
      for (var j = 0; j < this.cardValues.length; j++) {//gets cards value
        var eachCard = new Card(this.cardSuits[i], this.cardValues[j]); //cardSuits+cardValues create nextCard, that is the new card
        this.cards.push(eachCard); //newCard pushed through deck to player
      }
     }
   }, //end makeDeck.makeValueCards

   makeFaceCards: function() { //function makes face cards
      for (var i = 0; i < this.cardSuits.length; i++) { //get next cards suit
        for (var j = 0; j < this.faces.length; j++) { //gets next cards face
          this.cards.push(new Card(this.faces[i], 10, this.cardSuits[j])); //creates new card w/face, suit and value and pushes to makeDeck
        }
      }
    }, //end makeDeck.makeValueCards

    // Fisher-Yates shuffle algorithum below:
   shuffle: function() {
     for (i = this.deck.length - 1; i > 0; i-=1) {
       j = Math.floor(Math.random() * (i + 1));
       temp = this.deck[i];
       this.deck[i] = this.deck[j];
       this.deck[j] = temp;
     }
     return this.deck;
   }, //end makeDeck.shuffle


   makeItWork: function() {
     deck.makeValueCards();
     deck.makeFaceCards();
     deck.shuffle();
     }

  } //end of deck object
 deck.makeItWork();

};

/* Without Blaine the functionality below wouldn't work, I would be lost and out of WDI and my life would simply be over. His exact words were "...when you say reorder can you clarify that alil, and you dont have to put this. in front of the methods, but they can go inside the methods like this.hitMe would just be hitMe: and this. would go in front of cards like this.cards.length. this refers to the player object. your code looks though ! I'll keep checking it out to see if i can find anything..."

As you can see, the below code, looks cleaner, it functions, I understand it(nothing fancy like before) and IT WORKS! Thank Blaine! */

   var player = {
     hand: [],

     handValue: function() {
       score = 0, //keeps score by value of cards
       cardVal = 0, //stores value of cards in hand
       aces = 0; //stores number of aces in the hand
       for (i=0; i < this.hand.length; i++) { //phandtotal.phand through the array
         var value = this.hand[i].value; //generates value of above
         if (value <= 10) { //if value is 11 then ace is 1
             aces += 1;
      }
      score += cardVal; //
     }
      //Checks to see if Aces should be 1 or 11 (DM)
      while (score > 21 && aces > 0){ //while # is bw 21 and 0
          score -= 10; //
          aces -=1;
    }
      return score; //returns aces value based on cards.score function
  },

      //method to hit
    hitMe: function() {
      var hitCard = deck.cards.pop(); //.pop takes the last card from deck
      this.hand.push(hitCard); //grabs the last cards and pushes it into hand array
      console.log(this.hand);
    },

    bust: function() { //method checking for bust
      if (this.handValue() > 21) { //if handValue is over 21
        return true; //return true, the player bust
      };
      return false; //if cardVal is under 21 return false
    },

    reset: function() { //method to reset hand
      this.hand.length = 0; // hand at play resets to 0
      document.getElementById('playersHand').innerHTML = ''; //
    },


    showHand: function() { //method shows had value at play
      document.getElementById('playersHand').innerHTML = this.handValue();
    }

  };

///////////////////////////////////////////////////////////////////////

//dealer objects

    var dealer = function() {
      hand: [],

    handValue: function() { //renamed to this, because its showing the value of the whole hand not just one card, even though it is one card at a time
      score = 0, //keeps track of score, essentiall value
      cardVal = 0, //card value
      aces = 0; //how many aces in hand to determine its value
      for (var i=0; i < this.hand.length; i++) {
        var value = this.hand[i].value;
         if (value <= 10) { //if value is 11 then ace is 1
                 aces += 1;
          }
          score += cardVal; //
        }
          //Checks to see if Aces should be 1 or 11 (DM)
          while (score > 21 && aces > 0){ //while # is bw 21 and 0
              score -= 11; //
              aces -=1;
          }
          return score;
        },

    hitMe: function() {
      while (this.handValue() < 17) {
        var hitCard = deck.cards.pop(); //
        this.hand.push(hitCard);
        console.log(this.hand);
      }
    },

    deal: function() { //dealer starts with one card
      var hitCard = deck.cards.pop(); //.pop gives dealer last card object from deck
      this.hand.push(hitCard); //grabs dealer card and sends it to hand array
      console.log(this.hand); //dealer has another card in his hand
    },

    bust: function() { //dealer bust method
      if (this.handValue() > 21 {
        return true;
      },
      return false;
    },

    reset: function() { //dealer reset method
      this.hand.length = 0;
      document.getElementById('showDealerHand').innerHTML = '';

    },

    showHand: function(){ // displays dealers hand
      document.getElementById('showDealerHand').innerHTML = this.handValue();
    },

    start: function() {
      var timer = this;
      this.dealerTimer = setInterval(function(){
        self.showHand();
      }, 6000);
    }

  };

///////////////////////////////////////////////////////////////////////////////

//bank object

var bank = {
  bet: function() { //method creates bank to reflect bets
    var betAmt = document.getElementById('betAmt').value; // betAmt grabs value of input box to make bet
    var newBank = document.getElementById('money').innerHTML; //grabs newbank
    document.getElementById('money').innerHTML = newBank - betAmt;
  },

  toWin: function() { //returns string with input box value
    var newBet = parseInt(document.getElementById('betAmt').value); //coverts strings back to numbers
    var newerBank = parseInt(document.getElementById('money').innerHTML); //grabs newerbanks innerHTML
    document.getElementById('money').innerHTML = newerBank + newBet + 2); ///or multiply here, answer not coming out properly
  },

  pushBet: function() { //method where bank reflects a push through bet button after player makes a bet
    var newerBet = parseInt(document.getElementById('money').value); //defining variable to innerHTML
    var newestBank = parseInt(document.getElementById('money').innerHTML);//defining variable to innerHTML
      document.getElementById('money').innerHTML = newerBet + newestBank; //getting innterHTML to reflect newerBet+newestBank as outcome
  },

clearInputBox: function() { //method clears the input box where bets are made
  var bankBox = document.getElementById('money'); //clears money for next game/hand to be played
  bankBox.value = ''; //input box in bank
}



};


  // //returns array with a list of the names (suits/faces/values) of the cards in the players hand
  // this.nameHand = function() {
  //   var yourCardsAre = [],
  //   i;
  //
  //   for (i = 0; i < cards.length; i++){ //must get through all the cards in hand
  //       yourCardsAre.push(cards[i].getName());
  //   }
  //   return yourCardsAre.join(); //literally tells you what cards you're holding in hand
  // };
  //
  // //meethod to hit
  // this.hitMe = function() { //adds card from deck to hand at play
  //   // console.log('what is happening here');
  //   if (cards.length < 5){
  //       cards.push(deck.deal());
  //   }
  // };
  // //grabs the HTML id of the cards in players hand
  // this.toHTML = function(){
  //   var yourCardsAre = [],
  //       i;
  //
  //   for (i = 0; i < cards.length; i++){
  //       arrayOut.push('<div class="card ', cards[i].getSuit(),' ',cards[i].getNumber(),'">',cards[i].getName(),'</div>');
  //   }
  //   return arrayOut.join('');
  // };

}); //end window onload




//    // Returns the HTML coded symbol of card suit
//    //set up idea from codeacademy game
//       this.makeFace = function (){
//         var suitName = '';
//           switch (suit){
//             case 1:
//                 suitName = "&hearts;";
//                 break;
//             case 2:
//                 suitName = "&clubs;";
//                 break;
//             case 3:
//                 suitName = "&spades;";
//                 break;
//             case 4:
//                 suitName = "&diamonds;";
//                 break;
//           }
//           return suitName;
//         };
//         //Turns number into correct blackjack value to keep score
//         this.getValue = function() {
//             var value = number;
//             if (number >= 10){
//                 value = 10;
//             } if (number === 1) {
//                  value = 11;
//             } return value;
//           };
//       // returns face cards and regular numbers
//       this.getNumber = function() {
//         var cardName = '';
//           switch(number) {
//             case 1:
//                 cardName = "Ace";
//             case 11:
//                 cardName = "Jack";
//             case 12:
//                 cardName = "Queen";
//             case 13:
//                 cardname = "King";
//             default:
//                 cardName = number;
//          }
//          return cardName+this.getSymbol();
//       };
//
// //Constructor Function:
//   //Function: creates a random card
// var Deck = function() {
//   var cards = [];
//   //below creates new SET of cards
//   var newCards = function() {
//     var i, suit, number;
//     for (i=0; i < 52; i++) {
//         suit = i % 4 + 1;
//         cards.push(new Card(suit, number));
//     }
//   };
//   //create new cards
//   newCards();
//    //shuffle below found on stackoverflow
//   this.shuffle = function() { //method to shuffle deck of cards
//     for(var j, x, i = cards.length; i; j = parseInt(math.random() * i), x = cards[--i], cards[i] = cards[j], cards[j] = x); //shuffle must go through whole deck
//     return cards; //returns shuffled cards
//   };
//
//   //Array of cards representing the Deck
//   this.getCards = function() {
//     return cards;
//   };
//   this.deal = function() {
//     if (!cards.length){
//        console.log(' no more cards, new deck ');
//        newCards();
//        this.shuffle();
//      }
//      return cards.pop();
//   };
// };

//Constructor Function:
// var Hand = function(deck) {
//   var cards = [];
//
//      //Deal one card for player and one for dealer to start game
//      cards.push(deck.deal(), deck.deal());
//      //returns array of cards that represents the Hand
//      this.getHand = function() {
//        return cards;
//    };
//      //returns the value of the hand as the score
//      this.score = function() {
//        var i,
//            score = 0, //keeps score by value of card
//            cardVal = 0, //stores cards value
//            aces = 0; //stores number of aces in the hand (later to detemine value)
//        for (i=0; i<cards.length; i++){
//            cardVal = cards[i].getValue();
//            if (cardVal == 11) {
//                aces += 1;
//          }
//          score += cardVal;
//       }
//       //Checks to see if Aces should be 1 or 11 (ask matt why this way best?? makes game easier?)
//       //*
//     while (score > 21 && aces > 0){
//           score -= 10;
//           aces -=1;
//     }
//       return score;
//   };
//   //returns array list of Card names in hand
//   this.printHand = function() {
//     var arrayOut = [],
//     i;
//
//     for (i = 0; i < cards.length; i++){ //must get through all the cards in hand
//         arrayOut.push(cards[i].getName());
//     }
//     return arrayOut.join(); //literally tells you what you're holding
//   };
//
//   //Adds a card from the Deck into players hands
//   this.hitMe = function() {
//     // console.log('what is happening here');
//     if (cards.length < 5){
//         cards.push(deck.deal());
//     }
//   };
//   //grabs the HTML image of the cards in hand at player
//   this.toHTML = function(){
//     var arrayOut = [],
//         i;
//
//     for (i = 0; i < cards.length; i++){
//         arrayOut.push('<div class="card ', cards[i].getSuit(),' ',cards[i].getNumber(),'">',cards[i].getName(),'</div>');
//     }
//     return arrayOut.join('');
//   };




//Playing the game BLACKJACK
// $(function(){
//
// var blackJack = $(function (){
//
//     var deck = new Deck(); //new deck for game (multiple decks MVP)
//
//     var wins = 0; //winning ratios
//     var losses = 0; //initially probability should be the same
//
// var declareWinner = function(playerHand, dealerHand){ //keeps score the declare the winner of each hand
//     var outcome = '', //end score
//     dealerScore = dealerHand.score(), //dealers hand out is his score
//     playerScore = playerHand.score(); //players' hand out is her score
//
//     //if statement stating original blackjack game rules
//     if(playerScore > 21 || dealerScore === 21){ //pS less than dealer who has 21
//       outcome = " Sorry, You Lose! "; //winning outcome message
//         loses++; //player loses
//     }else if (playerScore <= 21 && playerHand.getHand().length >= 5){ //less than or equal to 21 with 5 cards total
//       outcome = " Yay! You win! "; //winning outcome message
//       wins++; //player wins
//     }else if (dealerScore > 21 || playerScore === 21 || playerScore > dealerHand.score()){ // dealer has less than 21 or player has 21
//       outcome = " You Win! "; //winning outcome message
//       wins++; //player wins
//     }else if (dealerScore > playerScore){ //dealer score is higher than players
//       outcome = " :( You lose! "; //winning outcome message
//       loses++; //player loses
//     }else if (dealerScore === playerScore){
//       outcome = " it's a tie ";
//       //losses++; //player loses bc he doesn't win
//     }
    //return code outputs score of the round. <br/> breaks it up in HTML, adds dealers hand score <br/> and adds the players score. Makes it all work in DOM
    // return outcome+"<br />Dealer: "+dealerHand.score()+"<br />You "+playerScore;
    // };

//Dealer's Hand
//  var dealerHand = function() {
//       var hand = new Hand(deck); //new deck for the dealers hand
//       //while loop below makes dealer continue to hit when hand value bw 1-17
//       while (hand.score() < 17 && hand.length < 1) {
//       hand.hitMe(); //hitMe button for hand equation above
//       }
//       return hand; //returns value of the dealers hand
//     };
//
//     var yourHand;
//
// //CACHE SELECTORS
//     var $hitButton = $("#hitMe"),
//         $standButton = $("#stand"),
//         $dealButton = $("#deal"),
//         $score = $("#yourScore"),
//         $yourHand = $('#yourHand'),
//         $dealerHand = $('#dealerHand');
//
// //function that shows deal button and hides stand and hit
//     var showDeal = function() {
//       $hitButton.hide();
//       $standButton.hide();
//       $dealButton.show();
//     };
//
//     var showControls = function() {
//        $hitButton.show();
//        $standButton.show();
//        $dealButton.show();
//     };
//
//     var updateUI = function() {
//       $yourHand.html(yourHand)
//     };



// }); //closes window.onload function


  // var deal = function() {
  //   //Private local variables
  //   var s = Math.floor(Math.random() * 4 + 1);
  //   var n = Math.floor(Math.random() * 13 + 1);
  //
  //   return new Card(s, n);
  // };
  //
  // //Constructor: Sets up cards and related methods
  // function Hand() {
  //   //Private local variables
  //   var card1 = deal();
  //   var card2 = deal();
  //   var totalScore = card1.getValue +card2.getValue();
  //   var nextCard = 3;
  //
  //   //Returns the amount of the cards in play
  //   this.getCardAmt = function() {
  //     return nextCard - 1;
  //   };
  //
  //   //Adds new card and updates total score for a "hit"
  //   this.hit = function() {
  //     switch(nextCard) {
  //       case 3:
  //           var card3.getValue();
  //           nextCard++;
  //           break;
  //       case 4:
  //         var card4 = deal();
  //     }
  //   }
  //
  // };
  //Use OOP to make the deck by taking properties from above to make a constructor function



// create a function to deal cards (math.random)

// store cards in array; write out names with dashes for understanding. All cards

// store values correlating to order of cards in array above in a new array

/// ---Deal to the dealer

//zero out the dealer


// deal out the cards (math.floor/math.random)

// get the total of the dealer
// create variable for the class of the cards

// add a class to the cards
// add an attribute to the cardclass

// create an equation for the dealers total;
    // create if statement for when the dealers total is less than 21
    // loop that goes through the array of cards
    //







/// ---Deal to the player

// zero out the player total
// create variable of player and equal it to zero

  // deal the cards out to player (math.floor/math.random)

/// What happens if the player stands?
  //add click button for player to decide they want to stand

  //take dealer total again what cards the player has showing
  //

  ////Keeping adding cards until over 17 or the dealer busts



/// What happens
