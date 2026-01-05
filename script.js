// 1. CONFIGURACIÓN DE LA FECHA
const eventDate = new Date('April 15, 2026 12:00:00').getTime();

// 2. CONTADOR
function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;
    if (distance < 0) return;

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = d < 10 ? '0' + d : d;
    document.getElementById('hours').innerText = h < 10 ? '0' + h : h;
    document.getElementById('minutes').innerText = m < 10 ? '0' + m : m;
    document.getElementById('seconds').innerText = s < 10 ? '0' + s : s;
}
setInterval(updateCountdown, 1000);

// 3. APERTURA DE INVITACIÓN
function openInvitation() {
    document.getElementById('envelope').classList.add('open');
    document.body.classList.remove('no-scroll');
    const video = document.querySelector('.hero-video');
    if (video) video.play();
    setTimeout(reveal, 500);
}

// 4. PREGUNTAS FRECUENTES (FAQ)
function toggleFaq(btn) {
    const item = btn.closest('.faq-item');
    document.querySelectorAll('.faq-item').forEach(el => {
        if (el !== item) el.classList.remove('active');
    });
    item.classList.toggle('active');
}

// 5. ANIMACIÓN AL HACER SCROLL
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) el.classList.add('active');
    });
}
window.addEventListener('scroll', reveal);
updateCountdown();