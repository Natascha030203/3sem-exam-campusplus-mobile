document.querySelector('.signup-form').addEventListener('submit', function(event) {
    const password = document.querySelector('input[name="kode"]').value;
    const repeatPassword = document.querySelector('input[name="gentag-kode"]').value;

    if (password !== repeatPassword) {
    event.preventDefault();
    alert('Adgangskoderne matcher ikke!');
}
});


function indlosBilletten() {
    const knap = document.getElementById('indlos-knap');
    knap.textContent = 'Indløst'; // Skift tekst på knappen
    knap.classList.add('indlost'); // Tilføj ny styling
    knap.disabled = true; // Deaktiver knappen
    alert('Billetten er nu indløst!'); // Valgfri pop-up besked
}







