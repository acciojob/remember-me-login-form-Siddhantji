//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const existingButton = document.getElementById('existing');

  // Check if user information is already stored in localStorage
  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  if (storedUsername && storedPassword) {
    existingButton.style.display = 'block';
  }

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('checkbox').checked;

    if (rememberMe) {
      // Store the username and password in localStorage
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      // Remove the stored username and password from localStorage
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }

    alert(`Logged in as ${username}`);
  });

  existingButton.addEventListener('click', function() {
    if (storedUsername) {
      alert(`Logged in as ${storedUsername}`);
    }
  });
});
