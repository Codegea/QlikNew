document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Add simple ripple effect to button
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', function(e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        
        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove()
        }, 1000);
    });

    // Handle form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = emailInput.value;
        const password = passwordInput.value;

        if(email && password) {
            // Simulate login process
            console.log('Intento de inicio de sesión:', { email, password });
            
            // Add loading state to button
            const originalText = btn.innerText;
            btn.innerText = 'Cargando...';
            btn.style.opacity = '0.7';
            
            setTimeout(() => {
                alert('¡Inicio de sesión simulado exitoso!');
                btn.innerText = originalText;
                btn.style.opacity = '1';
            }, 1500);
        }
    });

    // Input animation helpers (optional if CSS :valid works well, but good for pre-filled inputs)
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            if(input.value) {
                input.classList.add('has-content');
            } else {
                input.classList.remove('has-content');
            }
        });
    });
});
