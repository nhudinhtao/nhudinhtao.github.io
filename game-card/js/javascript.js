var cards = ['JC.gif', 'JD.gif', 'JH.gif', 'JS.gif', 'KC.gif', 'KD.gif', 'KH.gif', 'KS.gif', 'N1.gif', 'N2.gif', 'QC.gif', 'QD.gif', 'QH.gif', 'QS.gif'];
var current = null;
var maxTime = remainingTime = 70;
var point = 0;
var numberCards = cards.length/2;
var intervalId = null;

//autorun javascript
(function() {

    //startGame();

    // Display initial cards
    displayCard();
  
})();

function displayCard() {
    cards = getRandom(cards, numberCards);
	//duplicating array - from 7 items to 14 items
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

    // Open begin modal
    openModal('begin');
}

function startGame() {
    point = 0;
    // Close modal
    closeModal();
    $('.btn-reset').css('opacity', '0');
    //close congras sound
    document.getElementById('congras-sound').load();
    //close lose sound
    document.getElementById('lose-sound').load();

    //play background sound
    document.getElementById('background-sound').play();

    // Start game
    var current = null;
    $('.card').css('pointer-events', 'auto');

    // Reset progressbar
    $('.progressbar').css('display', 'none');
    // Start progressbar
    remainingTime = maxTime;
    $('.progressbar').css('display', 'block');
    $('progress').val(100);
    intervalId = setInterval(function(){ 
        remainingTime--;
        $('progress').val(remainingTime / maxTime * 100);

        // Timeout => game over
        if (remainingTime == 0) {
            clearInterval(intervalId);
            openModal('lose');
            $('.btn-reset').css('opacity', '1');
            // Stop background music
            document.getElementById('background-sound').load();
            //close lose sound
            document.getElementById('lose-sound').play();
        }
    }, 1000);
}

// Flip card
function flip(card) {
    $(card).toggleClass('flipped');

    // Disable click this card
    $(card).css('pointer-events', 'none');

    if (!current) {
    	current = $(card);
    } else {
    	// Disable click all cards
        $('.card').css('pointer-events', 'none');

    	if (current.attr('data-name') != $(card).attr('data-name')) {
    		//different
    		document.getElementById('incorrect-sound').play();
	    	setTimeout(function() {
	    		current.toggleClass('flipped');
	    		$(card).toggleClass('flipped');
	    		current = null;
	    		$('.card').css('pointer-events', 'auto');
    		}, 500);
    		
    	} else {
    		//equalize
            point++;
    		document.getElementById('correct-sound').play();
    		setTimeout(function() {
    			current.css('opacity', '0').attr('onclick', '')
                .children().children('img').css('cursor', 'default');
    			$(card).css('opacity', '0').attr('onclick', '')
                .children().children('img').css('cursor', 'default');
    			current = null;

                // End game if enough point
                if (point == numberCards) {
                    console.log(intervalId);
                    clearInterval(intervalId);
                    // Reset progressbar
                    $('.progressbar').css('display', 'none');
                    openModal('win');
                    $('.btn-reset').css('opacity', '1');
                    // Stop background music
                    document.getElementById('background-sound').load();

                    //play congras sound
                    document.getElementById('congras-sound').play();
                } else {
                    // Enable click all cards
                    $('.card').css('pointer-events', 'auto');
                }
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

//get random n items in array
function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len;
    }
    return result;
}

function openModal(type) {
    $('.modal').hide();
    $('.modal.' + type).fadeIn();
}

function closeModal() {
    $('.modal').hide();
}