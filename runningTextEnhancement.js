(function() {
    // --- CSS TEMA PETER PAN (Announcement) ---
    // Warna: Background Dark Green, Border Lime (#bff116), Icon Yellow (#fff927)
    const announcementStyles = `
        #announcement.gavan-themed-announcement {
            background: linear-gradient(160deg, #072712, #001105) !important;
            border: 1px solid #bff116 !important;
            border-radius: 15px !important; /* Radius 15px agar sama dengan card lain */
            box-shadow: 0 0 15px rgba(191, 241, 22, 0.4) !important; /* Glow Lime halus */
            color: #ecf0f1 !important;
            padding: 10px 15px !important;
            display: flex;
            align-items: center;
            overflow: hidden;
            /* Margin spesifik posisi akan ditambahkan oleh JS */
        }

        /* Ikon Pengumuman: Kuning Peter Pan agar mencolok */
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
            color: #ecf0f1 !important; /* Teks tetap putih agar mudah dibaca */
            font-weight: 500;
            min-width: 0;
        }

        /* Animasi Glow Kuning ke Lime */
        @keyframes pulse-glow-peterpan {
            0%, 100% { transform: scale(1); text-shadow: 0 0 8px #fff927; color: #fff927; }
            50% { transform: scale(1.1); text-shadow: 0 0 15px #bff116, 0 0 25px #bff116; color: #bff116; }
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
                // console.log("Announcement moved for homepage (Peter Pan Theme).");
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
            // console.log("Announcement moved for member area (Peter Pan Theme).");
        }

        // Jika berhasil dipindahkan, terapkan styling dasar
        if (moved) {
            // Hapus class bawaan bootstrap/template yang mengganggu warna
            announcement.classList.remove('bg-primary', 'bg-dark', 'alert', 'alert-info', 'p-1', 'my-3');
            
            // Tambahkan class tema kita
            announcement.classList.add('gavan-themed-announcement');
            
            // Hapus inline style background jika ada (paksa tema kita)
            announcement.style.backgroundColor = ''; 
            announcement.style.backgroundImage = '';
            
            announcement.dataset.moved = 'true'; // Tandai sudah dipindahkan
        }
    }

    // Fungsi untuk inject CSS ke head
    function injectStyles() {
        if (document.getElementById('gavan-announcement-styles')) return;
        const styleElement = document.createElement('style');
        styleElement.id = 'gavan-announcement-styles';
        styleElement.innerHTML = announcementStyles;
        document.head.appendChild(styleElement);
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
        // Coba panggil lagi in case observer telat
        setTimeout(moveAndStyleAnnouncementConditional, 500);
    });

    // Panggil jika skrip di-inject setelah DOM load
    if (document.readyState === 'complete') {
         injectStyles();
         moveAndStyleAnnouncementConditional();
    }

})();
