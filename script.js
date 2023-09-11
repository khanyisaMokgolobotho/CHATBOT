// Example: Open the chatbot interface when the button is clicked
document.getElementById("chatbot-button").addEventListener("click", function () {
    // Replace with your code to show the chatbot interface
    alert("Chatbot button clicked!");
});

    // Get references to the button and chatbot interface
    const chatbotButton = document.getElementById("chatbot-button");
    const chatbotInterface = document.getElementById("chatbot-interface");

    // Add an event listener to toggle the chatbot interface
    chatbotButton.addEventListener("click", function () {
    if (chatbotInterface.style.display === "block") {
    chatbotInterface.style.display = "none";
} else {
    chatbotInterface.style.display = "block";
}
});
// Add your JavaScript code here
// Handle user input, send messages, and receive responses

// Example function to display a message in the chat
function displayMessage(message, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.className = sender === "user" ? "user-message" : "bot-message";
    messageDiv.textContent = message;
    document.getElementById("chatbot-messages").appendChild(messageDiv);
}

// Example function to simulate a bot response
function botResponse(userMessage) {
    displayMessage("YOU -> " + userMessage, "user");

    // Simulate a bot response (replace with your logic)
    const response = "Hi, I'm your chatbot. How can I assist you?";
    displayMessage("BOT -> " + response, "bot");
}

// Handle sending messages when the Send button is clicked
document.getElementById("send-button").addEventListener("click", function () {
    const userMessage = document.getElementById("user-input").value;
    if (userMessage.trim() !== "") {
        botResponse(userMessage);
        document.getElementById("user-input").value = "";
    }
});

// Handle sending messages when the Enter key is pressed in the input field
document.getElementById("user-input").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        const userMessage = document.getElementById("user-input").value;
        if (userMessage.trim() !== "") {
            botResponse(userMessage);
            document.getElementById("user-input").value = "";
        }
    }
});





