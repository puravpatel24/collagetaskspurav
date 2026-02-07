document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const userTypeInput = document.getElementById('userType');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    const userTypeError = document.getElementById('userTypeError');
    const loginMessage = document.getElementById('loginMessage');

    // --- Simulated Database/Validation Logic ---
    const VALID_USER = "vtopuser";
    const VALID_PASS = "securepass123";

    function clearErrors() {
        usernameError.textContent = '';
        passwordError.textContent = '';
        userTypeError.textContent = '';
    }

    function displayError(element, message) {
        element.textContent = message;
    }

    function validateForm() {
        let isValid = true;
        clearErrors();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        const userType = userTypeInput.value;

        // 1. Username Validation
        if (username === "") {
            displayError(usernameError, "Username is required.");
            isValid = false;
        }

        // 2. Password Validation
        if (password === "") {
            displayError(passwordError, "Password is required.");
            isValid = false;
        } else if (password.length < 6) {
            displayError(passwordError, "Password must be at least 6 characters.");
            isValid = false;
        }

        // 3. User Type Validation
        if (userType === "") {
            displayError(userTypeError, "Please select a user type.");
            isValid = false;
        }
        
        return { isValid, username, password, userType };
    }

    function handleLogin(event) {
        event.preventDefault(); // Stop the form from submitting traditionally
        
        const { isValid, username, password, userType } = validateForm();
        loginMessage.className = 'feedback-message';
        loginMessage.textContent = '';

        if (!isValid) {
            loginMessage.textContent = "Please correct the errors above.";
            loginMessage.classList.add('failure');
            return;
        }

        // --- Simulated Authentication ---
        if (username === VALID_USER && password === VALID_PASS) {
            
            loginMessage.textContent = `Welcome ${username}! Redirecting to dashboard...`;
            loginMessage.classList.add('success');
            
            // In a real application, you would redirect here:
            // window.location.href = 'dashboard.html';
            
            // For demonstration, we simulate the dashboard view change:
            setTimeout(() => {
                document.querySelector('.login-container').innerHTML = `
                    <div class="success">
                        <h1>Welcome ${username}!</h1>
                        <p>Access Level: ${userType}</p>
                        <p>Successfully logged into the VTOP Dashboard.</p>
                    </div>
                `;
            }, 1500);

        } else {
            loginMessage.textContent = "Invalid username, password, or user type.";
            loginMessage.classList.add('failure');
            // Clear fields on failed login attempt (optional security measure)
            passwordInput.value = ''; 
        }
    }

    loginForm.addEventListener('submit', handleLogin);
});
