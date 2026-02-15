// HTML ના એલિમેન્ટ્સ સિલેક્ટ કરો
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginForm = document.getElementById('loginForm');

// 1. જ્યારે યુઝરનેમ ફિલ્ડમાં 'Enter' કી દબાવવામાં આવે
usernameInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // ફોર્મ સબમિટ થતું અટકાવવા
        
        // જો યુઝરનેમ ખાલી ન હોય તો પાસવર્ડ ફિલ્ડ પર focus કરો
        if (usernameInput.value.trim() !== "") {
            passwordInput.focus(); 
        }
    }
});

// 2. જ્યારે યુઝરનેમ ફિલ્ડ પરથી ફોકસ હટી જાય (Blur Event)
usernameInput.addEventListener('blur', function() {
    // જો યુઝરનેમ ખાલી ન હોય અને પાસવર્ડ ફિલ્ડ ખાલી હોય તો જ પાસવર્ડ પર ફોકસ કરો
    if (usernameInput.value.trim() !== "" && passwordInput.value.trim() === "") {
        // નાનકડો ડીલે (delay) આપીએ જેથી માઉસ ક્લિકમાં તકલીફ ન પડે
        setTimeout(() => {
            passwordInput.focus();
        }, 10);
    }
});

// ફોર્મ સબમિટ કરવા માટેનું લોજિક
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (usernameInput.value.trim() === "") {
        alert("Please enter Username!");
        usernameInput.focus();
    } else if (passwordInput.value.trim() === "") {
        alert("Please enter Password!");
        passwordInput.focus();
    } else {
        alert("Login Successful!");
        loginForm.reset(); // ફોર્મ રીસેટ કરો
        usernameInput.focus(); // ફરીથી પહેલા ફિલ્ડ પર ફોકસ લાવો
    }
});
