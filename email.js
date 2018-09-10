$(document).ready(function() {
	$('#form-contact').submit(function(event) {
		event.preventDefault();

		var name = $('#name-form').val();
		var email = $('#email-form').val();
		var subject = $('#subject-form').val();
		var message = $('#message-form').val();
		var submit = $('#submit-form').val();

		$('#message').load('email.php', {
			name: name,
			email: email,
			subject: subject,
			message: message,
			submit: submit

		}, function() {
			$('#message').fadeIn('slow').delay(1500).fadeOut('slow');

			if (name == "" && email == "" && subject == "" && message == "") {
				$('#name-form').addClass("error");    
				$('#email-form').addClass("error");
				$('#subject-form').addClass("error");
				$('#message-form').addClass("error");
			} else {
				if(name == "") {
					$('#name-form').addClass("error");
				} else if(email == "") {
					$('#email-form').addClass("error");
				} else if(subject == "") {
					$('#subject-form').addClass("error");
				} else if (message == "") {
					$('#message-form').addClass("error");
				}
			}

		});

		$('#name-form').val("");
		$('#email-form').val("");
		$('#subject-form').val("");
		$('#message-form').val("");

	});
});