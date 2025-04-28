// Popup functionality
window.onload = function() {
const popup = document.getElementById('popup');
const close = document.querySelector('.close');

popup.style.display = 'block';

close.onclick = function() {
popup.style.display = 'none';
}

window.onclick = function(event) {
if (event.target == popup) {
popup.style.display = 'none';
}
}
}

// Register form
document.getElementById('register-form').addEventListener('submit', function(e) {
e.preventDefault();
alert('Thank you for registering with Bright Minds Academy! 🎓 We will contact you soon.');
});
