document.addEventListener("DOMContentLoaded", function () {
    // ... your existing code ...

    const chatbotButton = document.getElementById("chatbot-button");
    chatbotButton.addEventListener("click", toggleChatbot);

    function toggleChatbot() {
        const chatContainer = document.querySelector(".chat-container");
        chatContainer.classList.toggle("open");
    }
});





document.addEventListener("DOMContentLoaded", function () {
    const chatArea = document.getElementById("chat-area");
    const chatbox = document.getElementById("chatbox");

    chatbox.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        const userMessage = chatbox.value;
        chatbox.value = " ";

        appendMessage("YOU", userMessage);

        if (userMessage.toLowerCase().includes("hi")) {
            botReply("Hi, I'm SmooBot. How can I assist you?");
        } else {
            const randomResponse = ["I don't understand you!", "Could you please rephrase that?", "Sorry, I can't assist with that."];
            botReply(randomResponse[Math.floor(Math.random() * randomResponse.length)]);
        }
    }

    function botReply(message) {
        appendMessage("BOT", message);
    }

    function appendMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatArea.appendChild(messageElement);
        chatArea.scrollTop = chatArea.scrollHeight;
    }
});
