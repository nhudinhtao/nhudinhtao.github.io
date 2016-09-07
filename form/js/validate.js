$('#form-register').on('submit', function() {
	var rval = true;
	if ($('#name').val().trim() == '') {
		$('#name').next('span').text('Name is required.');
		rval = rval && false;
	} else {
		$('#name').next('span').text('');
	}

	if ($('#email').val().trim() == '') {
		$('#email').next('span').text('Email is required.');
		rval = rval && false;
	} else if ($('#email').val().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/) == null) {
		$('#email').next('span').text('Wrong email format. Email should be test@test.com');
		rval = rval && false;
	} else {
		$('#email').next('span').text('');
	}

	if ($('#password').val().trim() == '') {
		$('#password').next('span').text('Password is required.');
		rval = rval && false;
	} else if ($('#password').val().trim().length < 6) {
		$('#password').next('span').text('Password has to longer 6 letters.');
		rval = rval && false;
	} else {
		$('#password').next('span').text('');
	}

	return rval;
});