var cards = ['JC.gif', 'JD.gif', 'JH.gif', 'JS.gif', 'KC.gif', 'KD.gif', 'KH.gif', 'KS.gif', 'N1.gif', 'N2.gif', 'QC.gif', 'QD.gif', 'QH.gif', 'QS.gif'];
var current = null;

//autorun javascript
(function() {

  // Display initial cards
  displayCard();
  
})();

function displayCard() {
	//duplicating array - from 14 items to 28 items
	cards = cards.concat(cards);

	var length = cards.length;
	cards = shuffle(cards);

	// Add cards to screen
    var html = '';
    for (var i = 0; i < length; i++) {
        html += '<div class="grid"><div class="card" data-name="' + cards[i] + '" onclick="flip(this)">' +
        '<div class="front"><img src="img/back.gif"/></div>' +
        '<div class="back"><img src="img/' + cards[i] + '"/></div></div></div>';
    };
    $('.content').html(html);
}

// Flip card
function flip(card) {
    $(card).toggleClass('flipped');

    if (!current) {
    	current = $(card);
    } else {
    	console.log(current.attr('data-name'));
    	console.log($(card).attr('data-name'));
    	if (current.attr('data-name') != $(card).attr('data-name')) {
    		//different
    		document.getElementById('incorrect-sound').play();
    		setTimeout(function() {
    			current.toggleClass('flipped');
    			$(card).toggleClass('flipped');
    			current = null;
    		}, 500);
    		
    	} else {
    		//equalize'
    		document.getElementById('correct-sound').play();
    		setTimeout(function() {
    			current.css('opacity', '0');
    			$(card).css('opacity', '0');
    			current = null;
    		}, 500);
    	}
    }
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