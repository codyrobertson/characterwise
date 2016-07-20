<?php

// Email address verification
function isEmail($email) {
	return filter_var($email, FILTER_VALIDATE_EMAIL);
}

if($_POST) {

    // Enter the email where you want to receive the notification when someone subscribes
    $emailTo = 'contact.azmind@gmail.com';

    $subscriber_email = addslashes(trim($_POST['email']));

    if( !isEmail($subscriber_email) ) {
        $array = array( 'valid' => 0, 'message' => 'Insert a valid email address!' );
        echo json_encode($array);
    }
    else {        
        $array = array( 'valid' => 1, 'message' => 'Thanks for your subscription!' );
        echo json_encode($array);

        // Send email
	    $subject = 'New Subscriber (elio)!';
	    $body = "You have a new subscriber!\n\nEmail: " . $subscriber_email;
        // uncomment this to set the From and Reply-To emails, then pass the $headers variable to the "mail" function below
	    //$headers = "From: ".$subscriber_email." <" . $subscriber_email . ">" . "\r\n" . "Reply-To: " . $subscriber_email;
	    mail($emailTo, $subject, $body);
    }

}

?>
