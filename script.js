document.querySelector('.signup-form').addEventListener('submit', function(event) {
    const password = document.querySelector('input[name="kode"]').value;
    const repeatPassword = document.querySelector('input[name="gentag-kode"]').value;

    if (password !== repeatPassword) {
    event.preventDefault();
    alert('Adgangskoderne matcher ikke!');
}
});