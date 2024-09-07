document.getElementById('greetButton').addEventListener('click', function() {
    const nameInput = document.getElementById('nameInput').value;
    const greetingMessage = document.getElementById('greetingMessage');
    const errorMessage = document.getElementById('errorMessage');
    
    if (nameInput.trim() === '') {
        errorMessage.textContent = "Please enter your name!";
        greetingMessage.textContent = '';
    } else {
        greetingMessage.textContent = `Hello, ${nameInput}! Welcome!`;
        errorMessage.textContent = '';
    }
});
