
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Merci pour votre message d\'encouragement !');
});

document.addEventListener('DOMContentLoaded', function () {
  let visits = localStorage.getItem('visits') || 0;
  visits++;
  localStorage.setItem('visits', visits);
  document.getElementById('visitCount').innerText = 'Nombre de visiteurs : ' + visits;
});

document.getElementById('searchInput').addEventListener('input', function() {
  const filter = this.value.toLowerCase();
  document.querySelectorAll('.section').forEach(section => {
    const text = section.innerText.toLowerCase();
    section.style.display = text.includes(filter) ? '' : 'none';
  });
});
