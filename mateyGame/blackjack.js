

//grabb objects from bank in jquery

//create a card function


//create a card in order to pull first card from deck object
  //card function
  var Card = function(rank, suit) {
    //assigns a rank that doubles as value
    this.rank = rank;
    //assigns a suit
    this.suit = suit;

  }; //end of card constructor function

  //deck constructor function
  var Deck = function() {
    //assigns deck as empty array
    this.deck = [];
    //assigns makeDeck function
    this.makeDeck = function() {
      //declare suits
      var suits = ['hearts', 'spades', 'diamonds', 'clubs'];
      //declare values/rank
      var ranks = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

      //for loop for suits and ranks to be appended to each card
      for (var i = 0; i < suits.length; i++) {
        console.log(suits[i]);
        for (var j = 0; j < ranks.length; j++) {
          this.deck.push(new Card(ranks[j], suits[i]));
        }
      }
    }; //end of make deck function


  //Fisher yates shuffle function to shuffle the deck
  this.shuffle = function() {
    for(i = this.deck.length - 1; i > 0; i--){
      j = Math.floor(Math.random() * (i + 1));
      temp = this.deck[i];
      this.deck[i] = this.deck[j];
      this.deck[j] = temp;
    }
    return this.deck;
  } //end shuffle function

}; //end of deck constructor function

var deck1 = new Deck();
deck1.makeDeck();
deck1.shuffle();
console.log(deck1.deck);


//____________________________________________________________________

  //create player object
  var player = {
      hand: [],

    //method to return value of hand
    score: function(){
      var sum = 0;
      //using for loop to iterate through array that is the length of thr hand
      for (var i = 0; i < this.hand.length; i++) {
        sum += this.hand[i].rank;
      } //end for loop
      return sum;
    }, //end of score function

    //method to hit another card to deck
    hit: function(){
      //while score is less than 17
      // while (this.score() < 17) {
        //declares hitDeck and takes last card object from deck
        var nextCard = deck1.deck.pop();
        //pushed card into the array hand
        this.hand.push(nextCard);
        //what's happening below
        console.log(this.hand);
    },

    bust: function() {
      if (this.score() > 21) { //if score is over 21
        return true; //return true, the player bust
      };
      //if cardVal is under 21 return false
      return false;
    },
    //method to reset hand
    reset: function(){ //method to reset hand
      this.hand.length = 0; //hand at play resets to 0
      document.getElementById('playerScore').innerHTML = ''; //get text of scoreboard with the score of play to change/update
    },

    showHand: function(){ //method to show hand value of player
      document.getElementById('playerScore').innerHTML = this.score();

    }
 }; //end of player object

//create dealer object

  var dealer = {
      hand: [],

      score: function(){ //show value of the whole hand

        var sum = 0; //set sum to 0
        //iterate through array length that makes the hand
        for (var i = 0; i < this.hand.length; i++) {
          //sum is the score of hand
          sum += this.hand[i].value;
        } //end for loop
        return sum;
      },

      hit: function(){
        //while dealers hand value is under 17 dealer must continue to hit
        while (this.score() < 17) {
          //grab last card from deck
          var hitCard = mainDeck.deck.pop();
          //push card into arrary for hand
          this.hand.push(hitCard);
          //what's happening here?
          console.log(this.hand);
        }
      },

      hitStart: function() {
        //grab last card from deck
        var nextCard = deck1.deck.pop();
        //take card and put it inot array in hand
        this.hand.push(nextCard);
        //what's happening below
        console.log(this.hand);
      },

      bust: function(){
        if (this.score() > 21) {
          return true;
        };
        return false;
      },

      reset: function(){ //dealer reset method
        this.hand.length = 0;
        document.getElementById('dealerScore').innerHTML = '';
      },

      showHand: function(){ //displays dealers hand
        document.getElementById('dealerScore').innerHTML = this.score();
      },
  }; //end of dealer object

