$(function(){

//grabb objects from bank in jquery

//create a card function


//create a card in order to pull first card from deck object
  var Card = function(name, value, suit, img) {
    this.name = name;
    this.value = value;
    this.suit = suit;
    this.img = img;

  };

  var Deck = function() {
    this.deck = [];
    this.makeDeck = function(){

    //}




//Deck object with all 52 cards inside of it

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

    for (var i = 0; i < cards.length; i++) {
      this.deck.push(new Card(cards[i]));
    },
  }
}; //end of makeDeck function

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


//deck should be shuffled before it is

//create player object


//create dealer object


//bank object


//


















})
