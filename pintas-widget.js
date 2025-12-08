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
                        
                        /* REVISI: Background KEMBALI HITAM (Seperti contoh asli) */
                        background: rgba(0, 0, 0, 0.6); 
                        backdrop-filter: blur(5px);
                        
                        /* Border tetap Lime Green (Peter Pan) */
                        border: 2px solid #bff116; 
                        box-shadow: 0 0 15px rgba(191, 241, 22, 0.3);
                        
                        border-radius: 80px; 
                        padding: 10px 20px; /* Padding sedikit diperlebar */
                        position: relative;
                        overflow: hidden;
                        transition: all 0.3s ease;
                    }

                    .pintas-neon-bar.gavan-peterpan-theme:hover {
                        border-color: #fff927; 
                        box-shadow: 0 0 25px rgba(191, 241, 22, 0.6);
                        transform: scale(1.01);
                    }

                    /* 2. Icon Roket */
                    .pintas-icon {
                        font-size: 2.2rem; /* Sedikit diperbesar */
                        margin-right: 18px;
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
                        text-align: left;
                        /* REVISI: Menghapus line-height ketat agar text tidak rapat */
                    }
                    
                    .pintas-sub {
                        font-family: 'Exo 2', sans-serif;
                        font-size: 0.7rem;
                        color: #fff927; /* Kuning */
                        font-weight: 700;
                        letter-spacing: 1px;
                        text-transform: uppercase;
                        text-shadow: 0 0 5px rgba(255, 249, 39, 0.5);
                        
                        /* REVISI: Memberi jarak (margin) ke bawah agar tidak nempel */
                        margin-bottom: 4px; 
                        line-height: 1.2;
                    }

                    .pintas-title {
                        font-family: 'Exo 2', sans-serif;
                        font-size: 1.3rem;
                        color: #fff;
                        font-weight: 900;
                        line-height: 1.2;
                    }

                    .highlight {
                        color: #bff116; /* Lime Green */
                        text-shadow: 0 0 10px rgba(191, 241, 22, 0.8);
                    }

                    @keyframes blastOff {
                        0%, 100% { transform: translate(0, 0) rotate(0deg); }
                        50% { transform: translate(3px, -3px) rotate(5deg); }
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
