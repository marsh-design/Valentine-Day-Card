document.getElementById('generate-card').addEventListener('click', function() {
  const name = document.getElementById('name').value.trim();
  if (name) {
    document.querySelector('.welcome-screen').classList.add('hidden');
    document.querySelector('.card').classList.remove('hidden');
    document.getElementById('friend-name').textContent = name;
  } else {
    alert('Please enter your name!');
  }
});

document.getElementById('back').addEventListener('click', function() {
  document.querySelector('.card').classList.add('hidden');
  document.querySelector('.welcome-screen').classList.remove('hidden');
});