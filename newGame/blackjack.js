//Blackjack Game WDI Remote Matrix GA --Sophia Fazal


//Empty arrays declared for dealer and player to dealt into the game. These should be global variables so there is no scoping issue in the future.
    //sets up dealer
  //   var gameStats = {
  //   discards: 1,
  //   playerHand: [],
  //   playerScore: 0,
  //   dealerHand:[],
  //   dealerScore: 0,
  // };

  var Card = function(name, value, suit) {
    this.name = name;
    this.value = value;
    this.suit = suit;

  };

  var Deck = function() {
    this.deck = [];
    this.makeDeck = function(){

//Deck object will all 52 cards inside of it
    var cards = [
      {name: 'twoDiamonds', value: 2, img: 'img/2_of_ diamonds.jpeg', suit: 'diamonds'},
      {name: 'threeDiamonds', value: 3, img: 'img/3_of_diamonds.png', suit: 'diamonds'},
      {name: 'fourDiamons', value: 4, img: 'img/4_of_diamonds.png', suit: 'diamonds'},
      {name: 'fiveDiamonds', value: 5, img: 'img/5_of_diamonds.png', suit: 'diamonds'},
      {name: 'sixDiamonds', value: 6, img: 'img/6_of_diamonds.png', suit: 'diamonds'},
      {name: 'sevenDiamonds', value: 7, img: 'img/7_of_diamonds.png', suit: 'diamonds'},
      {name: 'eightDiamonds', value: 8, img: 'img/8_of_diamonds.png', suit: 'diamonds'},
      {name: 'nineDiamonds', value: 9, img: 'img/9_of_diamonds.png', suit: 'diamonds'},
      {name: 'tenDiamonds', value: 10, img: 'img/10_of_diamonds.png', suit: 'diamonds'},
      {name: 'jackOfDiamonds', value: 10, img: 'img/jack_of_diamonds.png', suit: 'diamonds' },
      {name: 'queenOfDiamonds', value: 10, img: 'img/queen_of_diamonds.png', suit: 'diamonds'},
      {name: 'kingOfDiamonds', value: 10, img: 'img/king_of_diamonds', suit: 'diamonds'},
      {name: 'aceOfDiamonds', value: 11, img: 'img/ace_of_diamonds.png', suit: 'diamonds'},
      {name: 'twoHearts', value: 2, img: 'img/2_of_hearts.png', suit: 'hearts'},
      {name: 'threeHearts', value: 3, img: 'img/3_of_hearts.png', suit: 'hearts'},
      {name: 'fourHearts', value: 4, img: 'img/4_of_hearts.png', suit: 'hearts'},
      {name: 'fiveHearts', value: 5, img: 'img/5_of_hearts.png', suit: 'hearts'},
      {name: 'sixHearts', value: 6, img: 'img/6_of_hearts.png', suit: 'hearts'},
      {name: 'sevenHearts', value: 7, img: 'img/7_of_hearts.png', suit: 'hearts'},
      {name: 'eightHearts', value: 8, img: 'img/8_of_hearts.png', suit: 'hearts'},
      {name: 'nineHearts', value: 9, img: 'img/9_of_hearts.png', suit: 'hearts'},
      {name: 'tenHearts', value: 10, img: 'img/10_of_hearts.png', suit: 'hearts'},
      {name: 'jackOfHearts', value: 10, img: 'img/jack_of_hearts.png', suit: 'hearts'},
      {name: 'queenOfHearts', value: 10, img: 'img/queen_of_hearts.png', suit: 'hearts'},
      {name: 'kingOfHearts', value: 10, img: 'img/king_of_hearts.png', suit: 'hearts'},
      {name: 'aceOfhearts', value: 11, img: 'img/ace_of_hearts.png', suit: 'hearts'},
      {name: 'twoSpades', value: 2, img: 'img/2_of_spades.png', suit: 'spades'},
      {name: 'threeSpades', value: 3, img: 'img/3_of_spades.png', suit: 'spades'},
      {name: 'fourSpades', value: 4, img: 'img/4_of_spades.png', suit: 'spades'},
      {name: 'fiveSpades', value: 5, img: 'img/5_of_spades.png', suit: 'spades'},
      {name: 'sixSpades', value: 6, img: 'img/6_of_spades.png', suit: 'spades'},
      {name: 'sevenSpades', value: 7, img: 'img/7_of_spades.png', suit: 'spades'},
      {name: 'eightSpades', value: 8, img: 'img/8_of_spades.png', suit: 'spades'},
      {name: 'nineSpades', value: 9, img: 'img/9_of_spades.png', suit: 'spades'},
      {name: 'tenSpades', value: 10, img: 'img/10_of_spades.png', suit: 'spades'},
      {name: 'jackOfSpades', value: 10, img: 'img/jack_of_spades.png', suit: 'spades' },
      {name: 'queenOfSpades', value: 10, img: 'img/queen_of_spades.png', suit: 'spades'},
      {name: 'kingOfSpades', value: 10, img: 'img/king_of_spades.png', suit: 'spades'},
      {name: 'aceOfSpades', value: 10, img: 'img/ace_of_spades.png', suit: 'spades'},
      {name: 'twoClubs', value: 2, img: 'img/2_of_clubs.png', suit: 'clubs'},
      {name: 'threeClubs', value: 3, img: 'img/3_of_clubs.png', suit: 'clubs'},
      {name: 'fourClubs', value: 4, img: 'img/4_of_clubs.png', suit: 'clubs'},
      {name: 'fiveClubs', value: 5, img: 'img/5_of_clubs.png', suit: 'clubs'},
      {name: 'sixClubs', value: 6, img: 'img/6_of_clubs.png', suit: 'clubs'},
      {name: 'sevenClubs', value: 7, img: 'img/7_of_clubs.png', suit: 'clubs'},
      {name: 'eightClubs', value: 8, img: 'img/8_of_clubs.png', suit: 'clubs'},
      {name: 'nineClubs', value: 9, img: 'img/9_of_clubs.png', suit: 'clubs'},
      {name: 'tenClubs', value: 10, img: 'img/10_of_clubs.png', suit: 'clubs'},
      {name: 'jackOfClubs', value: 10, img: 'img/jack_of_clubs.png', suit: 'clubs' },
      {name: 'queenOfClubs', value: 10, img: 'img/queen_of_clubs.png', suit: 'clubs'},
      {name: 'kingOfClubs', value: 10, img: 'img/king_of_clubs.png', suit: 'clubs'},
      {name: 'aceOfClubs', value: 11, img: 'img/ace_of_clubs.png', suit: 'clubs'},
    ];

    // newGame: function(){
    //
    //   //set everything to 0 to start
    //   gameStats.playerHand = [];
    //   gameStats.playerScore = 0;
    //   gameStats.dealerHand = [];
    //   gameStats.dealerScore = 0;
    //
    //   //shuffleCards and input to the deck
    //   gameStats.cards = this.shuffleCards();
    //
    // },

  // var Card = function(name, value, suit) {
  //   this.name = name;
  //   this.value = value;
  //   this.suit = suit;
  //
  // }




    for (var i = 0; i < cards.length; i++) {

      this.deck.push(new Card(cards[i]));
      }
    }; //end makeDeck function

  //Fisher yates shuffle
    this.shuffle = function() {
      for(i = this.deck.length - 1; i > 0; i--){
        j = Math.floor(Math.random() * (i + 1));
        temp = this.deck[i];
        this.deck[i] = this.deck[j];
        this.deck[j] = temp;
      }
      return this.deck;
    } //end shuffle function

  };//end of deck constructor function

  var mainDeck = new Deck();
  mainDeck.makeDeck();
  mainDeck.shuffle();
  console.log(mainDeck.deck);


