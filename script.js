// script.js

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

// Function to handle user input and send message
function sendMessage() {
    const message = sanitizeInput(userInput.value.trim());
    if (message === '') return;

    // Append user message
    appendMessage('user-message', message);

    // Simulate bot response
    setTimeout(() => {
        const botMessage = getBotResponse(message);
        appendMessage('bot-message', botMessage);
        document.querySelectorAll('.bot-message').forEach((msg) => msg.classList.add('active'));
    }, 1000); // Simulate 1 second delay for bot response

    userInput.value = '';
}

// Function to append messages to the chat box
function appendMessage(className, message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', className);
    messageDiv.innerText = message;
    chatBox.appendChild(messageDiv);
    scrollToBottom(chatBox);
}
