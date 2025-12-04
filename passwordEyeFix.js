(function() {
    'use strict';

    // 1. DEFINISI CSS (Style ditampung dalam variabel const, mirip danangThemeStyles)
    const eyeIconStyles = `
        /* Hilangkan ikon mata bawaan browser */
        input[type="password"]::-ms-reveal,
        input[type="password"]::-ms-clear {
            display: none !important;
        }

        /* Styling Posisi & Warna Ikon Mata Custom */
        #togglePass, #toggleConfirmPass {
            position: absolute !important;
            top: 50% !important;
            transform: translateY(-50%) !important;
            right: 15px !important;
            z-index: 100;
            cursor: pointer;
            
            /* Warna Emas sesuai tema */
            color: #ffc107; 
            font-size: 1.2rem;
            transition: all 0.3s ease;
        }

        /* Efek Hover */
        #togglePass:hover, #toggleConfirmPass:hover {
            color: #ffffff;
            transform: translateY(-50%) scale(1.1) !important;
        }

        /* Wrapper Relative */
        .input-wrapper {
            position: relative;
            width: 100%;
        }
    `;

    // 2. FUNGSI UTAMA (Logic Javascript)
    function initEyeIconFix() {
        // A. Inject CSS ke Head
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = eyeIconStyles;
        document.head.appendChild(styleSheet);

        // B. Fungsi Toggle Password
        function setupToggle(btnId, inputId) {
            const btn = document.getElementById(btnId);
            const input = document.getElementById(inputId);

            if (btn && input) {
                // Cloning element untuk reset event listener (menghindari duplikasi klik)
                const newBtn = btn.cloneNode(true);
                btn.parentNode.replaceChild(newBtn, btn);

                newBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Toggle Tipe Input
                    const currentType = input.getAttribute('type');
                    const newType = (currentType === 'password') ? 'text' : 'password';
                    input.setAttribute('type', newType);

                    // Toggle Icon Class
                    const icon = this.querySelector('i') || this.querySelector('span'); // support tag i atau span
                    if (icon) {
                        // Logic untuk FontAwesome atau Bootstrap Icons
                        if (newType === 'text') {
                            icon.classList.remove('bi-eye-fill', 'fa-eye');
                            icon.classList.add('bi-eye-slash-fill', 'fa-eye-slash');
                        } else {
                            icon.classList.remove('bi-eye-slash-fill', 'fa-eye-slash');
                            icon.classList.add('bi-eye-fill', 'fa-eye');
                        }
                    }
                });
            }
        }

        // Jalankan untuk kedua kolom
        setupToggle('togglePass', 'password');
        setupToggle('toggleConfirmPass', 'confirmPassword');
    }

    // 3. EKSEKUSI (Menunggu halaman selesai loading)
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initEyeIconFix);
    } else {
        initEyeIconFix();
    }

})();