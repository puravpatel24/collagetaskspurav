document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // પેજ રિલોડ થતું અટકાવવા માટે
    event.preventDefault();

    // ઇનપુટ ફીલ્ડ્સ સિલેક્ટ કરો
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    // 1. Username ચેક કરો
    if (username.value.trim() === "") {
        alert("Please enter your username.");
        username.focus(); // Username પર ફોકસ લાવો
        return;
    }

    // 2. Email ચેક કરો
    if (email.value.trim() === "") {
        alert("Please enter your email.");
        email.focus(); // Email પર ફોકસ લાવો
        return;
    }

    // 3. Password ચેક કરો
    if (password.value.trim() === "") {
        alert("Please enter your password.");
        password.focus(); // Password પર ફોકસ લાવો
        return;
    }

    // જો બધું સાચું હોય
    alert("Registration Successful!");
    this.reset();
});
