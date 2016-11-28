console.log('hello world, its blackjack');
//DEAL OUT CARDS

  $(function(){ //window.onload jQuery style
    // collecting all buttons
      var $hitButton = $('#hit'); //MVP
      var $stayButton = $('#stay'); //MVP
      var $clearButton = $('#clear'); //ND essentially start new game/clear hand
      var $resetButton = $('#reset'); //ND


//       * Create a deck of cards and make sure it suffles *

  // Card constructor makes each card in the deck
  var Card = function(suit, value) { //rank is value tracked
      this.face = face;
      this.value = value;
   };


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
     this.deck.makeValueCards();
     this.deck.makeFaceCards();
     this.deck.shuffle();
     }

  } //end of deck object
 deck.makeItWork();

};

   var player = {
     pHand: [],

     pHandTotal: function() {
       score = 0, //keeps score by value of cards
       cardVal = 0, //stores value of cards in hand
       aces = 0; //stores number of aces in the hand
       for (i=0; i < pHand.length; i++){ //phandtotal.phand through the array
         var value = pHand[i].getValue(); //generates value of above
         if (value == 11) { //if value is 11 then ace is 1
             aces += 1;
      }
      score += cardVal; //
     }
      //Checks to see if Aces should be 1 or 11 (DM)
      while (score > 21 && aces > 0){ //while # is bw 21 and 0
          score -= 11; //
          aces -=1;
    }
      return score; //returns aces value based on cards.score function
  },

      //method to hit
    hit: function() {
      var hitMe = pdeck.deck.pop(); //.pop takes the last card from deck
      this.hand.push(hitMe); //grabs the last cards and pushes it into hand array
      console.log(this.hand);
    },

    Bust: function() { //method checking for bust
      if (this.cardVal() > 21) { //if cardVal is over 21
        return true; //return true, the player bust
      };
      return false; //if cardVal is under 21 return false
    },

    reset: function() {
      this.hand.length = 0;
      document.getElementById('playerDisplay').innerHTML = '';
    },

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

};

});




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
