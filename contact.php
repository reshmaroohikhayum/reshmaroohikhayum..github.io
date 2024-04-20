<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $message = trim($_POST["message"]);

    // Check if all fields are filled
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Set the recipient email address
        $to = "reshmaroohik97@gmail.com";
        // Set the subject of the email
        $subject = "New Message from Portfolio Contact Form";
        // Set the email body
        $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

        // Set additional headers
        $headers = "From: $name <$email>";

        // Send the email
        if (mail($to, $subject, $body, $headers)) {
            // Email sent successfully
            http_response_code(200);
            echo json_encode(array("message" => "Message sent successfully!"));
        } else {
            // Error sending email
            http_response_code(500);
            echo json_encode(array("message" => "Error sending message. Please try again later."));
        }
    } else {
        // Missing fields
        http_response_code(400);
        echo json_encode(array("message" => "All fields are required."));
    }
} else {
    // Method not allowed
    http_response_code(405);
    echo json_encode(array("message" => "Method not allowed."));
}
?>