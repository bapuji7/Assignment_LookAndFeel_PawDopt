// Define the credentials
const validCredentials = {
    email: "demo@gmail.com",
    password: "123",
  };
  
  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the email and the password
    const enteredEmail = document.querySelector('input[name="email"]').value;
    const enteredPassword = document.querySelector('input[name="password"]').value;
  
    // Check if credentials are matching or not 
    if (
      enteredEmail === validCredentials.email &&
      enteredPassword === validCredentials.password
    ) {
      // If credentials match, redirect to a new page (e.g., dashboard.html)
      window.location.href = "../pages/user.html";
    } else {
      // If credentials do not match, display an error message
      alert("Invalid email or password. Please try again.");
    }
  }
  
  // Add event listener to the login form
  document.querySelector("form").addEventListener("submit", handleFormSubmit);
  