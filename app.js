
function sendMessage() {
    let userInput = document.getElementById("user-input");
    let chatBox = document.getElementById("chat-box");
    let message = userInput.value.trim();
    if (message === "") return;

    // message
    let userMessage = document.createElement("div");
    userMessage.className = "user-msg align-self-end mb-2";
    userMessage.innerText = message;
    chatBox.appendChild(userMessage);
    userInput.value = "";

    // response
    setTimeout(() => {
        let botMessage = document.createElement("div");
        botMessage.className = "bot-msg align-self-start mb-2";
        botMessage.innerText = getBotResponse(message);
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}
function getBotResponse(input) {
    let responses = {
        "hello": "Hi there! How can I help?",
        "hi": "Hello! How can I assist you today?",
        "how are you": "I'm just a bot, but I'm doing great! ",
        "bye": "Goodbye! Have a nice day!",
        "what is your name": "I'm a chatbot here to assist you!",
        "what can you do": "I can answer questions, chat with you, and provide information about Saylani SMIT courses!",
        "saylani smit": "Saylani SMIT (Saylani Mass IT Training) offers free IT courses to empower youth with digital skills. Visit: https://www.saylaniwelfare.com/en/smit",
        "saylani courses": "Saylani SMIT offers courses in Web Development, Python, AI, Graphic Design, Mobile App Development, and more! Check details here: https://www.saylaniwelfare.com/en/smit",
        "how to apply for saylani smit": "You can apply for Saylani SMIT courses by visiting their official website and filling out the online registration form: https://www.saylaniwelfare.com/en/smit",
        "web development course": "Saylani offers a Web Development course covering HTML, CSS, JavaScript, React, and more. More details here: https://www.saylaniwelfare.com/en/smit \n![Web Development](https://example.com/web-development-image.jpg)",
        "ai course": "Saylani's AI course teaches Machine Learning, Deep Learning, and Data Science concepts. More details: https://www.saylaniwelfare.com/en/smit \n![AI Course](https://example.com/ai-course-image.jpg)",
        "python course": "Saylani provides a Python course covering basic to advanced programming concepts. Learn more: https://www.saylaniwelfare.com/en/smit \n![Python Course](https://example.com/python-course-image.jpg)",
        "graphic design course": "Saylani offers a Graphic Design course covering Adobe Photoshop, Illustrator, and UI/UX design. More info: https://www.saylaniwelfare.com/en/smit \n![Graphic Design](https://example.com/graphic-design-image.jpg)",
        "mobile app development": "Saylani provides training in Mobile App Development using Flutter and React Native. Details: https://www.saylaniwelfare.com/en/smit \n![Mobile App Development](https://example.com/mobile-app-image.jpg)"
    };

    return responses[input.toLowerCase()] || "I'm not sure how to respond to that. You can check Saylani's courses here: https://www.saylaniwelfare.com/en/smit";
}
