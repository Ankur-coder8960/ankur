document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // You can add your login logic here, for example, sending a request to a server.
    console.log("Username: " + username + ", Password: " + password);
});
