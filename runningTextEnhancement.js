(function() {
    // --- CSS TEMA PETER PAN (Hijau Neon) dengan STRUKTUR LAYOUT YANG DIPERBAIKI ---
    const announcementStyles = `
        #announcement.gavan-themed-announcement {
            /* VISUAL: Tetap Hijau Neon Peter Pan */
            background: linear-gradient(160deg, #072712, #001105) !important;
            border: 1px solid #bff116 !important;
            border-radius: 10px !important; 
            box-shadow: 0 0 15px rgba(191, 241, 22, 0.4) !important;
            color: #ecf0f1 !important;
            
            /* LAYOUT FIX: Hapus width 100%, ganti jadi auto */
            width: auto !important; 
            display: flex;
            align-items: center;
            overflow: hidden;
            padding: 10px 15px !important;
            box-sizing: border-box !important;
            
            /* Margin akan diatur oleh Javascript agar responsif */
        }

        #announcement.gavan-themed-announcement i.fa-solid.fa-bullhorn {
            color: #fff927 !important;
            text-shadow: 0 0 10px rgba(255, 249, 39, 0.8);
            margin-right: 12px;
            font-size: 1.3em;
            animation: pulse-glow-peterpan 2s infinite ease-in-out;
            flex-shrink: 0;
        }

        #announcement.gavan-themed-announcement marquee {
            flex-grow: 1;
            color: #ecf0f1 !important;
            font-weight: 500;
            min-width: 0;
        }

        @keyframes pulse-glow-peterpan {
            0%, 100% { transform: scale(1); text-shadow: 0 0 8px #fff927; color: #fff927; }
            50% { transform: scale(1.1); text-shadow: 0 0 15px #bff116, 0 0 25px #bff116; color: #bff116; }
        }
    `;

    // --- LOGIKA PEMINDAHAN POSISI (Mengadaptasi Logika Gabantoto yang Rapi) ---
    function moveAndStyleAnnouncementConditional() {
        const announcement = document.getElementById('announcement');
        const mainSlider = document.getElementById('main-slider'); // Target Homepage Banner
        const memberPanel = document.getElementById('member-status-panel'); // Target Setelah Login
        const quickLogin = document.getElementById('row-quicklogin'); // Target Homepage Tanpa Banner

        // Jika announcement tidak ada atau sudah dipindahkan, stop.
        if (!announcement || announcement.dataset.moved === 'true') {
            return;
        }

        let moved = false;

        // === KONDISI 1: MEMBER AREA (Setelah Login) ===
        if (memberPanel) {
            // Taruh SEBELUM panel member
            memberPanel.insertAdjacentElement('beforebegin', announcement);
            
            // Setting Margin Rapi
            announcement.style.marginTop = '15px';
            announcement.style.marginBottom = '15px';
            announcement.style.marginLeft = '0px'; // Di dalam container biasanya sudah ada padding
            announcement.style.marginRight = '0px';
            
            moved = true;
        }
        
        // === KONDISI 2: HOMEPAGE (Ada Slider/Banner) ===
        else if (mainSlider) {
            const sliderContainer = mainSlider.parentElement;
            if (sliderContainer) {
                // Taruh SETELAH slider
                sliderContainer.insertAdjacentElement('afterend', announcement);
                
                // Setting Margin Kanan-Kiri (Sesuai request seperti Gabantoto)
                announcement.style.marginTop = '20px'; // Jarak dari banner
                announcement.style.marginBottom = '10px';
                announcement.style.marginLeft = '10px'; // Jarak dari sisi kiri layar
                announcement.style.marginRight = '10px'; // Jarak dari sisi kanan layar
                
                moved = true;
            }
        }

        // === KONDISI 3: HOMEPAGE (Tanpa Banner / Tampilan Login Saja) ===
        else if (quickLogin) {
            quickLogin.parentNode.insertBefore(announcement, quickLogin);
            
            announcement.style.margin = '0 0 15px 0';
            moved = true;
        }
        
        // === KONDISI 4: Fallback (Jaga-jaga) ===
        else {
             const mainContent = document.getElementById('maincontent');
             if(mainContent) {
                 mainContent.prepend(announcement);
                 announcement.style.margin = '10px';
                 moved = true;
             }
        }

        // Jika berhasil dipindahkan, terapkan class tema hijau
        if (moved) {
            // Bersihkan class bawaan bootstrap yang mengganggu
            announcement.classList.remove('bg-primary', 'bg-dark', 'alert', 'alert-info', 'p-1', 'my-3', 'mb-3', 'mt-3');
            
            announcement.classList.add('gavan-themed-announcement');
            
            // Reset style inline yang mungkin nempel
            announcement.style.backgroundColor = ''; 
            announcement.style.backgroundImage = '';
            
            // Tandai sudah dipindahkan
            announcement.dataset.moved = 'true'; 
        }
    }

    function injectStyles() {
        if (document.getElementById('gavan-announcement-styles')) return;
        const styleElement = document.createElement('style');
        styleElement.id = 'gavan-announcement-styles';
        styleElement.innerHTML = announcementStyles;
        document.head.appendChild(styleElement);
    }

    // --- EKSEKUSI ---
    document.addEventListener('DOMContentLoaded', () => {
        injectStyles();
        moveAndStyleAnnouncementConditional();

        // Observer untuk memantau perubahan halaman (SPA/Loading lambat)
        const observer = new MutationObserver((mutations) => {
             const announcement = document.getElementById('announcement');
             // Cek ulang jika elemen target baru muncul
             if (announcement && !announcement.dataset.moved) {
                 moveAndStyleAnnouncementConditional();
             }
        });

        observer.observe(document.body, { childList: true, subtree: true });
        
        // Double check setelah delay sebentar
        setTimeout(moveAndStyleAnnouncementConditional, 500);
    });

    if (document.readyState === 'complete') {
          injectStyles();
          moveAndStyleAnnouncementConditional();
    }

})();
