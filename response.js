// response.js

// Function to get the bot's response based on the user's message
function getBotResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();

    if (greetingIntent(lowerCaseMessage)) {
        return 'Hello! How can I assist you today?';
    } else if (helpIntent(lowerCaseMessage)) {
        return 'I’m here to help. Please specify your query!';
    } else if (farewellIntent(lowerCaseMessage)) {
        return 'Goodbye! Have a great day!';
    } else {
        return 'Sorry, I didn’t understand that. Could you rephrase?';
    }
}

// Example intents for basic bot responses
function greetingIntent(message) {
    const greetings = ['hello', 'hi', 'hey'];
    return greetings.some((greet) => message.includes(greet));
}

function helpIntent(message) {
    const helpWords = ['help', 'assist', 'support'];
    return helpWords.some((word) => message.includes(word));
}

function farewellIntent(message) {
    const farewells = ['bye', 'goodbye', 'see you'];
    return farewells.some((farewell) => message.includes(farewell));
}
