(function() {
    // --- CSS KHUSUS PANEL MEMBER: TEMA DANANG/PETER PAN (GREEN & YELLOW) ---
    const panelStyles = `
        #member-status-panel.gavan-member-panel-enhanced {
            /* === BACKGROUND DARK GREEN === */
            background: linear-gradient(160deg, #072712, #001105) !important;
            border: 1px solid #bff116 !important; /* Border Lime */
            box-shadow: 0 0 15px rgba(191, 241, 22, 0.3) !important; /* Glow Lime Halus */
            /* ==================================== */
            border-radius: 15px !important;
            padding: 0.8rem 1rem !important;
            color: #ecf0f1 !important;
            display: flex;
            flex-direction: column;
            gap: 0.5rem !important;
            transition: all 0.3s ease;
            margin-bottom: 20px !important;
        }

        #member-status-panel.gavan-member-panel-enhanced:hover {
             box-shadow: 0 5px 25px rgba(191, 241, 22, 0.5) !important; 
             border-color: #fff927 !important; /* Border jadi kuning saat hover */
             transform: translateY(-2px);
        }

        .gmp-top-area {
            display: grid;
            grid-template-columns: 1fr auto;
            grid-template-rows: auto auto;
            align-items: baseline;
            width: 100%;
            row-gap: 0.2rem;
            column-gap: 0.5rem;
            border-bottom: 1px solid #2e5c3b; /* Garis pemisah hijau redup */
            padding-bottom: 8px;
            margin-bottom: 5px;
        }

        .gmp-balance-label {
            grid-column: 1; grid-row: 1;
            font-size: 0.75em;
            font-weight: 600;
            color: #bdc3c7; 
            text-transform: uppercase;
            letter-spacing: 1px;
            text-align: left;
            align-self: end;
        }

        .gmp-user-id-label {
            grid-column: 2; grid-row: 1;
            font-size: 0.75em;
            font-weight: 600;
            color: #bdc3c7;
            text-transform: uppercase;
            letter-spacing: 1px;
            text-align: right;
            align-self: end;
        }

        /* === NILAI SALDO: KUNING GLOWING === */
        .gmp-balance-value {
            grid-column: 1; grid-row: 2;
            font-size: 1.4em !important;
            font-weight: 700 !important;
            line-height: 1 !important;
            color: #fff927 !important; /* KUNING PETER PAN */
            text-shadow: 0 0 10px rgba(255, 249, 39, 0.5); /* Glow Kuning */
            display: inline-flex;
            align-items: baseline;
            white-space: nowrap;
            text-align: left;
            align-self: start;
            font-family: 'Exo 2', sans-serif !important;
        }

        .gmp-balance-value .currency-label {
             font-size: 0.5em;
             vertical-align: baseline;
             margin-left: 6px; /* Jarak antara angka dan IDR */
             font-weight: 600;
             color: #ecf0f1 !important; /* Putih */
             opacity: 0.8;
         }

        /* Ikon Mata (Lime Green) */
        .gmp-balance-value .balance-toggle-icon {
            font-size: 0.8em !important;
            margin-left: 8px !important;
            cursor: pointer;
            color: #bff116 !important; /* Lime Green */
            vertical-align: middle;
            transition: all 0.3s;
        }
         .gmp-balance-value .balance-toggle-icon:hover {
             color: #fff !important;
             text-shadow: 0 0 5px #bff116;
         }

        /* === USERNAME: PUTIH === */
         .gmp-user-id-value {
             grid-column: 2; grid-row: 2;
             font-size: 1.1em !important;
             font-weight: 700 !important;
             color: #fff !important;
             text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
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
             gap: 0.8rem !important;
             width: 100%;
             margin-top: 0.5rem !important;
         }

         .gmp-action-btn {
             flex: 1;
             padding: 0.4rem 0.5rem !important;
             font-size: 0.85em !important;
             display: flex;
             align-items: center;
             justify-content: center;
             gap: 6px;
             border-radius: 8px !important;
             white-space: nowrap;
             border: none !important;
             font-weight: 700 !important;
             text-transform: uppercase;
             transition: all 0.3s ease !important;
         }

         /* TOMBOL DEPOSIT: HIJAU MUDA (LIME) GRADIENT */
          .gmp-action-btn.btn-primary {
              background: linear-gradient(45deg, #8fa310, #bff116) !important;
              color: #072712 !important; /* Teks Gelap agar kontras */
              box-shadow: 0 0 10px rgba(191, 241, 22, 0.5), inset 0 0 5px rgba(255,255,255,0.2);
          }
          .gmp-action-btn.btn-primary:hover {
              background: linear-gradient(45deg, #bff116, #d1ff33) !important;
              box-shadow: 0 0 20px rgba(191, 241, 22, 0.7);
              transform: translateY(-2px);
          }
          
          /* TOMBOL WITHDRAW: KUNING GRADIENT */
           .gmp-action-btn.btn-secondary {
              background: linear-gradient(45deg, #fff927, #e6e020) !important;
              color: #072712 !important; /* Teks Gelap agar kontras */
              box-shadow: 0 0 10px rgba(255, 249, 39, 0.5);
          }
           .gmp-action-btn.btn-secondary:hover {
              background: linear-gradient(45deg, #ffe066, #ffb300) !important;
              box-shadow: 0 0 20px rgba(255, 249, 39, 0.7);
              transform: translateY(-2px);
          }

          .gmp-action-btn i.bi {
              font-size: 1.2em;
          }
    `;

    function styleEnhancedMemberPanel() {
        const panel = document.getElementById('member-status-panel');
        if (!panel || panel.dataset.enhanced === 'true') {
            return;
        }

        const usernameElement = panel.querySelector('strong');
        const balanceSpan = panel.querySelector('.text-gradient');
        const originalBalanceValue = balanceSpan ? balanceSpan.textContent.trim() : '0';
        const toggleIconElement = panel.querySelector('.balance-toggle-icon');

        let userId = usernameElement ? usernameElement.textContent.replace('Halo,', '').trim() : 'MEMBER';
        
        panel.innerHTML = '';

        panel.innerHTML = `
            <div class="gmp-top-area">
                <div class="gmp-balance-label">SALDO ANDA</div>
                <div class="gmp-user-id-label">USERNAME</div> <div class="gmp-balance-value">
                    <span class="balance-value">${originalBalanceValue}</span> <span class="currency-label"> IDR</span> </div>
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
            newToggleIcon.className = toggleIconElement ? toggleIconElement.className : 'bi bi-eye-fill balance-toggle-icon';
            
            balanceValueContainer.appendChild(newToggleIcon);

            const valueSpan = balanceValueContainer.querySelector('.balance-value');
            const storedState = localStorage.getItem('balanceVisibility') || 'visible';

            const updateView = (state) => {
                 if (!valueSpan) return;
                 if (state === 'hidden') {
                    valueSpan.textContent = '•••••';
                    newToggleIcon.className = 'bi bi-eye-slash-fill balance-toggle-icon';
                 } else {
                    valueSpan.textContent = originalBalanceValue;
                    newToggleIcon.className = 'bi bi-eye-fill balance-toggle-icon';
                 }
                 // Sinkronkan dengan sidebar jika ada
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
                 e.preventDefault();
                 e.stopPropagation();
                 const currentState = (localStorage.getItem('balanceVisibility') || 'visible');
                 const newState = currentState === 'visible' ? 'hidden' : 'visible';
                 localStorage.setItem('balanceVisibility', newState);
                 updateView(newState);
            });

             updateView(storedState);
        }

        panel.classList.add('gavan-member-panel-enhanced');
        panel.classList.remove('glassmorphism', 'py-3', 'my-3', 'text-center');
        panel.dataset.enhanced = 'true';
    }

     function formatNumberWithCommas(val) {
        if (val === null || val === undefined) return '';
        let stringVal = val.toString().replace(/,/g, '');
        if (isNaN(stringVal) || stringVal.trim() === '') return '';
        try {
            return Number(stringVal).toLocaleString('en-US');
        } catch (e) {
            return stringVal;
        }
    }

    function injectStyles() {
        if (document.getElementById('gavan-panel-styles')) {
            return;
        }
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
            if (panel && !panel.dataset.enhanced) {
                 styleEnhancedMemberPanel();
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });
        // Fallback run
        setTimeout(styleEnhancedMemberPanel, 500);
    });

    if (document.readyState === 'complete') {
         injectStyles();
         styleEnhancedMemberPanel();
    }

})();
