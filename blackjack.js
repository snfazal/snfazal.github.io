///DEAL OUT CARDS

  //
  //Making the Deck of Cards
// Constructor Function: Set up card suit, number & values: function Cards(s, n){
      //Private local variables
      var suit = s;
      var number = n;

      //Returns the actual suit name
      this.getSuit = function() {
          switch(suit) {
            case 1:
                return "Spades";
            case 2:
                return "Hearts";
            case 3:
                return "Diamonds";
            case 4:
                return "Clubs";
         }
      };

      // returns face cards and regular numbers
      this.getNumber = function() {
          switch(number) {
            case 1:
                return "Ace";
            case 11:
                return "Jack";
            case 12:
                return "Queen";
            case 13:
                return "King";
            default:
                return number;
         }
      };

      //Turns number into correct blackjack value
      this.getValue = function() {
          if(n > 9) {
              return 10;
          } else if (n === 1) {
              return 11;
          } else {
              return number;
          }
        };
  }

  //Function: creates a random card
  var deal = function() {
    //Private local variables
    var s = Math.floor(Math.random() * 4 + 1);
    var n = Math.floor(Math.random() * 13 + 1);

    return new Card(s, n);
  };

  //Constructor: Sets up cards and related methods
  function Hand() {
    //Private local variables
    var card1 = deal();
    var card2 = deal();
    var totalScore = card1.getValue +card2.getValue();
    var nextCard = 3;

    //Returns the amount of the cards in play
    this.getCardAmt = function() {
      return nextCard - 1;
    };

    //Adds new card and updates total score for a "hit"
    this.hit = function() {
      switch(nextCard) {
        case 3:
            var card3.getValue();
            nextCard++;
            break;
        case 4:
          var card4 = deal();
      }
    }

  }
  //Use OOP to make the deck by taking properties from above to make a constructor function



// create a function to deal cards (math.random)

// store cards in array; write out names with dashes for understanding. All cards

// store values correlating to order of cards in array above in a new array

/// ---Deal to the dealer

//zero out the dealer
var dealerStartTotal = 0;

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
