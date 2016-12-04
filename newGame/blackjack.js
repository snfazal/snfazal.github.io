//Blackjack Game WDI Remote Matrix GA --Sophia Fazal

//Deck object will all 52 cards inside of it
var deck = [
  {name: 'twoDiamonds', value: 2, suit: 'diamonds'},
  {name: 'threeDiamonds', value: 3, suit: 'diamonds'},
  {name: 'fourDiamons', value: 4, suit: 'diamonds'},
  {name: 'fiveDiamonds', value: 5, suit: 'diamonds'},
  {name: 'sixDiamonds', value: 6, suit: 'diamonds'},
  {name: 'sevenDiamonds', value: 7, suit: 'diamonds'},
  {name: 'eightDiamonds', value: 8, suit: 'diamonds'},
  {name: 'nineDiamonds', value: 9, suit: 'diamonds'},
  {name: 'tenDiamonds', value: 10, suit: 'diamonds'},
  {name: 'jackOfDiamonds', value: 10, suit: 'diamonds' },
  {name: 'queenOfDiamonds', value: 10, suit: 'diamonds'},
  {name: 'kingOfDiamonds', value: 10, suit: 'diamonds'},
  {name: 'aceOfDiamonds', value: 11, suit: 'diamonds'},
  {name: 'twoHearts', value: 2, suit: 'hearts'},
  {name: 'threeHearts', value: 3, suit: 'hearts'},
  {name: 'fourHearts', value: 4, suit: 'hearts'},
  {name: 'fiveHearts', value: 5, suit: 'hearts'},
  {name: 'sixHearts', value: 6, suit: 'hearts'},
  {name: 'sevenHearts', value: 7, suit: 'hearts'},
  {name: 'eightHearts', value: 8, suit: 'hearts'},
  {name: 'nineHearts', value: 9, suit: 'hearts'},
  {name: 'tenHearts', value: 10, suit: 'hearts'},
  {name: 'jackOfHearts', value: 10, suit: 'hearts' },
  {name: 'queenOfHearts', value: 10, suit: 'hearts'},
  {name: 'kingOfHearts', value: 10, suit: 'hearts'},
  {name: 'aceOfhearts', value: 11, suit: 'hearts'},
  {name: 'twoSpades', value: 2, suit: 'spades'},
  {name: 'threeSpades', value: 3, suit: 'spades'},
  {name: 'fourSpades', value: 4, suit: 'spades'},
  {name: 'fiveSpades', value: 5, suit: 'spades'},
  {name: 'sixSpades', value: 6, suit: 'spades'},
  {name: 'sevenSpades', value: 7, suit: 'spades'},
  {name: 'eightSpades', value: 8, suit: 'spades'},
  {name: 'nineSpades', value: 9, suit: 'spades'},
  {name: 'tenSpades', value: 10, suit: 'spades'},
  {name: 'jackOfSpades', value: 10, suit: 'spades' },
  {name: 'queenOfSpades', value: 10, suit: 'spades'},
  {name: 'kingOfSpades', value: 10, suit: 'spades'},
  {name: 'aceOfSpades', value: 10, suit: 'spades'},
  {name: 'twoClubs', value: 2, suit: 'clubs'},
  {name: 'threeClubs', value: 3, suit: 'clubs'},
  {name: 'fourClubs', value: 4, suit: 'clubs'},
  {name: 'fiveClubs', value: 5, suit: 'clubs'},
  {name: 'sixClubs', value: 6, suit: 'clubs'},
  {name: 'sevenClubs', value: 7, suit: 'clubs'},
  {name: 'eightClubs', value: 8, suit: 'clubs'},
  {name: 'nineClubs', value: 9, suit: 'clubs'},
  {name: 'tenClubs', value: 10, suit: 'clubs'},
  {name: 'jackOfClubs', value: 10, suit: 'clubs' },
  {name: 'queenOfClubs', value: 10, suit: 'clubs'},
  {name: 'kingOfClubs', value: 10, suit: 'clubs'},
  {name: 'aceOfClubs', value: 11, suit: 'clubs'},
]


//Empty arrays declared for dealer and player to dealt into the game. These should be global variables so there is no scoping issue in the future.
    //sets up dealer
    var dealerHand = [];
    //sets of player
    var playerHand = [];

//Function used to deal one new card for the player from the deck, with an image appended to the card. #2
  function dealCard(hand, element, nextCard) {
    //one random card chosen from the deck
    var card = deck[Math.floor(Math.random() * deck.lenth)];
    //next card off deck is above
    deck.pop(card);
    //card pushed on top of hand
    hand.push(card);
    //assign image url tag to variable{
  }
    //image url appends the element(image) onto next card waiting to be chosen

  //function to calculate points total in hand at play for player and dealer
    //define sum
  function calculateValue(hand) {
    var sum = 0;
    //for loop to count all cards through hand length
    for (var i=0; i < hand.length; i++) {
      //cards in the hand are
      var card = hand[i];
      //sumed with a method that will calc their value
      sum = sum + card.value;
    }
    //and return the sum of their hand
    return sum;
}

//Function that updates the players bankroll #1
function updatedBank() {
  //grabs money and adds the players money to the bankroll and shows the updated value
  $('#money').text('Bankroll: $' + playerMoney);
}

  //Fuction checking if player or dealer BUST. #4
  function checkForBust() {
  //Depending on if the player or dealer busts, a winner will be declared #5
    //the points of the player will be calculated by the value of cards in the players hand
    var playerScore = calculateValue(playerHand);
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
      playerMonday+=10;
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

      checkForBust();
    });

    $('#standButton').click(function(){
      var dealerScore = calculateValue(dealerHand);
      while (dealerPoints < 17) {
        dealCard(dealerHand, '#dealerHand');
        dealerPoints = calculateValue(dealerHand);
      }
      if (checkForBust() === false) {
        var playerScore = calculateValue(playerHand);
        dealerScore = calculateValue(dealerHand);
        if (playerScore > dealerScore) {
          $('#messages').text('You beat the dealer, so you win! ');
          playerMoney +=10;
          playerMonday +=10;
          updateBank();
          $('#hitButton').prop('disabled', true);
          $('#standButton').prop('disabled', true);
        } else if (playerScore === dealerScore) {
          $('messages').text('aww man! you tied the dealer ');
          updateBank();
          $('#hitButton').prop('disabled', true);
          $('#standButton').prop('disabled', true);
        } else {
          $('#messages').text('You Lost!');
          $('#hitButton').prop('disabled', true);
          $('#standButton').prop('disabled', true);
          }
        }
      });

    });







  // });

  // //Function that updates the players bankroll #1
  // function updatedBank() {
  //   //grabs money and adds the players money to the bankroll and shows the updated value
  //   $('#money').text('Bankroll: $' + playerMoney);
  // }
