(function() {
    // Fungsi Check & Inject
    function injectPintasWidget() {
        // PERUBAHAN TARGET: Mencari elemen Running Text (#announcement)
        var target = document.querySelector('#announcement'); 
        var existingWidget = document.getElementById('pintas-widget-wrapper');

        // Jika running text ketemu dan widget belum ada
        if (target && !existingWidget) {
            
            var widgetHTML = `
                <div id="pintas-widget-wrapper" style="margin: 10px auto 20px auto; max-width: 1200px; padding: 0 10px;">
                    <a href="https://pintasdomain.com" target="_blank" style="text-decoration: none;">
                        
                        <div class="pintas-neon-bar gavan-peterpan-theme">
                            
                            <div class="pintas-icon">
                                <span class="rocket-move">🚀</span>
                            </div>

                            <div class="pintas-content">
                                <div class="pintas-sub">SUSAH AKSES / TERBLOKIR?</div>
                                <div class="pintas-title">
                                    Gunakan <span class="highlight">PintasDomain.com</span>
                                </div>
                            </div>

                        </div>
                    </a>
                </div>

                <style>
                    /* 1. Container Style (Peter Pan Theme) */
                    .pintas-neon-bar.gavan-peterpan-theme {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        
                        /* Background Gelap Transparan */
                        background: linear-gradient(160deg, rgba(7, 39, 18, 0.9), rgba(0, 17, 5, 0.9));
                        backdrop-filter: blur(5px);
                        
                        /* Border Lime Green (Peter Pan) */
                        border: 2px solid #bff116; 
                        box-shadow: 0 0 15px rgba(191, 241, 22, 0.3);
                        
                        border-radius: 80px; /* Tetap bulat oval */
                        padding: 10px 15px;
                        position: relative;
                        overflow: hidden;
                        transition: all 0.3s ease;
                    }

                    /* Efek Hover */
                    .pintas-neon-bar.gavan-peterpan-theme:hover {
                        border-color: #fff927; /* Berubah jadi Kuning saat hover */
                        box-shadow: 0 0 25px rgba(191, 241, 22, 0.6);
                        transform: scale(1.01);
                    }

                    /* 2. Icon Roket (TIDAK DIUBAH) */
                    .pintas-icon {
                        font-size: 2rem;
                        margin-right: 15px;
                        flex-shrink: 0;
                        line-height: 1;
                    }
                    .rocket-move {
                        display: inline-block;
                        animation: blastOff 2s infinite ease-in-out;
                    }

                    /* 3. Typography */
                    .pintas-content {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        line-height: 1.2;
                        text-align: left;
                    }
                    
                    /* Sub-Judul: Kuning Peter Pan */
                    .pintas-sub {
                        font-family: 'Exo 2', sans-serif;
                        font-size: 0.65rem;
                        color: #fff927; /* Kuning */
                        font-weight: 700;
                        letter-spacing: 1px;
                        text-transform: uppercase;
                        text-shadow: 0 0 5px rgba(255, 249, 39, 0.5);
                    }

                    .pintas-title {
                        font-family: 'Exo 2', sans-serif;
                        font-size: 1.2rem;
                        color: #fff;
                        font-weight: 900;
                    }

                    /* Highlight: Lime Green Peter Pan */
                    .highlight {
                        color: #bff116; /* Lime Green */
                        text-shadow: 0 0 10px rgba(191, 241, 22, 0.8);
                    }

                    /* ANIMASI ROKET */
                    @keyframes blastOff {
                        0%, 100% { transform: translate(0, 0) rotate(0deg); }
                        50% { transform: translate(3px, -3px) rotate(5deg); }
                    }
                </style>
            `;

            // PERUBAHAN METODE INJECT: insertAdjacentHTML('afterend')
            // Artinya: Masukkan widget SETELAH (di bawah) elemen running text
            target.insertAdjacentHTML('afterend', widgetHTML);
            return true;
        }
        return false;
    }

    if (!injectPintasWidget()) {
        document.addEventListener('DOMContentLoaded', function() {
            if (!injectPintasWidget()) {
                var attempts = 0;
                var interval = setInterval(function() {
                    attempts++;
                    if (injectPintasWidget() || attempts >= 5) clearInterval(interval);
                }, 1000);
            }
        });
    }
})();