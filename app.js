// Navigation and Page Switching
document.addEventListener('DOMContentLoaded', function () {
    const navButtons = document.querySelectorAll('.nav-btn');
    const pages = document.querySelectorAll('.page');

    function showPage(pageId) {
        pages.forEach(p => p.classList.remove('active'));
        const target = document.getElementById(pageId + '-page');
        if (target) target.classList.add('active');

        navButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector(`[data-page="${pageId}"]`).classList.add('active');

        document.title = `MIST - ${pageId === 'home' ? 'Home' : pageId === 'glazing' ? 'Glazing MIST' : 'About Us'}`;
    }

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => showPage(btn.dataset.page));
    });

    showPage('home');
});

// Play Button
document.getElementById('play-button')?.addEventListener('click', () => {
    const msg = document.getElementById('success-message');
    if (msg.classList.contains('hidden')) {
        msg.classList.remove('hidden');
        msg.style.opacity = '0';
        requestAnimationFrame(() => {
            msg.style.transition = 'opacity 0.3s ease';
            msg.style.opacity = '1';
        });
    } else {
        msg.style.transition = 'opacity 0.3s ease';
        msg.style.opacity = '0';
        setTimeout(() => msg.classList.add('hidden'), 300);
    }
});

// About Button Alert
document.getElementById('alert-button')?.addEventListener('click', () => {
    alert(`Name: John Doe\nRegistration Number: REG123456\nPhone Number: +1-555-0123`);
});
