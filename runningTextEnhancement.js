(function() {
    // --- 1. CSS TEMA PETER PAN (Hijau Hutan & Emas) ---
    const announcementStylesPeterPan = `
        /* Hapus style bawaan bootstrap/tema asli jika ada */
        #announcement {
            background-color: transparent !important;
            border: none !important;
        }

        /* Style Baru Peter Pan */
        #announcement.peterpan-themed-announcement {
            /* Background Hijau Hutan Gelap dengan Gradasi */
            background: linear-gradient(90deg, #021a0f, #0a4525, #021a0f) !important;
            
            /* Border Emas Pixie Dust */
            border-top: 2px solid #FFD700 !important;
            border-bottom: 2px solid #FFD700 !important;
            border-left: none !important;
            border-right: none !important;
            
            border-radius: 0 !important; /* Flat full width looks better sometimes, or keeping consistent */
            box-shadow: 0 0 15px rgba(46, 139, 87, 0.4) !important;
            
            color: #fffacd !important; /* Putih Gading (Pixie Dust) */
            padding: 8px 15px !important;
            display: flex;
            align-items: center;
            overflow: hidden;
            position: relative;
            z-index: 10;
        }

        /* Icon Pengumuman */
        #announcement.peterpan-themed-announcement i.fa-solid.fa-bullhorn {
            color: #FFD700 !important; /* Warna Emas */
            text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
            margin-right: 15px;
            font-size: 1.3em;
            animation: magicPulse 2s infinite ease-in-out;
            flex-shrink: 0;
        }

        /* Teks Berjalan */
        #announcement.peterpan-themed-announcement marquee {
            flex-grow: 1;
            color: #fff !important;
            font-family: 'Segoe UI', sans-serif; /* Font bersih agar terbaca */
            letter-spacing: 0.5px;
            min-width: 0;
        }

        @keyframes magicPulse {
            0%, 100% { transform: scale(1); text-shadow: 0 0 5px #FFD700; }
            50% { transform: scale(1.15); text-shadow: 0 0 20px #FFD700, 0 0 30px #2e8b57; }
        }
    `;

    // --- 2. FUNGSI LOGIKA UTAMA ---
    function moveAndStyleAnnouncementConditional() {
        const announcement = document.getElementById('announcement');
        const mainSlider = document.getElementById('main-slider'); // Target homepage (biasanya slider gambar)
        const memberPanel = document.getElementById('member-status-panel'); // Target member area
        
        // Cek Navbar jika main-slider tidak ketemu (Fallback untuk Homepage)
        const navbar = document.querySelector('.navbar') || document.querySelector('header');

        if (!announcement) return;

        // --- PERBAIKAN 1: TERAPKAN STYLE TERLEBIH DAHULU (Tanpa Syarat Pindah) ---
        // Kita paksa style berubah dulu, jadi warnanya pasti ganti.
        if (!announcement.classList.contains('peterpan-themed-announcement')) {
            announcement.classList.remove('bg-primary', 'p-1', 'my-3', 'alert', 'alert-info'); // Hapus class bawaan umum
            announcement.classList.add('peterpan-themed-announcement');
            console.log("Announcement style applied!");
        }

        // Jika sudah pernah dipindahkan, hentikan proses pemindahan
        if (announcement.dataset.moved === 'true') return;

        let moved = false;

        // === Logika Pindah: HOMEPAGE (Prioritas Slider) ===
        if (mainSlider) {
            const sliderContainer = mainSlider.parentElement;
            if (sliderContainer) {
                sliderContainer.insertAdjacentElement('afterend', announcement);
                // Style Margin Homepage
                announcement.style.marginTop = '10px';
                announcement.style.marginBottom = '10px';
                announcement.style.borderRadius = '8px'; // Rounded di homepage
                moved = true;
            }
        }
        // === Logika Pindah: MEMBER AREA ===
        else if (memberPanel) {
            memberPanel.insertAdjacentElement('beforebegin', announcement);
            // Style Margin Member Area
            announcement.style.marginTop = '1rem';
            announcement.style.marginBottom = '1rem';
            announcement.style.borderRadius = '8px';
            moved = true;
        }
        // === Logika Pindah: HOMEPAGE FALLBACK (Jika Slider tidak ada, taruh bawah navbar) ===
        else if (navbar && !memberPanel) {
            navbar.insertAdjacentElement('afterend', announcement);
            announcement.style.marginTop = '0';
            announcement.style.marginBottom = '0';
            moved = true;
        }

        if (moved) {
            announcement.dataset.moved = 'true';
            console.log("Announcement moved successfully.");
        }
    }

    // --- 3. INJECT CSS ---
    function injectStyles() {
        if (document.getElementById('peterpan-announcement-styles')) return;
        const styleElement = document.createElement('style');
        styleElement.id = 'peterpan-announcement-styles';
        styleElement.innerHTML = announcementStylesPeterPan;
        document.head.appendChild(styleElement);
    }

    // --- 4. EKSEKUSI DENGAN OBSERVER (Agar tahan banting) ---
    document.addEventListener('DOMContentLoaded', () => {
        injectStyles();
        moveAndStyleAnnouncementConditional();

        // Pantau perubahan halaman (cegah script gagal load karena internet lambat)
        const observer = new MutationObserver((mutations) => {
            const announcement = document.getElementById('announcement');
            if (announcement) {
                moveAndStyleAnnouncementConditional();
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });
    });

    // Fallback eksekusi langsung
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        injectStyles();
        moveAndStyleAnnouncementConditional();
    }

})();
