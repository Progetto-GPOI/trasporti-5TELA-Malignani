<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bus";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $connection = new mysqli($servername, $username, $password, $dbname);

  if ($connection->connect_error) {
    die($connection->connect_error);
  }

  $via = $_POST['via'];

  $query_pensiline = "ALTER TABLE pensiline ADD $via VARCHAR(10)";
  if ($connection->query($query_pensiline) === TRUE) {
  } else {
    echo $connection->error;
  }
  $connection->close();
}

header("Location: inserimento_pensiline.html");
exit
?>