//bank object

  var bank = {
    //method to make bank reflect bets
    bet: function() {
      //declare what will be value in input box
      var betAmt = document.getElementById('betAmt').value;
      //declare variable to grab bank's inner text
      var newBank = document.getElementById('bankDisplay').innerHTML = newBank - betAmt;
    },
    //method to reflect the winning hand
    winBet: function() {
      //betAmt will convert strings back into numbers for winning bet
      var betAmt = parseInt(document.getElementById('betAmt').value);
      //grab bank's innerHTML to display the score
      var newBank = parseInt(document.getElementById('bankDisplay').innerHTML);
      //innerHTML should reflect updated bank amount for displays
        document.getElementById('bankDisplay').innerHTML = newBank + betAmt * 2;

    },
    //method for bank to reflect the bet tht was made
    makeBet: function() {
      //convert strings back into numbers
      var betAmt = parseInt(document.getElementById('betAmt').value);
      //declaring variable to grab banks innerHTML
      var newBank = parseInt(document.getElementById('bankDisplay').innerHTML);
      //innerHTML will reflect updated bank score and display that to player
        document.getElementById('bankDisplay').innerHTML = newBank + betAmt;

    },
    //method to clear the input box
    clearInputBox: function() {
      //grab input box and clear it
      var box = document.getElementById('betAmt');
        box.value = '';
    }



  };

// ________________DOM_______________________

//window onload init
$(function(){

  player.hit();
  player.hit();
  //dealer starts with one card visible to the player
  dealer.hitStart();
  //display hand
  player.showHand();
  dealer.showHand();
  //add click function to bet button
  $('#bet').on('click', function() {
    //calling on bet method from bank object
    bank.bet();
    //hide bet button
    document.getElementById('bet').style.visibility = 'hidden';
  }) //end of bet on click function

  $('#hit').on('click', function(){
    player.hit();
    player.showHand();
    if (player.bust()) {
      alert("Bust, you lose!");
      player.reset();
      dealer.reset();
      bank.clearInputBox();
      document.getElementById('bet').style.visibility = 'visible';
      dealer.hitStart();
    }
  }) //end of hit on click

  $('#stand').on('click', function(){
    dealer.hit();
    if(dealer.bust()){
      dealer.showHand();
      bank.winBet();
      alert("You win, the dealer busted! yay!");
      player.reset();
      dealer.reset();
      document.getElementById('bet').style.visibility = 'visible';
      dealer.hitStart();
    } else if (player.score() === dealer.score()){
      dealer.displayHand();
      bank.makeBet();
      alert("it's a tie!");
      player.reset();
      dealer.reset();
      bank.clearInputBox();
      document.getElementById('bet').style.visibility = 'visibile';
      dealer.hitStart();
    } else if (player.score() > dealer.score()) {
      dealer.showHand();
      bank.winBet();
      alert("You win!");
      player.reset();
      dealer.reset();
      bank.clearInputBox();
      document.getElementById('bet').style.visibility = 'visibile';
      dealer.hitStart();
    } else if (player.score() < dealer.score());
      dealer.showHand();
      alert("You lose!");
      player.reset();
      dealer.reset();
      bank.clearInputBox();
      document.getElementById('bet').style.visibility = 'visibile';
      dealer.hitStart();
  }) //end of onclick function 



});















// });