//__________________________________________________________________________________________




// // Function used to deal one new card for the player from the deck, with an image appended to the card. #2
//   function dealCard(hand) {
//     //one random card chosen from the deck
//     var eachCard = this.deck.pop();
//   //   //next card off deck above
//     this.deck.unshift(eachCard);
//   //   //card pushed on top of hand
//     hand.push(eachCard);
//   //
//     $nextCard = $('<div>');
//   //   //assign image url tag to variable{
//     var url = '<img src="images/'+ card.img + '.png"/>';
//   //   //image url appends the element(image) onto next card waiting to be chosen
//     $(element).append(url);
//   }
//   //function to calculate points total in hand at play for player and dealer
//     //define sum
//   function calculateValue(hand) {
//     var sum = 0;
//     //for loop to count all cards through hand length
//     for (var i=0; i < hand.length; i++) {
//       //cards in the hand are
//       var card = hand[i];
//       //sumed with a method that will calc their value
//       sum = sum + card.value;
//     }
//     //and return the sum of their hand
//     return sum;
// }



  var player = {

        hand: [],

    score: function() {

      var sum = 0;

      for(var i=0; i < this.hand.length; i++) {
          var rank = this.hand[i].rank; //generates value of above
          if (rank <= 11) { //if value is 11 or higher then ace is 1
              aces += 1;
          }
          sum += cardRank; //
      } //end for loop
         //Checks to see if Aces should be 1 or 11 (DM)
         while (sum > 21 && aces > 0){ //while # is bw 21 and 0
             sum -= 11; //
             aces -=1;
         }
         return sum; //returns aces value based on cards.sum function
       },

         //method to hit
       hitMe: function() {
         var hit = mainDeck.cards.pop(); //.pop takes the last card from deck
         this.hand.push(hit); //grabs the last cards and pushes it into hand array
         console.log(this.hand);
       },

       bust: function() { //method checking for bust
         if (this.score() > 21) { //if handValue is over 21
           return true; //return true, the player bust
         };
         return false; //if cardVal is under 21 return false
       },

       reset: function() { //method to reset hand
         this.hand.length = 0; // hand at play resets to 0
         document.getElementById('playerScore').innerHTML = ''; //
       },


       showHand: function() { //method shows had value at play
         document.getElementById('playerScore').innerHTML = this.score();
       }

     };

     var dealer = {
         hand: [],

        score: function() { //renamed to this, because its showing the value of the whole hand not just one card, even though it is one card at a time

          var sum = 0;

          for (var i=0; i < this.hand.length; i++) {
            var rank = this.hand[i].rank();
             if (rank <= 11) { //if value is 11 then ace is 1
                 aces += 1; //score +
             }
            score += cardRank; // value in hand + dealers value is sca
          } //end for loop
              //Checks to see if Aces should be 1 or 11 (DM)
             while (sum > 21 && aces > 0){ //while # is bw 21 and 0
                  sum -= 11; //score - 10
                  aces -=1; //score - 1
              }
              return sum;
            },

        hitMe: function() {
          while (this.score() < 17) {
            var hit = mainDeck.cards.pop(); //
            this.hand.push(hit);
            console.log(this.hand);
          }
        },

        deal: function() { //dealer starts with one card
          var hit = mainDeck.cards.pop(); //.pop gives dealer last card object from deck
          this.hand.push(hit); //grabs dealer card and sends it to hand array
          console.log(this.hand); //dealer has another card in his hand
        },

        bust: function() { //dealer bust method
          if (this.score() > 21) {
            return true;
          }
          return false;
        },

        reset: function() { //dealer reset method
          this.hand.length = 0;
          document.getElementById('showDealerHand').innerHTML = '';

        },

        showHand: function(){ // displays dealers hand
          document.getElementById('showDealerHand').innerHTML = this.score();
        }

        };

