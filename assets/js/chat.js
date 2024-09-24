document.getElementById('sendMessageButton').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const chatMessages = document.getElementById('chatMessages');
    
    const newMessage = messageInput.value.trim();

    if (newMessage) {
        // Crear el nuevo mensaje y agregarlo al chat
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'sender', 'bg-primary', 'text-white', 'p-2', 'rounded', 'mb-2');
        messageElement.textContent = newMessage;
        
        // Agregar el nuevo mensaje al contenedor de mensajes
        chatMessages.appendChild(messageElement);
        
        // Limpiar el campo de texto
        messageInput.value = '';
        
        // Hacer scroll hasta el final del chat
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
