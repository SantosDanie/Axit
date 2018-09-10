<?php 

if (isset($_POST['submit'])) {
	$receiver = 'code4guate.santo@gmail.com';
	$name = $_POST['name'];
	$email = $_POST['email'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];

	$email_content = 'Name: ' . $name . "\nEmail: " . $email . "\nMessage: \n" . $message;

	if (!empty($name) && !empty($subject) && !empty($message)):

		if (filter_var($email, FILTER_VALIDATE_EMAIL) ) {

			$send = mail($receiver, $subject, $email_content);


		  	if ($send) {
		  		echo("The Email Was Successfully...");
		  	} else {
				echo("Error to send the Email\nPlease try again...");
			}

		} else {

		  if (empty($email)):
		  	echo("The Email is Empty.<br>Please write an email");
		  else:
		  	echo("' $email ' Is messing an '@'");
		  endif;

		}
		
	else:
		echo "Please fill all the field...";
	endif;
}

?>