//________________________________________________________________________
//Function that updates the players bankroll #1
function updateBank() {
  //grabs money and adds the players money to the bankroll and shows the updated value
  $('#money').text('Bankroll: $' + playerMoney);
}

  //Fuction checking if player or dealer BUST. #4
  function checkForBust() {
  //Depending on if the player or dealer busts, a winner will be declared #5
    //the points of the player will be calculated by the value of cards in the players hand
    var playerScore = score(playerHand);
    // if value is greater than 21
    if (playerScore > 21) {
      //the player will see a message that says he busted
      $('#messages').text("Bust! Your score is over 21, you lose. ");
      //player cannot hit if he busts
      $('#hitButton').prop('disabled', true);
      //player cannot stand if he busts
      $('#standButton').prop('disabled', true);
      //return true
      return true;
    }
    //dealers points will be calculated by the value of cards in his hand
    var dealerScore = calculateValue(dealerHand);
    //if the value is greater than 21
    if (dealerScore > 21) {
      //player will see a message "Dealer busted you win"
      $('#messages').text("Yay! Dealer Busted, you win! ");
      //subtract/add $10 to the players bank
      playerMoney+=10;
      playerMoney+=10;
      //update bank to reflect loss
      updateBank();
      //player cannot hit if he wins
      $('#hitButton').prop('disabled', true);
      //player cannot stand if he wins
      $('#standButton').prop('disabled', true);

      return true;
      //return false if otherwise
    }
      return false;
  }


