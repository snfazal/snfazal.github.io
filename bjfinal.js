console.log('hello world, its time play blackjack');

  $(function(){ //window.onload jQuery style
      // collecting all buttons
      var $hitButton = $('#hit'); //MVP
      var $stayButton = $('#stay'); //MVP
      var $clearButton = $('#clear'); //ND essentially start new game/clear hand
      var $resetButton = $('#reset'); //ND


//    *Create game statistics and objects
      /* contains amount in players bank,
         number of cards, amount of the current bet,

       cards, */

       // object constructor needed to make each new card
       var Card = function (suit, value, rank) {
          // this.suit = suit;
          this.face = face;
          this.value = value;
          this.rank = rank;
       },

       // object that makes deck
       var makeDeck = function { //array to hold cards
         cards: []; //empty
         faceCards: ['hearts', 'spades', 'diamonds', 'clubs'], //face card values
         faceRanks: ['Jack', 'Queen', 'King'], //face card ranks
         numberValues: [2, 3, 4, 5, 6, 7, 8, 9, 10], //card values
         aceValue: ['Ace'], //ace identifies with ace only


      makeNumbers


       }



      });


//////////////////////////////////////////////////////////////////////////////

// first draft 





}
