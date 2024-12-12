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




// When the user clicks on the button, toggle between hiding and showing the dropdown content
function myFunction(zoneIndex) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
        if (i === zoneIndex) {
            dropdowns[i].classList.toggle("show");
        } else {
            dropdowns[i].classList.remove("show");
        }
    }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
