const joinRoomBtn = document.querySelector('#join-room-btn');
const messageInput = document.querySelector('#message-input');
const roomInput = document.querySelector('#room-input');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = messageInput.value;
  const room = roomInput.value;

  if (message === '') return;

  displayMessage(message);

  messageInput.value = '';
});

joinRoomBtn.addEventListener('click', () => {
  const room = roomInput.value;
});

function displayMessage(message) {
  const messageBubble = document.createElement('div');
  messageBubble.textContent = message;
  document.getElementById('message-container').append(messageBubble);
}
