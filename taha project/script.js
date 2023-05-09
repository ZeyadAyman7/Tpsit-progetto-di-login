// Get the login form element
const loginForm = document.getElementById("loginForm");

// Add event listener for form submission
loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the entered email and number
  const emailField = document.getElementById("email");
  const numberField = document.getElementById("number");

  // Check if the email and number are valid
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const numberRegex = /^(011|010|012|015)\d{8}$/;

  const email = emailField.value.trim();
  const number = numberField.value.trim();

  // Validate email and number
  if (!validateEmail(email)) {
    alert("Invalid email . Please try again.");
    return;
  }
  if (!validateNumber(number)){
    alert("Invalid number. Please make sure that your number starts with 010 or 011 or 012 or 015 and followed by 8 numbers.");
  }

  // Successful login, redirect to a new page
  window.location.href = "the shop/index.html";

  // Function to validate email
  function validateEmail(email) {
    return emailRegex.test(email);
  }

  // Function to validate number
  function validateNumber(number) {
    return numberRegex.test(number);
  }
});
