<?php
// Allow only POST requests
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
    exit;
}

// Sanitize and Validate Input Function
function sanitize($data) {
    return htmlspecialchars(strip_tags(trim($data)));
}

// Initialize response array
$response = ["status" => "error", "message" => "Something went wrong. Please try again."];

// Collect and sanitize inputs
$name = isset($_POST['name']) ? sanitize($_POST['name']) : '';
$email = isset($_POST['email']) ? sanitize($_POST['email']) : '';
$phone = isset($_POST['phone']) ? sanitize($_POST['phone']) : '';
$message = isset($_POST['message']) ? sanitize($_POST['message']) : '';

// Validate fields
if (empty($name) || empty($email) || empty($phone) || empty($message)) {
    $response['message'] = "All fields are required.";
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $response['message'] = "Invalid email format.";
} elseif (!preg_match('/^\d{10}$/', $phone)) {
    $response['message'] = "Phone number should be 10 digits.";
} else {
    // Email setup
    $to = "admin@example.com"; // Replace with actual recipient's email
    $subject = "New Contact Us Message from $name";
    $emailMessage = "
    Name: $name\n
    Email: $email\n
    Phone: $phone\n
    Message: \n$message
    ";

    // Set headers
    $headers = "From: $email" . "\r\n" . "Reply-To: $email" . "\r\n";

    // Send email and update response on success
    if (mail($to, $subject, $emailMessage, $headers)) {
        $response['status'] = "success";
        $response['message'] = "Thank you, $name! Your message has been sent.";
    } else {
        $response['message'] = "Failed to send your message. Please try again later.";
    }
}

// Return JSON response
header('Content-Type: application/json');
echo json_encode($response);
exit;
?>
