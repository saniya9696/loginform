document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("loginForm");  // Select the form by ID
  
  form.addEventListener("submit", function(e) {
    e.preventDefault();  // Prevent the form from submitting automatically

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validate if both fields are filled
    if (username === "" || password === "") {
      alert("⚠️ Please enter both username and password.");
      return;  // Stop further code execution
    }

    // Dummy login check for username and password
    if (username === "sania" && password === "1234") {
      alert("✅ Login successful!");
      // Redirect or submit the form if you want to continue to another page
      window.location.href = "dashboard.html";  // Replace with the page you want to redirect to
    } else {
      alert("❌ Invalid username or password.");
    }
  });
});
