var cards = ['JC.gif', 'JD.gif', 'JH.gif', 'JS.gif', 'KC.gif', 'KD.gif', 'KH.gif', 'KS.gif', 'N1.gif', 'N2.gif', 'QC.gif', 'QD.gif', 'QH.gif', 'QS.gif'];

//autorun javascript
(function() {

  // Display initial cards
  displayCard();
  
})();

function displayCard() {
	var length = cards.length;
	cards = shuffle(cards);

	// Add cards to screen
    var html = '';
    for (var i = 0; i < length; i++) {
        html += '<div class="grid"><div class="card" data="' + cards[i] + '" onclick="flip(this)">' +
        '<div class="front"><img src="img/back.gif"/></div>' +
        '<div class="back"><img src="img/' + cards[i] + '"/></div></div></div>';
    };
    $('.content').html(html);
}

// Flip card
function flip(card) {	
    $(card).toggleClass('flipped');
}

//Shuffle items in array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}