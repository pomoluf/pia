/* Minimal shell: append bubbles locally; no backend */
(function () {
  const chat = document.getElementById('chat');
  const input = document.getElementById('input');
  const send = document.getElementById('send');

  function addBubble(role, text) {
    const row = document.createElement('div');
    row.className = 'msg msg-' + role;
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.textContent = text || '';
    row.appendChild(bubble);
    chat.appendChild(row);
    chat.scrollTop = chat.scrollHeight;
  }

  function submit() {
    const text = (input.value || '').trim();
    if (!text) return;
    addBubble('user', text);
    input.value = '';
    addBubble('assistant', '');
  }

  send.addEventListener('click', submit);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') submit();
  });
})();