//var cards = [
//   {name: 'twoDiamonds', value: 2, img: 'img/2_of_ diamonds.jpeg', suit: 'diamonds'},
//   {name: 'threeDiamonds', value: 3, img: 'img/3_of_diamonds.png', suit: 'diamonds'},
//   {name: 'fourDiamons', value: 4, img: 'img/4_of_diamonds.png', suit: 'diamonds'},
//   {name: 'fiveDiamonds', value: 5, img: 'img/5_of_diamonds.png', suit: 'diamonds'},
//   {name: 'sixDiamonds', value: 6, img: 'img/6_of_diamonds.png', suit: 'diamonds'},
//   {name: 'sevenDiamonds', value: 7, img: 'img/7_of_diamonds.png', suit: 'diamonds'},
//   {name: 'eightDiamonds', value: 8, img: 'img/8_of_diamonds.png', suit: 'diamonds'},
//   {name: 'nineDiamonds', value: 9, img: 'img/9_of_diamonds.png', suit: 'diamonds'},
//   {name: 'tenDiamonds', value: 10, img: 'img/10_of_diamonds.png', suit: 'diamonds'},
//   {name: 'jackOfDiamonds', value: 10, img: 'img/jack_of_diamonds.png', suit: 'diamonds' },
//   {name: 'queenOfDiamonds', value: 10, img: 'img/queen_of_diamonds.png', suit: 'diamonds'},
//   {name: 'kingOfDiamonds', value: 10, img: 'img/king_of_diamonds', suit: 'diamonds'},
//   {name: 'aceOfDiamonds', value: 11, img: 'img/ace_of_diamonds.png', suit: 'diamonds'},
//   {name: 'twoHearts', value: 2, img: 'img/2_of_hearts.png', suit: 'hearts'},
//   {name: 'threeHearts', value: 3, img: 'img/3_of_hearts.png', suit: 'hearts'},
//   {name: 'fourHearts', value: 4, img: 'img/4_of_hearts.png', suit: 'hearts'},
//   {name: 'fiveHearts', value: 5, img: 'img/5_of_hearts.png', suit: 'hearts'},
//   {name: 'sixHearts', value: 6, img: 'img/6_of_hearts.png', suit: 'hearts'},
//   {name: 'sevenHearts', value: 7, img: 'img/7_of_hearts.png', suit: 'hearts'},
//   {name: 'eightHearts', value: 8, img: 'img/8_of_hearts.png', suit: 'hearts'},
//   {name: 'nineHearts', value: 9, img: 'img/9_of_hearts.png', suit: 'hearts'},
//   {name: 'tenHearts', value: 10, img: 'img/10_of_hearts.png', suit: 'hearts'},
//   {name: 'jackOfHearts', value: 10, img: 'img/jack_of_hearts.png', suit: 'hearts'},
//   {name: 'queenOfHearts', value: 10, img: 'img/queen_of_hearts.png', suit: 'hearts'},
//   {name: 'kingOfHearts', value: 10, img: 'img/king_of_hearts.png', suit: 'hearts'},
//   {name: 'aceOfhearts', value: 11, img: 'img/ace_of_hearts.png', suit: 'hearts'},
//   {name: 'twoSpades', value: 2, img: 'img/2_of_spades.png', suit: 'spades'},
//   {name: 'threeSpades', value: 3, img: 'img/3_of_spades.png', suit: 'spades'},
//   {name: 'fourSpades', value: 4, img: 'img/4_of_spades.png', suit: 'spades'},
//   {name: 'fiveSpades', value: 5, img: 'img/5_of_spades.png', suit: 'spades'},
//   {name: 'sixSpades', value: 6, img: 'img/6_of_spades.png', suit: 'spades'},
//   {name: 'sevenSpades', value: 7, img: 'img/7_of_spades.png', suit: 'spades'},
//   {name: 'eightSpades', value: 8, img: 'img/8_of_spades.png', suit: 'spades'},
//   {name: 'nineSpades', value: 9, img: 'img/9_of_spades.png', suit: 'spades'},
//   {name: 'tenSpades', value: 10, img: 'img/10_of_spades.png', suit: 'spades'},
//   {name: 'jackOfSpades', value: 10, img: 'img/jack_of_spades.png', suit: 'spades' },
//   {name: 'queenOfSpades', value: 10, img: 'img/queen_of_spades.png', suit: 'spades'},
//   {name: 'kingOfSpades', value: 10, img: 'img/king_of_spades.png', suit: 'spades'},
//   {name: 'aceOfSpades', value: 10, img: 'img/ace_of_spades.png', suit: 'spades'},
//   {name: 'twoClubs', value: 2, img: 'img/2_of_clubs.png', suit: 'clubs'},
//   {name: 'threeClubs', value: 3, img: 'img/3_of_clubs.png', suit: 'clubs'},
//   {name: 'fourClubs', value: 4, img: 'img/4_of_clubs.png', suit: 'clubs'},
//   {name: 'fiveClubs', value: 5, img: 'img/5_of_clubs.png', suit: 'clubs'},
//   {name: 'sixClubs', value: 6, img: 'img/6_of_clubs.png', suit: 'clubs'},
//   {name: 'sevenClubs', value: 7, img: 'img/7_of_clubs.png', suit: 'clubs'},
//   {name: 'eightClubs', value: 8, img: 'img/8_of_clubs.png', suit: 'clubs'},
//   {name: 'nineClubs', value: 9, img: 'img/9_of_clubs.png', suit: 'clubs'},
//   {name: 'tenClubs', value: 10, img: 'img/10_of_clubs.png', suit: 'clubs'},
//   {name: 'jackOfClubs', value: 10, img: 'img/jack_of_clubs.png', suit: 'clubs' },
//   {name: 'queenOfClubs', value: 10, img: 'img/queen_of_clubs.png', suit: 'clubs'},
//   {name: 'kingOfClubs', value: 10, img: 'img/king_of_clubs.png', suit: 'clubs'},
//   {name: 'aceOfClubs', value: 11, img: 'img/ace_of_clubs.png', suit: 'clubs'},
// ];
