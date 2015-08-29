<?php
$servername = "ec2-52-24-67-193.us-west-2.compute.amazonaws.com";
$username = "root";
$password = "7177925945";
$dbname = "Dogwax";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id, food FROM Test";
$result = $conn->query($sql);

$response[success] = true;
$response[data] = $result;

echo json_encode($result);

$conn->close();
?>
