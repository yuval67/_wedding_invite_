const openButton = document.getElementById('openInvite');
const cover = document.getElementById('cover');
const invitation = document.getElementById('invitation');

openButton.addEventListener('click', () => {
  cover.classList.remove('active');
  invitation.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const weddingDate = new Date('2027-07-28T19:00:00+03:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = Math.max(0, weddingDate - now);

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);
