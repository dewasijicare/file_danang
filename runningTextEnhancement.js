(function() {
    // --- CSS TEMA PETER PAN (Announcement Fix) ---
    const announcementStyles = `
        #announcement.gavan-themed-announcement {
            background: linear-gradient(160deg, #072712, #001105) !important;
            border: 1px solid #bff116 !important;
            
            /* REVISI SUDUT: 10px (Tidak terlalu bulat, tidak terlalu lancip) */
            border-radius: 10px !important; 
            
            box-shadow: 0 0 15px rgba(191, 241, 22, 0.4) !important;
            color: #ecf0f1 !important;
            padding: 10px 15px !important;
            display: flex;
            align-items: center;
            overflow: hidden;
            width: 100% !important; /* Pastikan lebar 100% mengikuti container */
            box-sizing: border-box !important; /* Agar padding tidak merusak lebar */
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

    function moveAndStyleAnnouncementConditional() {
        const announcement = document.getElementById('announcement');
        const mainSlider = document.getElementById('main-slider'); 
        const memberPanel = document.getElementById('member-status-panel'); 
        const quickLogin = document.getElementById('row-quicklogin'); 

        if (!announcement || announcement.dataset.moved === 'true') {
            return;
        }

        let moved = false;

        // === 1. Logika Member Area ===
        if (memberPanel) {
            memberPanel.insertAdjacentElement('beforebegin', announcement);
            // Reset Margin agar full width
            announcement.style.margin = '0 0 1rem 0'; 
            moved = true;
        }
        // === 2. Logika Homepage dengan Banner ===
        else if (mainSlider) {
            const sliderContainer = mainSlider.parentElement;
            if (sliderContainer) {
                sliderContainer.insertAdjacentElement('afterend', announcement);
                // Homepage dengan banner butuh sedikit margin samping
                announcement.style.margin = '1.5rem 1rem 1rem 1rem';
                announcement.style.width = 'auto'; // Reset width khusus kondisi ini
                moved = true;
            }
        }
        // === 3. Logika Homepage TANPA Banner (SEBELUM LOGIN) ===
        else if (quickLogin) {
            // Pindahkan tepat di atas kotak login
            quickLogin.parentNode.insertBefore(announcement, quickLogin);
            
            // REVISI ALIGNMENT:
            // Hapus margin kiri/kanan manual. Gunakan width 100% (dari CSS).
            // Hanya beri margin bawah agar tidak menempel dengan login box.
            announcement.style.margin = '0 0 15px 0'; 
            
            moved = true;
        }
        // === 4. Fallback ===
        else {
             const mainContent = document.getElementById('maincontent');
             if(mainContent) {
                 mainContent.prepend(announcement);
                 announcement.style.margin = '1rem';
                 moved = true;
             }
        }

        if (moved) {
            announcement.classList.remove('bg-primary', 'bg-dark', 'alert', 'alert-info', 'p-1', 'my-3', 'mb-3');
            announcement.classList.add('gavan-themed-announcement');
            announcement.style.backgroundColor = ''; 
            announcement.style.backgroundImage = '';
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

    document.addEventListener('DOMContentLoaded', () => {
        injectStyles();
        moveAndStyleAnnouncementConditional();

        const observer = new MutationObserver((mutations) => {
             const announcement = document.getElementById('announcement');
             if (announcement && !announcement.dataset.moved) {
                 moveAndStyleAnnouncementConditional();
             }
        });

        observer.observe(document.body, { childList: true, subtree: true });
        setTimeout(moveAndStyleAnnouncementConditional, 500);
    });

    if (document.readyState === 'complete') {
         injectStyles();
         moveAndStyleAnnouncementConditional();
    }

})();
