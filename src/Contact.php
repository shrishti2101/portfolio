<?php
// if ($_SERVER["REQUEST_METHOD"] == "POST"){
//     $name = $_POST['name'];
//     $email = $_POST['email'];
//     $message = $_POST['message'];
    

//     $to = "shrishtijain2101@gmail.com";

//     $subject = "New Contact Form Submission from $name";

//     $email_body = "Name: $name\n";
//     $email_body .= "Email: $email\n";
//     $email_body .= "Message:\n$message\n";

//     $headers = "From: $email\r\n";
//     $headers .= "Reply-To: $email\r\n";



//     if (mail($to, $subject, $email_body, $headers)) {
//         echo "Thank you for your message. It has been sent.";
//     } else {
//         $error = error_get_last()['message'];
//         echo "Sorry, there was an error sending your message. Please try again later.";
//     }
// } 
// else {
//     echo "Invalid request.";
// }
<?php
    mail('shrishtijain2101@gmail.com', $_POST['name'], $_POST['message']);
?>
<p>Your email has been sent.</p>
?>