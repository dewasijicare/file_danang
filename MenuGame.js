(function() {
    // --- 0. FUNGSI UNTUK MEMUAT FONT & ICON ---
    function loadResources() {
        // Load Font Awesome
        if (!document.querySelector('link[href*="font-awesome"]')) {
            const faLink = document.createElement('link');
            faLink.rel = 'stylesheet';
            faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
            document.head.appendChild(faLink);
        }
        // Load Font Cinzel (Peter Pan Theme)
        const fontLink = document.createElement('link');
        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap';
        document.head.appendChild(fontLink);
    }
    loadResources(); 

    // --- 1. BLOK CSS KHUSUS MENU GAME (TEMA PETER PAN) ---
    const gameMenuStylesPeterPan = `
        :root {
            --neverland-green: #0a4525;
            --neverland-light: #1e5c35;
            --pixie-gold: #FFD700;
            --pixie-dust: #fffacd;
            --dark-forest: #021a0f;
        }

        .gavan-game-menu-grid {
            padding: 1rem 0;
            animation: fadeInMenu 1s ease-out forwards;
            opacity: 0;
        }

        .gavan-game-menu-grid .row {
            --bs-gutter-x: 0.6rem; 
            --bs-gutter-y: 0.6rem;
        }

        .gavan-game-menu-grid .col {
            display: flex; 
        }

        /* --- STYLING KOTAK MENU (CARD MAGIC) --- */
        .game-menu-box {
            position: relative;
            /* Background Hijau Hutan Gradasi */
            background: linear-gradient(160deg, var(--neverland-light), var(--dark-forest)); 
            
            /* Border Emas Tipis */
            border: 1px solid rgba(255, 215, 0, 0.3); 
            
            border-radius: 12px; /* Lebih rounded */
            text-align: center;
            text-decoration: none;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Efek membal */
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5); 
            
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%; 
            
            overflow: hidden; 
            gap: 8px; 
            padding: 8px; 
            aspect-ratio: 1 / 1; 
        }

        /* Efek Hover: Melayang & Bersinar */
        .game-menu-box:hover {
            transform: translateY(-5px) scale(1.02);
            background: linear-gradient(160deg, var(--neverland-green), #000);
            
            border-color: var(--pixie-gold);
            
            /* Glow Emas Pixie Dust */
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7), 0 0 15px rgba(255, 215, 0, 0.4);
            z-index: 10; 
        }

        /* --- STYLING WRAPPER ICON (LINGKARAN AJAIB) --- */
        .icon-token-wrapper {
            width: 38px;  
            height: 38px; 
            
            border-radius: 50%; 
            /* Background dalam lingkaran icon */
            background: rgba(0, 0, 0, 0.3);
            
            /* Border Emas Putus-putus atau Solid */
            border: 1px solid var(--pixie-gold);
            
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0; 
            
            box-shadow: inset 0 0 10px rgba(255, 215, 0, 0.2);
            transition: all 0.3s ease;
        }

        .game-menu-box:hover .icon-token-wrapper {
            background: rgba(255, 215, 0, 0.1);
            box-shadow: 0 0 15px var(--pixie-gold); 
            transform: rotate(15deg); 
        }

        /* --- STYLING ICON --- */
        .gavan-icon-base {
            font-size: 1rem; 
            line-height: 1; 
            
            /* Warna Gradient Emas */
            background: linear-gradient(to bottom, #fff 0%, var(--pixie-gold) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
            
            filter: drop-shadow(0 0 2px rgba(255, 215, 0, 0.5));
            
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
        }

        /* --- STYLING TEKS LABEL (FONT CINZEL) --- */
        .game-menu-label {
            font-family: 'Cinzel', serif; /* Font Tema Peter Pan */
            font-weight: 700;
            font-size: 0.65rem; 
            text-transform: uppercase;
            letter-spacing: 1px;
            
            /* Warna Teks Putih Gading */
            color: #e0e0e0; 
            
            margin: 0;
            line-height: 1.2;
            white-space: nowrap;
            transition: color 0.3s ease;
            text-shadow: 0 2px 2px rgba(0,0,0,0.8);
        }

        .game-menu-box:hover .game-menu-label {
            color: var(--pixie-gold); 
            text-shadow: 0 0 8px rgba(255, 215, 0, 0.6);
        }

        @keyframes fadeInMenu {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        /* --- TAMPILAN DESKTOP --- */
        @media (min-width: 992px) {
            .gavan-game-menu-grid .row {
                --bs-gutter-x: 1rem;
                --bs-gutter-y: 1rem;
            }

            .game-menu-box {
                aspect-ratio: auto; 
                flex-direction: row; 
                padding: 0 1.2rem; 
                min-height: 75px; 
                gap: 15px;
                justify-content: flex-start; 
                /* Gradient Horizontal untuk Desktop */
                background: linear-gradient(90deg, var(--neverland-light), var(--dark-forest));
            }
            
            .icon-token-wrapper {
                width: 42px;
                height: 42px;
            }
            
            .gavan-icon-base {
                font-size: 1.2rem; 
            }

            .game-menu-label {
                font-size: 0.9rem;
                text-align: left;
            }
        }
    `;

    // Tambahkan CSS ke <head>
    const styleEl = document.createElement('style');
    styleEl.innerHTML = gameMenuStylesPeterPan;
    document.head.appendChild(styleEl);


    // --- 2. FUNGSI UNTUK MENYISIPKAN HTML MENU ---
    function injectGameMenuPeterPan() {
        const existingMenu = document.querySelector('.gavan-game-menu-grid');
        if (existingMenu) existingMenu.remove();
        
        const targetPanel = document.getElementById('member-status-panel');
        
        if (targetPanel) {
            const menuItems = [
                { label: 'Slot', icon: 'bi-7-square-fill', type: 'bi', href: '/game?category=101' },
                { label: 'Casino', icon: 'fa-coins', type: 'fa', href: '/game?category=102' },
                { label: 'Sport', icon: 'bi-dribbble', type: 'bi', href: '/sport' },
                { label: 'Togel', icon: 'bi-8-circle-fill', type: 'bi', href: '/togel' }, 
                { label: 'Table', icon: 'fa-rectangle-list', type: 'fa', href: '/game?category=103%2C104%2C105%2C106%2C107' },
                { label: 'Fishing', icon: 'fa-fish-fins', type: 'fa', href: '/game?category=201' },
                { label: 'Cock Fight', icon: 'fa-feather-pointed', type: 'fa', href: '/cockfight' },
                { label: 'Arcade', icon: 'bi-controller', type: 'bi', href: '/game?category=151%2C900' }
            ];

            let menuHTML = '<div class="container gavan-game-menu-grid"><div class="row row-cols-4 row-cols-lg-4">'; 
            
            menuItems.forEach(item => {
                const iconClass = item.type === 'fa' ? `fa-solid ${item.icon}` : `bi ${item.icon}`;
                menuHTML += `
                    <div class="col"> 
                        <a href="${item.href}" class="game-menu-box">
                            <div class="icon-token-wrapper">
                                <i class="${iconClass} gavan-icon-base"></i>
                            </div>
                            <div class="game-menu-label">${item.label}</div>
                        </a>
                    </div>
                `;
            });
            
            menuHTML += '</div></div>';
            targetPanel.insertAdjacentHTML('afterend', menuHTML);

        } else {
            setTimeout(injectGameMenuPeterPan, 300);
        }
    }

    // --- 3. EKSEKUSI ---
    const faCheckInterval = setInterval(() => {
        if (document.querySelector('link[href*="font-awesome"]')) {
            clearInterval(faCheckInterval); 
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', injectGameMenuPeterPan);
            } else {
                injectGameMenuPeterPan();
            }
        }
    }, 100); 
})();