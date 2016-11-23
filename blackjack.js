///DEAL OUT CARDS

  //
  //Making the Deck of Cards
// Constructor Function:
//local variables below
var Card = function(suit, number) {
      //gets number of the cards in deck 1-52
    this.getNumber = function() {
        return number;
    };

      //Returns the actual suit name as string
      //set up came from codeacademy game
      this.getSuit = function() {
        var suitName = '';
          switch(suit) {
            case 1:
                suitName = "Hearts";
            case 2:
                suitName = "Clubs";
            case 3:
                suitName = "Spades";
            case 4:
                suitName = "Diamonds";
         }
         return suitName;
      };

   // Returns the HTML coded symbol of card suit
   //set up idea from codeacademy game
      this.getSymbol = function (){
        var suitName = '';
          switch (suit){
            case 1:
                suitName = "&hearts;";
                break;
            case 2:
                suitName = "&clubs;";
                break;
            case 3:
                suitName = "&spades;";
                break;
            case 4:
                suitName = "&diamonds;";
                break;
          }
          return suitName;
        };
        //Turns number into correct blackjack value to keep score
        this.getValue = function() {
            var value = number;
            if (number >= 10){
                value = 10;
            } if (number === 1) {
                 value = 11;
            } return value;
          };
      // returns face cards and regular numbers
      this.getNumber = function() {
        var cardName = '';
          switch(number) {
            case 1:
                cardName = "Ace";
            case 11:
                cardName = "Jack";
            case 12:
                cardName = "Queen";
            case 13:
                cardname = "King";
            default:
                cardName = number;
         }
         return cardName+this.getSymbol();
      };
  };

//Constructor Function:
  //Function: creates a random card
var Deck = function() {
  var cards = [];
  //below creates new SET of cards
  var newCards = function() {
    var i, suit, number;
    for (i=0; i < 52; i++) {
        suit = i % 4 + 1;
        cards.push(new Card(suit, number));
    }
  };
  //create new cards
  newCards();
   //shuffle below found on stackoverflow
  this.shuffle = function() { //method to shuffle deck of cards
    for(var j, x, i = cards.length; i; j = parseInt(math.random() * i), x = cards[--i], cards[i] = cards[j], cards[j] = x); //shuffle must go through whole deck, thats why for loop
    return cards; //returns shuffled cards
  };
  //Array of cards representing the Deck
  this.getCards = function() {
    return cards;
  };
  this.deal = function() {
    if (!cards.length){
       console.log(' no more cards, new deck ');
       newCards();
       this.shuffle();
     }
     return cards.pop();
  };
};

//Constructor Function:
var Hand = function(deck) {
  var cards = [];

     //Deal one card for player and one for dealer to start game
     cards.push(deck.deal(), deckdeal());
     //returns array of cards that represents the Hand
     this.getHand = function() {
       return cards;

     };
     //returns the value of the hand as the score
     this.score = function() {
       var i;
           score = 0; //keeps score by value of card
           cardVal = 0; //stores cards value
           aces = 0; //stores number of aces in the hand (later to detemine value)
       for (i=0; i<cards.length; i++){
           cardVal = cards[i].getValue();
           if (cardVal == 11) {
               aces += 1;
         }
         score += cardVal;
      }
      //Checks to see if Aces should be 1 or 11 (ask matt why this way best?? makes game easier?)
      //*
    while (score > 21 && aces > 0){
          score -= 10;
          aces -=1;
    }
      return score;
  };
  //returns array list of Card names in hand



};

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
