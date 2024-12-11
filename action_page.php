<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = htmlspecialchars($_POST['navn']); // Beskyt mod XSS
    $password = htmlspecialchars($_POST['kode']); // Beskyt mod XSS

    // håndtere brugerens indtastning her
    // validere dem.
    echo "Brugernavn: $username<br>";
    echo "Adgangskode: $password<br>";
}

