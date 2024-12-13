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



function toggleFrokostSpørgsmål(radioElement) {
    var frokostSpørgsmål = document.getElementById('frokost-spørgsmål');
    if (radioElement.value === 'Ja') {
        frokostSpørgsmål.style.display = 'block';
    } else {
        frokostSpørgsmål.style.display = 'none';
    }
}








document.getElementById('gemKnapp').addEventListener('click', gemData);

function gemData() {
    // Hent værdier fra input-felter
    const vname = document.getElementById('vname').value;
    const kontakt = document.getElementById('kontakt').value;
    const stande = document.getElementById('stande').value;
    const standholdere = document.getElementById('standholdere').value;
    const frokostSvar = document.querySelector('input[name="svar"]:checked').value;
    const frokostAntal = document.getElementById('antal').value;
    const farveValg = document.querySelector('input[name="svar"]:checked').value;
    const strømSvar = document.querySelector('input[name="svarr"]:checked').value;
    const beskrivStand = document.getElementById('beskriv').value;
    const aktivitet = document.getElementById('aktivitet').value;

    // Gem data (fx i lokal storage eller en database)
    const formData = {
        vname,
        kontakt,
        stande,
        standholdere,
        frokostSvar,
        frokostAntal,
        farveValg,
        strømSvar,
        beskrivStand,
        aktivitet
    };

    // Gem data i lokal storage (eksempel)
    localStorage.setItem('formData', JSON.stringify(formData));

    alert('Data gemt!');
}





