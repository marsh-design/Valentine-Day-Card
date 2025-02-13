document.getElementById('open-card').addEventListener('click', function() {
    document.querySelector('.front').classList.add('hidden');
    document.querySelector('.back').classList.remove('hidden');
  });