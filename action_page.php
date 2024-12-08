<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = htmlspecialchars($_POST['navn']); // Beskyt mod XSS
    $password = htmlspecialchars($_POST['kode']); // Beskyt mod XSS

    // Din kode til at håndtere brugerens indtastning her
    // For eksempel kan du gemme dem i en database eller validere dem.
    echo "Brugernavn: $username<br>";
    echo "Adgangskode: $password<br>";
}

<?php
