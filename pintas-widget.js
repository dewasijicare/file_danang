(function() {
    // Fungsi Check & Inject
    function injectPintasWidget() {
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
                    /* 1. Container Style */
                    .pintas-neon-bar.gavan-peterpan-theme {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        
                        background: rgba(0, 0, 0, 0.6); 
                        backdrop-filter: blur(5px);
                        
                        /* Border tetap Lime Green (Peter Pan) */
                        border: 2px solid #bff116; 
                        box-shadow: 0 0 15px rgba(191, 241, 22, 0.3);
                        
                        border-radius: 80px; 
                        padding: 10px 20px; 
                        position: relative;
                        overflow: hidden;
                        transition: all 0.3s ease;
                        
                        /* FIX: Agar lebar menyesuaikan konten tapi tidak melebihi layar */
                        max-width: 100%;
                        box-sizing: border-box;
                    }

                    .pintas-neon-bar.gavan-peterpan-theme:hover {
                        border-color: #fff927; 
                        box-shadow: 0 0 25px rgba(191, 241, 22, 0.6);
                        transform: scale(1.01);
                    }

                    /* 2. Icon Roket */
                    .pintas-icon {
                        font-size: 2.2rem; 
                        margin-right: 15px;
                        flex-shrink: 0; /* Icon tidak boleh mengecil/gepeng */
                        line-height: 1;
                        transition: all 0.3s ease;
                    }
                    .rocket-move {
                        display: inline-block;
                        animation: blastOff 2s infinite ease-in-out;
                    }

                    /* 3. Typography & Layout Content */
                    .pintas-content {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        text-align: left;
                        min-width: 0; 
                    }
                    
                    .pintas-sub {
                        font-family: 'Exo 2', sans-serif;
                        font-size: 0.7rem;
                        color: #fff927; /* Kuning */
                        font-weight: 700;
                        letter-spacing: 0.5px; /* Sedikit dirapatkan */
                        text-transform: uppercase;
                        text-shadow: 0 0 5px rgba(255, 249, 39, 0.5);
                        margin-bottom: 2px; 
                        line-height: 1.2;
                        white-space: nowrap; /* Teks Subjudul jangan turun baris */
                    }

                    .pintas-title {
                        font-family: 'Exo 2', sans-serif;
                        font-size: 1.3rem; /* Ukuran Default Desktop */
                        color: #fff;
                        font-weight: 900;
                        line-height: 1.1;
                        white-space: nowrap; /* KUNCI: Paksa teks satu baris */
                    }

                    .highlight {
                        color: #bff116; /* Lime Green */
                        text-shadow: 0 0 10px rgba(191, 241, 22, 0.8);
                    }

                    @keyframes blastOff {
                        0%, 100% { transform: translate(0, 0) rotate(0deg); }
                        50% { transform: translate(3px, -3px) rotate(5deg); }
                    }

                    /* --- RESPONSIF DEVICE (Media Queries) - DIPERBESAR SEDIKIT --- */
                    
                    /* Untuk HP Standar (Lebar di bawah 480px) */
                    @media (max-width: 480px) {
                        .pintas-neon-bar.gavan-peterpan-theme {
                            padding: 8px 12px; /* Padding samping dikurangi sedikit */
                        }
                        .pintas-icon {
                            font-size: 1.8rem; 
                            margin-right: 10px;
                        }
                        .pintas-title {
                            font-size: 1.15rem; /* DIPERBESAR (dari 1.0rem) */
                        }
                        .pintas-sub {
                            font-size: 0.65rem; /* DIPERBESAR (dari 0.6rem) */
                        }
                    }

                    /* Untuk HP Sangat Kecil (Galaxy Fold / iPhone SE Lama / Lebar < 360px) */
                    @media (max-width: 360px) {
                        .pintas-neon-bar.gavan-peterpan-theme {
                            padding: 6px 8px; /* Padding samping lebih tipis */
                        }
                        .pintas-icon {
                            font-size: 1.6rem; /* Sedikit lebih besar */
                            margin-right: 8px;
                        }
                        .pintas-title {
                            font-size: 1.0rem; /* DIPERBESAR (dari 0.85rem) */
                        }
                        .pintas-sub {
                            font-size: 0.6rem; /* DIPERBESAR (dari 0.55rem) */
                        }
                    }
                </style>
            `;

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