// console.log('#hitButton was clicked yahhhhh');
// console.log(" #standButton was clicked");

  //global variable declaring amount of money player starts with in the bank
  var playerMoney = 500; //start bank


  //Constructor function with all click actions
  $(function() { //window.onload
    //get bank up to date before beginning
    updateBank();

    //when deal button is click(ed) function
    $('#dealButton').click(function(){
      //deal a card to the players hand
      dealCard(playerHand, '#playerHand');
      //deal a card to the dealers hand
      dealCard(dealerHand, '#dealerHand');
      //check to see if dealer/player bust
      checkForBust();
      //take $10 as the players bet at this time
      playerMoney -= 10;
      //update the bank to reflect min bet value
      updateBank();
    }); //end click function

    //when hitButton is clicked
    $('#hitButton').click(function(){
      //deal a card to the players hand
      dealCard(playerHand, '#playerHand');
      //check to see if player or dealer bust
      checkForBust();
    }); //end click function

    //when standButton is clicked
    $('#standButton').click(function(){
      //the dealers score is the calculated value of the cards in his hand
      var dealerScore = calculateValue(dealerHand);
      //if the dealer's score is less than 17
      while (dealerScore < 17) {
        //the dealer will be dealt another card
        dealCard(dealerHand, '#dealerHand');
        //the dealers score is the calculated value of the cards in his hand
        dealerScore = calculateValue(dealerHand);
      } //end click function

      //if the player does not bust
      if (checkForBust() === false) {
        //players score will be the calculated value of the cards in his hand
        var playerScore = calculateValue(playerHand);
        //dealers score will be the calculated value of the cards in his hand
        dealerScore = calculateValue(dealerHand);
        //if the players score is less than the dealers score
        if (playerScore > dealerScore) {
          //message function shows text to player that he won
          $('#messages').text('You beat the dealer, so you win! ');
          //player gets $10
          playerMoney +=10;
          playerMoney +=10;
          //players money is updated in the bank
          updateBank();
          //player can no longer hit for more cards
          $('#hitButton').prop('disabled', true);
          //player can no longer use stand button
          $('#standButton').prop('disabled', true);
          //or if there is a tie
        } else if (playerScore === dealerScore) {
          //a message will tell the player of a tie
          $('#messages').text('aww man! you tied the dealer ');
          //bank is updated to reflect tie outcome
          updateBank();
          //player can no longer click hit button
          $('#hitButton').prop('disabled', true);
          //player can no longer click hit button
          $('#standButton').prop('disabled', true);
          //if neither than
        } else {
          //a message will tell the player you have lost
          $('#messages').text('You Lost!');
          //the player will not longer be able to hit
          $('#hitButton').prop('disabled', true);
          //player will not longer be able to stand
          $('#standButton').prop('disabled', true);
          } //end else statement
        } //end if/else statement
      }); //end if statement that checks for a bust

    }); //end window.onload

//
//
//
//
//
//
//   // });
//
//   // //Function that updates the players bankroll #1
//   // function updatedBank() {
//   //   //grabs money and adds the players money to the bankroll and shows the updated value
//   //   $('#money').text('Bankroll: $' + playerMoney);
//   // }
