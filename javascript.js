const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

// Function to handle user input and send message
function sendMessage() {
    const message = userInput.value.trim();
    if (message === '') return;

    // Append user message
    appendMessage('user-message', message);

    // Simulate bot response
    setTimeout(() => {
        const botMessage = getBotResponse(message);
        appendMessage('bot-message', botMessage);
    }, 1000); // Simulate 1 second delay for bot response

    userInput.value = '';
}

// Function to append messages to the chat box
function appendMessage(className, message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', className);
    messageDiv.innerText = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Simulated bot response (You can modify this or connect to your backend)
function getBotResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes('hello')) {
        return 'Hello! How can I help you today?';
    } else if (lowerCaseMessage.includes('help')) {
        return 'Sure! What do you need help with?';
    } else {
        return 'I am still learning. Can you rephrase your question?';
    }
}

// Function to handle Enter key for input
function handleKey(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}
