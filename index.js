document.addEventListener("DOMContentLoaded", function () {
    
    const signUpForm = document.getElementById("sign-up")
    const message = document.getElementById("error_message")
    const alert = document.getElementById("alert")
    const password =   document.getElementById("password")
    const confirmPassword = document.getElementById("confirm_password");
    const passToggler = document.querySelector(".show");

    // Function to validate password 

    confirmPassword.addEventListener("input", function () {
        if (password.value === confirmPassword.value) {
            confirmPassword.style.border = "2px solid green"; // Passwords match, 
            message.innerText = "Password Match"
            message.style.color = "green"
            alert.style.display = "none"
        } else {
            confirmPassword.style.border = "2px solid red"; // Passwords don't match
            message.style.display = "block"; // Show error message
            alert.style.display = "none"
        }
    });

    //Password toggler effect

    passToggler.addEventListener("click", function () {
        if((password.type === "password") && (confirmPassword.type === "password")) {
            password.type = "text";
            confirmPassword.type = "text";
            passToggler.className = "fa-solid fa-eye";
        } 
        else {
            password.type = "password"
            confirmPassword.type = "password";
            passToggler.className = "fa-solid fa-eye-slash";
        }
    });

   // Check if all form fields are valid

    signUpForm.addEventListener("submit", function (e) {
        e.preventDefault();
        
        if (password.value === confirmPassword.value) {
            alert("Account Created!");
            window.location.reload();
        } else {
            // Form is not valid,
            alert("Please correct the form errors.");
        }
    });
});


