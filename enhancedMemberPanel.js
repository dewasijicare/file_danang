(function() {
    // ==========================================
    // CSS PANEL MEMBER - TEMA DANANG (MERAH & KUNING)
    // ==========================================
    const panelStyles = `
        #member-status-panel.gavan-member-panel-enhanced {
            /* === BACKGROUND GELAP (TEMA DANANG) === */
            background: linear-gradient(135deg, #2b0b0b, #0f0000) !important; /* Merah Gelap ke Hitam */
            border: 1px solid #b30000 !important; /* Border Merah Darah */
            box-shadow: 0 0 15px rgba(179, 0, 0, 0.5) !important; /* Glow Merah */
            /* ==================================== */
            border-radius: 10px !important;
            padding: 0.6rem 0.8rem !important;
            color: #ecf0f1 !important; /* Text Putih */
            display: flex;
            flex-direction: column;
            gap: 0.4rem !important;
            transition: all 0.2s ease;
            margin-bottom: 1rem; /* Tambahan jarak bawah */
        }

        #member-status-panel.gavan-member-panel-enhanced:hover {
             box-shadow: 0 0 25px rgba(255, 51, 51, 0.6) !important; /* Glow Merah Terang saat hover */
             border-color: #ff3333 !important;
             transform: translateY(-1px);
        }

        .gmp-top-area {
            display: grid;
            grid-template-columns: 1fr auto;
            grid-template-rows: auto auto;
            align-items: baseline;
            width: 100%;
            row-gap: 0.1rem;
            column-gap: 0.5rem;
        }

        /* LABEL (Kecil) */
        .gmp-balance-label {
            grid-column: 1; grid-row: 1;
            font-size: 0.75em;
            font-weight: 600;
            color: #bdc3c7; /* Abu-abu terang */
            line-height: 1.1;
            text-transform: uppercase;
            text-align: left;
            align-self: end;
        }

        .gmp-user-id-label {
            grid-column: 2; grid-row: 1;
            font-size: 0.75em;
            font-weight: 600;
            color: #bdc3c7; /* Abu-abu terang */
            line-height: 1.1;
            text-transform: uppercase;
            text-align: right;
            align-self: end;
        }

        /* NILAI SALDO (Kiri Bawah) */
        .gmp-balance-value {
            grid-column: 1; grid-row: 2;
            font-size: 1.3em !important;
            font-weight: 700 !important;
            line-height: 1 !important;
            /* === WARNA SALDO === */
            color: #ff3333 !important; /* Merah Neon */
            text-shadow: 0 0 5px rgba(179, 0, 0, 0.5);
            /* =================== */
            display: inline-flex;
            align-items: baseline;
            white-space: nowrap;
            text-align: left;
            align-self: start;
        }

        .gmp-balance-value .currency-label {
            font-size: 0.5em;
            vertical-align: baseline;
            margin-left: 4px;
            font-weight: 600;
            color: #ecf0f1 !important; /* Putih */
            opacity: 0.7;
        }

        /* ICON MATA (Toggle) */
        .gmp-balance-value .balance-toggle-icon {
            font-size: 0.8em !important;
            margin-left: 6px !important;
            cursor: pointer;
            color: #FFD700 !important; /* Kuning Emas */
            vertical-align: middle;
            transition: all 0.3s ease;
        }
        .gmp-balance-value .balance-toggle-icon:hover {
            color: #fff !important;
            text-shadow: 0 0 5px #FFD700;
        }

        /* USERNAME (Kanan Bawah) */
         .gmp-user-id-value {
             grid-column: 2; grid-row: 2;
             font-size: 1.3em !important;
             font-weight: 700 !important;
             /* === WARNA USERNAME === */
             color: #FFD700 !important; /* Emas */
             text-shadow: 0 0 5px rgba(255, 215, 0, 0.3);
             /* ====================== */
             line-height: 1 !important;
             text-align: right;
             align-self: start;
             white-space: nowrap;
             overflow: hidden;
             text-overflow: ellipsis;
             max-width: 160px;
        }

         .gmp-buttons-container {
             display: flex;
             justify-content: space-between;
             gap: 0.5rem !important;
             width: 100%;
             margin-top: 0.5rem !important; 
         }

         .gmp-action-btn {
             flex: 1;
             padding: 0.4rem 0.5rem !important;
             font-size: 0.8em !important;
             display: flex;
             align-items: center;
             justify-content: center;
             gap: 5px;
             border-radius: 5px !important;
             white-space: nowrap;
             text-transform: uppercase;
             font-weight: bold;
             transition: all 0.2s ease !important;
         }

         /* TOMBOL DEPOSIT (MERAH) */
          .gmp-action-btn.btn-primary {
             background: linear-gradient(45deg, #b30000, #ff3333) !important;
             color: #fff !important;
             border: 1px solid #ff3333 !important;
             box-shadow: 0 0 5px rgba(255, 51, 51, 0.4);
          }
          .gmp-action-btn.btn-primary:hover {
              background: linear-gradient(45deg, #cc0000, #ff6666) !important;
              box-shadow: 0 0 15px rgba(255, 51, 51, 0.6);
              transform: translateY(-2px);
          }

          /* TOMBOL WITHDRAW (KUNING) */
           .gmp-action-btn.btn-secondary {
             background: linear-gradient(45deg, #ffd700, #ffa500) !important;
             color: #2b0b0b !important; /* Teks Gelap */
             border: 1px solid #ffd700 !important;
             box-shadow: 0 0 5px rgba(255, 215, 0, 0.4);
          }
           .gmp-action-btn.btn-secondary:hover {
             background: linear-gradient(45deg, #ffdf33, #ffb01a) !important;
             box-shadow: 0 0 15px rgba(255, 215, 0, 0.6);
             transform: translateY(-2px);
          }

          .gmp-action-btn i.bi { font-size: 1.1em; }
    `;

    // --- LOGIKA JAVASCRIPT ---
    function styleEnhancedMemberPanel() {
        const panel = document.getElementById('member-status-panel');
        if (!panel || panel.dataset.enhanced === 'true') { return; }

        const usernameElement = panel.querySelector('strong');
        const balanceSpan = panel.querySelector('.text-gradient');
        const originalBalanceValue = balanceSpan ? balanceSpan.textContent.trim() : '0';
        const toggleIconElement = panel.querySelector('.balance-toggle-icon');

        let userId = usernameElement ? usernameElement.textContent.replace('Halo,', '').trim() : 'MEMBER';

        panel.innerHTML = '';
        panel.innerHTML = `
            <div class="gmp-top-area">
                <div class="gmp-balance-label">SALDO IDR</div>
                <div class="gmp-user-id-label">PENGGUNA</div>
                <div class="gmp-balance-value">
                    <span class="balance-value">${originalBalanceValue}</span>
                    </div>
                <div class="gmp-user-id-value">${userId}</div>
            </div>
            <div class="gmp-buttons-container">
                <a href="/deposit" class="btn btn-primary gmp-action-btn"><i class="bi bi-wallet2"></i> Deposit</a>
                <a href="/withdraw" class="btn btn-secondary gmp-action-btn"><i class="bi bi-cash-coin"></i> Withdraw</a>
            </div>
        `;

        const balanceValueContainer = panel.querySelector('.gmp-balance-value');
        if (balanceValueContainer) {
            const newToggleIcon = document.createElement('i');
            // Pastikan class icon sesuai (mata terbuka/tertutup) berdasarkan state terakhir
            const currentState = localStorage.getItem('balanceVisibility') || 'visible';
            newToggleIcon.className = currentState === 'hidden' ? 'bi bi-eye-slash-fill balance-toggle-icon' : 'bi bi-eye-fill balance-toggle-icon';
            
            balanceValueContainer.appendChild(newToggleIcon);

            const valueSpan = balanceValueContainer.querySelector('.balance-value');
            
            const updateView = (state) => {
                 if (!valueSpan) return;
                 if (state === 'hidden') {
                    valueSpan.textContent = '•••••';
                    newToggleIcon.className = 'bi bi-eye-slash-fill balance-toggle-icon';
                 } else {
                    valueSpan.textContent = originalBalanceValue;
                    newToggleIcon.className = 'bi bi-eye-fill balance-toggle-icon';
                 }
                 // Sinkronisasi dengan sidebar jika ada
                 const sidebarIcon = document.querySelector("#sidebar .balance-toggle-icon");
                 const sidebarValue = document.querySelector("#sidebar .balance-value");
                 if(sidebarIcon && sidebarValue){
                     sidebarIcon.className = newToggleIcon.className;
                     if(state === 'hidden') sidebarValue.textContent = '•••••';
                     else {
                         const sidebarOriginalValue = originalBalanceValue.replace(/[^\d.]/g, '');
                         sidebarValue.textContent = formatNumberWithCommas(sidebarOriginalValue);
                     }
                 }
            };

            newToggleIcon.addEventListener('click', (e) => {
                 e.preventDefault(); e.stopPropagation();
                 const currentState = (localStorage.getItem('balanceVisibility') || 'visible');
                 const newState = currentState === 'visible' ? 'hidden' : 'visible';
                 localStorage.setItem('balanceVisibility', newState);
                 updateView(newState);
            });

             updateView(currentState);
        }

        panel.classList.add('gavan-member-panel-enhanced');
        panel.classList.remove('glassmorphism', 'py-3', 'my-3', 'text-center');
        panel.dataset.enhanced = 'true';
    }

     function formatNumberWithCommas(val) {
        if (val === null || val === undefined) return '';
        let stringVal = val.toString().replace(/,/g, '');
        if (isNaN(stringVal) || stringVal.trim() === '') return '';
        try { return Number(stringVal).toLocaleString('en-US'); } catch (e) { return stringVal; }
    }

    function injectStyles() {
        if (document.getElementById('gavan-panel-styles')) { return; }
        const styleElement = document.createElement('style');
        styleElement.id = 'gavan-panel-styles';
        styleElement.innerHTML = panelStyles;
        document.head.appendChild(styleElement);
    }

    document.addEventListener('DOMContentLoaded', () => {
        injectStyles();
        styleEnhancedMemberPanel();
        const observer = new MutationObserver((mutations) => {
            const panel = document.getElementById('member-status-panel');
            if (panel && !panel.dataset.enhanced) { styleEnhancedMemberPanel(); }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    });
})();