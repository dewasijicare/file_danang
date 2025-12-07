(function() {
    // --- 1. BLOK CSS KHUSUS JACKPOT (TEMA PETER PAN - NEVERLAND) ---
    const jackpotStylesPeterPan = `
        /* CSS untuk Progressive Jackpot - Tema Peter Pan */
        /* Menggunakan Font 'Cinzel' untuk nuansa Fantasi/Klasik */
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&display=swap');
        
        :root {
            --neverland-green: #0a4525; /* Hijau Hutan Gelap */
            --neverland-light: #2e8b57; /* Hijau Daun */
            --pixie-gold: #ffd700;      /* Emas Tinkerbell */
            --pixie-dust: #fffacd;      /* Putih Kekuningan */
            --dark-forest: #021a0f;     /* Background Gelap */
        }

        .jackpot-container-main {
            font-family: 'Cinzel', serif !important; 
            text-align: center;
            position: relative;
            margin-top: 2.5rem;
            margin-bottom: 1.5rem;
            z-index: 50;
            padding: 0; 
            box-sizing: border-box;
            max-width: 650px; 
            margin-left: auto;
            margin-right: auto;
        }

        /* Border Animasi (Kilauan Emas Pixie Dust) */
        .jackpot-animated-border {
            position: relative;
            border-radius: 15px; /* Lebih membulat */
            padding: 5px; 
            
            background: var(--dark-forest);
            border: 2px solid var(--neverland-light);
            
            /* Shadow emas yang magis */
            box-shadow: 0 0 15px rgba(46, 139, 87, 0.5);
            animation: borderMagicPulse 3s ease-in-out infinite alternate;
        }

        @keyframes borderMagicPulse {
            0% { 
                box-shadow: 0 0 5px var(--neverland-green), inset 0 0 5px var(--neverland-green);
                border-color: var(--neverland-light);
            }
            100% { 
                box-shadow: 0 0 20px var(--pixie-gold), 0 0 10px var(--neverland-light), inset 0 0 10px var(--pixie-gold);
                border-color: var(--pixie-gold);
            }
        }

        /* Kotak konten utama Jackpot */
        .jackpot-display-box-content {
            display: flex;
            flex-direction: column; 
            justify-content: center;
            align-items: center;
            /* Gradasi Hijau Hutan Mewah */
            background: linear-gradient(180deg, var(--neverland-green) 0%, var(--dark-forest) 100%);
            border-radius: 10px; 
            min-height: 90px;
            position: relative;
            padding: 15px; 
            z-index: 2;
            border: 1px solid rgba(255, 215, 0, 0.2); /* Garis tipis emas */
        }
        
        /* Judul Jackpot */
        .jackpot-main-title {
            color: var(--pixie-gold); 
            font-size: 1.2rem;
            font-weight: 900;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-shadow: 0 2px 4px rgba(0,0,0,0.8);
        }

        /* Ikon Bintang/Pixie (Warna Emas) */
        .jackpot-main-title i {
            font-size: 1.3rem;
            margin-right: 10px;
            color: var(--pixie-gold); 
            animation: starTwinkle 1.5s infinite alternate;
        }

        @keyframes starTwinkle {
            0% { opacity: 0.5; transform: scale(0.9); text-shadow: 0 0 5px var(--pixie-gold); }
            100% { opacity: 1; transform: scale(1.2); text-shadow: 0 0 20px var(--pixie-gold); }
        }

        /* Teks Judul yang Berjalan (Emas dan Putih) */
        .jackpot-animated-text {
            background: linear-gradient(90deg, var(--pixie-gold), #fff, var(--pixie-gold));
            background-size: 200% auto;
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            animation: shineText 3s linear infinite;
        }

        @keyframes shineText {
            to { background-position: 200% center; }
        }

        /* --- ANGKA JACKPOT (Style Baru) --- */
        .jackpot-value-final {
            font-family: 'Cinzel', serif !important; /* Font Fantasi */
            color: #fff; 
            font-size: 2.6rem; 
            font-weight: 700; 
            line-height: 1.2;
            letter-spacing: 3px; 
            margin-top: 5px;
            
            /* Efek Glow Emas Magis */
            text-shadow: 
                0 0 2px #000,
                0 0 10px var(--pixie-gold), 
                0 0 20px var(--neverland-light); 
            
            white-space: nowrap;
        }

        /* Responsive Desktop */
        @media (min-width: 992px) {
            .jackpot-value-final {
                font-size: 3.2rem; 
                letter-spacing: 4px;
            }
            .jackpot-container-main {
                max-width: 750px; 
            }
        }

        /* Responsive Mobile */
        @media (max-width: 768px) {
            .jackpot-value-final {
                font-size: 7vw; 
                letter-spacing: 1px;
            }
            .jackpot-main-title {
                font-size: 0.9rem;
            }
            .jackpot-container-main {
                margin-top: 1.5rem;
            }
        }
    `;

    // Tambahkan CSS ke head
    const styleElement = document.createElement('style');
    styleElement.innerHTML = jackpotStylesPeterPan;
    document.head.appendChild(styleElement);


    // --- 2. FUNGSI LOGIKA COUNTER DINAMIS (Tidak Berubah) ---
    function startDynamicJackpotCounterFinal() {
        const element = document.getElementById('dynamic-jackpot-value-final');
        if (!element) return;

        let currentValue = 32462646763;
        const maxIncrement = 15;
        const updateInterval = 80;
        const resetThreshold = 32462700000;

        function updateJackpotValue() {
            const increment = Math.floor(Math.random() * maxIncrement) + 1;
            currentValue += increment;

            if (currentValue > resetThreshold) {
                currentValue = 32462646763;
            }

            let formattedNumber = currentValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            element.textContent = 'IDR ' + formattedNumber;
        }

        updateJackpotValue();
        setInterval(updateJackpotValue, updateInterval);
    }

    // --- 3. FUNGSI UNTUK MENYISIPKAN HTML ---
    function injectJackpotHTMLFinal() {
        const targetElement = document.getElementById('row-togel');
        
        if (document.querySelector('.jackpot-container-main')) {
            return;
        }

        if (!targetElement) {
            setTimeout(injectJackpotHTMLFinal, 200);
            return;
        }

        // HTML struktur sama, tapi ikon diganti jadi Stars (bi-stars) agar lebih magis
        const jackpotHTMLFinal = `
            <div class="jackpot-container-main">
                <div class="jackpot-animated-border">
                    <div class="jackpot-display-box-content">
                        <div class="jackpot-main-title">
                            <i class="bi bi-stars"></i>
                            <span class="jackpot-animated-text">NEVERLAND JACKPOT</span>
                            <i class="bi bi-stars"></i>
                        </div>
                        <div id="dynamic-jackpot-value-final" class="jackpot-value-final">IDR 32.462.646.763</div>
                    </div>
                </div>
            </div>
        `;

        targetElement.insertAdjacentHTML('beforebegin', jackpotHTMLFinal);
        startDynamicJackpotCounterFinal();
    }

    // --- 4. EKSEKUSI ---
    document.addEventListener('DOMContentLoaded', injectJackpotHTMLFinal);
})();