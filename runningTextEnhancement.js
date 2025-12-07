(function() {
    // CSS untuk styling announcement - TEMA PETER PAN (Hijau Tua, Lime, Kuning)
    const announcementStyles = `
        #announcement.gavan-themed-announcement {
            /* === BACKGROUND: Hijau Tua Gelap === */
            background: linear-gradient(145deg, #072712, #001105) !important;
            /* === BORDER: Lime Green === */
            border: 1px solid #bff116 !important;
            border-radius: 8px !important;
            /* === SHADOW: Glow Lime Halus === */
            box-shadow: 0 0 15px rgba(191, 241, 22, 0.3) !important;
            color: #ecf0f1 !important;
            padding: 10px 15px !important;
            display: flex;
            align-items: center;
            overflow: hidden;
            /* Margin spesifik posisi akan ditambahkan oleh JS */
        }

        /* Ikon Toa/Pengumuman */
        #announcement.gavan-themed-announcement i.fa-solid.fa-bullhorn {
            /* === ICON COLOR: Kuning Emas === */
            color: #fff927 !important;
            text-shadow: 0 0 8px rgba(255, 249, 39, 0.6);
            margin-right: 12px;
            font-size: 1.2em;
            animation: pulse-glow 2s infinite ease-in-out;
            flex-shrink: 0;
        }

        #announcement.gavan-themed-announcement marquee {
            flex-grow: 1;
            color: #ecf0f1 !important; /* Teks berjalan warna putih agar terbaca */
            min-width: 0;
            font-weight: 500;
        }

        /* Animasi Denyut Cahaya (Kuning ke Lime) */
        @keyframes pulse-glow {
            0%, 100% { transform: scale(1); text-shadow: 0 0 8px #fff927; }
            50% { transform: scale(1.1); text-shadow: 0 0 15px #fff927, 0 0 25px #bff116; }
        }
    `;

    // Fungsi untuk memindahkan dan men-style announcement (Logika Gabungan)
    function moveAndStyleAnnouncementConditional() {
        const announcement = document.getElementById('announcement');
        const mainSlider = document.getElementById('main-slider'); // Target homepage
        const memberPanel = document.getElementById('member-status-panel'); // Target member area

        // Jika announcement tidak ada atau sudah dipindahkan, hentikan
        if (!announcement || announcement.dataset.moved === 'true') {
            return;
        }

        let moved = false; // Penanda apakah pemindahan berhasil

        // === Logika untuk Homepage (ada #main-slider) ===
        if (mainSlider) {
            const sliderContainer = mainSlider.parentElement;
            if (sliderContainer) {
                // Pindahkan ke setelah container slider
                sliderContainer.insertAdjacentElement('afterend', announcement);
                // Atur margin spesifik homepage
                announcement.style.marginLeft = '1rem';
                announcement.style.marginRight = '1rem';
                announcement.style.marginTop = '1.5rem';
                announcement.style.marginBottom = '1rem';
                moved = true;
                console.log("Announcement moved for homepage.");
            }
        }
        // === Logika untuk Member Area (ada #member-status-panel) ===
        else if (memberPanel) {
            // Pindahkan ke sebelum panel member
            memberPanel.insertAdjacentElement('beforebegin', announcement);
            // Atur margin spesifik member area
            announcement.style.marginLeft = '0';
            announcement.style.marginRight = '0';
            announcement.style.marginTop = '1rem';
            announcement.style.marginBottom = '1rem';
            moved = true;
            console.log("Announcement moved for member area.");
        }

        // Jika berhasil dipindahkan, terapkan styling dasar
        if (moved) {
            announcement.classList.remove('bg-primary', 'p-1', 'my-3');
            announcement.classList.add('gavan-themed-announcement');
            announcement.dataset.moved = 'true'; // Tandai sudah dipindahkan
        } else {
             console.log("Could not find appropriate anchor point for announcement.");
        }
    }

    // Fungsi untuk inject CSS ke head
    function injectStyles() {
        if (document.getElementById('gavan-announcement-styles')) return;
        const styleElement = document.createElement('style');
        styleElement.id = 'gavan-announcement-styles';
        styleElement.innerHTML = announcementStyles;
        document.head.appendChild(styleElement);
        console.log("Announcement styles injected.");
    }

    // Jalankan saat DOM siap dan gunakan Observer
    document.addEventListener('DOMContentLoaded', () => {
        injectStyles();
        moveAndStyleAnnouncementConditional();

        const observer = new MutationObserver((mutations) => {
            // Cek jika elemen target muncul DAN announcement belum dipindahkan
             const announcement = document.getElementById('announcement');
             const mainSlider = document.getElementById('main-slider');
             const memberPanel = document.getElementById('member-status-panel');
             if (announcement && !announcement.dataset.moved && (mainSlider || memberPanel)) {
                moveAndStyleAnnouncementConditional();
             }
        });

        observer.observe(document.body, { childList: true, subtree: true });
        moveAndStyleAnnouncementConditional(); // Panggil lagi
    });

    // Panggil jika skrip di-inject setelah DOM load
    if (document.readyState === 'complete') {
         injectStyles();
         moveAndStyleAnnouncementConditional();
    }

})();