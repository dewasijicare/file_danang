(function() {
    // ==========================================
    // TEMA DANANG (MERAH & KUNING)
    // ==========================================
    const danangThemeStyles = `
        @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
        
        /* --- PALET WARNA --- 
           Background: #0f0505 (Hitam Kemerahan) & #1a0a0a (Merah Gelap)
           Primary Accent: #ff3333 (Merah Terang/Neon)
           Border/Secondary: #b30000 (Merah Darah)
           Gold/Yellow: #FFD700 (Tetap sama)
        */

        /* Base Body & Fonts */
        body { background-color: #050505 !important; font-family: 'Exo 2', sans-serif !important; color: #ecf0f1 !important; }

        /* Input Fields */
        .input-group-text { background-color: #2b0b0b; border-color: #5c1818; color: #ff3333; }
        .form-control, .form-select { background-color: #1a0a0a !important; border: 1px solid #5c1818 !important; color: #fff !important; border-radius: 5px; transition: all .3s ease; }
        .form-control:focus, .form-select:focus { border-color: #ff3333 !important; box-shadow: 0 0 10px rgba(255, 51, 51, 0.5) !important; }
        .form-label { color: #ecf0f1 !important; text-shadow: 0 0 5px #b30000; }
        
        /* Alerts */
        .alert.themed-alert-danger { background: linear-gradient(145deg, #a73c2e, #c0392b) !important; border: 1px solid #e74c3c !important; color: #fff !important; box-shadow: 0 0 15px rgba(231, 76, 60, 0.6); border-radius: 8px; text-shadow: 0 1px 3px rgba(0,0,0,0.4); }
        .alert.alert-primary, .modal-body .alert.alert-warning { background: linear-gradient(160deg, #2b0b0b, #1a0a0a) !important; border: 1px solid #b30000 !important; border-radius: 10px !important; color: #ecf0f1 !important; box-shadow: 0 0 15px rgba(179, 0, 0, 0.4); }
        .alert.alert-primary h4, .alert.alert-primary span, .alert.alert-primary .fw-bold { color: #fff !important; }

        /* Headers & Texts */
        #maincontent h1.text-center, #maincontent h3, h3.my-2, .modal-title { color: #FFD700 !important; text-transform: uppercase !important; text-shadow: 0 0 10px rgba(255, 215, 0, 0.6); }
        .text-center h3 { color: #FFD700 !important; }
        a { color: #ff3333 !important; text-decoration: none; transition: all .3s ease; }
        a:hover { color: #fff !important; text-shadow: 0 0 10px #ff3333; }

        /* Buttons */
        .btn-primary { background: linear-gradient(45deg, #b30000, #ff3333) !important; border: none !important; color: #fff !important; font-weight: 700; text-transform: uppercase; box-shadow: 0 0 10px #ff3333, inset 0 0 5px rgba(255,255,255,.4); transition: all .3s ease; }
        .btn-primary:hover { transform: scale(1.05); box-shadow: 0 0 20px #ff3333, 0 0 30px #b30000, inset 0 0 5px rgba(255,255,255,.4); }
        
        .btn-secondary { background: linear-gradient(45deg, #ffd700, #ffa500) !important; border-color: #ffd700 !important; color: #2b0b0b !important; font-weight: 700; text-transform: uppercase; box-shadow: 0 0 10px #ffd700, inset 0 0 5px rgba(255,255,255,.7); transition: all .3s ease; }
        .btn-secondary:hover { transform: scale(1.05); background: linear-gradient(45deg, #ffdf33, #ffb01a) !important; box-shadow: 0 0 20px #ffd700, 0 0 30px #ffa500; }

        .btn-danger { background: linear-gradient(45deg, #5c1818, #3d0000) !important; border: 1px solid #ff3333 !important; color: #fff !important; }

        /* Cards & Containers */
        .card, .modal-content, #row-quicklogin.card, #betting-page-container .card { background: linear-gradient(145deg, #1f0a0a, #0f0000) !important; border: 1px solid #b30000 !important; box-shadow: 0 0 15px rgba(179, 0, 0, 0.4) !important; border-radius: 15px !important; }
        .card-header, .modal-header, .modal-footer { background-color: #2b0b0b !important; border-bottom: 1px solid #b30000 !important; border-top: 1px solid #b30000 !important; color: #FFD700; }
        
        /* Navigation (Navbar & Sidebar) */
        nav#navbar-top, nav#sidebar { background-color: #0f0000 !important; border-bottom: 1px solid #b30000 !important; border-right: 1px solid #b30000 !important; box-shadow: 0 2px 10px rgba(179, 0, 0, 0.3) !important; }
        #sidebar .nav-link { color: #ecf0f1 !important; border-left: 3px solid transparent; }
        #sidebar .nav-link:hover, #sidebar .nav-item.active .nav-link { background-color: rgba(255, 51, 51, 0.1) !important; color: #ff3333 !important; border-left-color: #ff3333; }
        #sidebar .d-flex[style*="background-image"] { background-image: none !important; background-color: #2b0b0b !important; border-bottom: 2px solid #b30000; }
        
        /* Tables */
        .table { color: #ecf0f1 !important; border-color: #5c1818 !important; }
        .table thead th { background-color: rgba(179, 0, 0, 0.2) !important; border-bottom: 2px solid #b30000 !important; color: #FFD700; }
        .table td { border-color: #5c1818 !important; }
        
        /* Betting Specifics */
        #betting-page-container .card-header { background-color: rgba(179, 0, 0, 0.2); border-bottom: 1px solid #b30000; color: #ffd700; }
        #betting-page-container .category-buttons .btn.active { background: linear-gradient(45deg, #b30000, #ff3333) !important; border-color: #ff3333 !important; box-shadow: 0 0 15px #ff3333; }
        #betting-page-container .table-input td.td-input .form-control:focus { box-shadow: inset 0 0 0 2px #ff3333 !important; }
        
        /* Custom Elements */
        .glassmorphism { background: linear-gradient(145deg, #1f0a0a, #0f0000) !important; border: 1px solid #b30000 !important; box-shadow: 0 0 10px rgba(179, 0, 0, 0.4) !important; }
        
        /* Progress Bars */
        .progress { background-color: #0f0000 !important; border: 1px solid #5c1818; }
        .progress-bar-rtp.bg-success { background-image: linear-gradient(90deg, #2ecc71 25%, #27ae60 50%, #2ecc71 75%) !important; } /* Green stays green for High RTP */
        .progress-bar-rtp.bg-danger { background-image: linear-gradient(90deg, #e74c3c 25%, #c0392b 50%, #e74c3c 75%) !important; }
        .progress-bar-rtp.bg-primary { background-image: linear-gradient(90deg, #ff3333 25%, #b30000 50%, #ff3333 75%) !important; box-shadow: 0 0 10px #ff3333; } /* Blue becomes Red here */
        
        /* Icons & Utilities */
        i.bi { color: #ff3333; }
        .bi-check-lg, .copy-btn-success i { color: #2ecc71 !important; }
        #member-status-panel strong { color: #FFD700 !important; text-shadow: 0 0 5px rgba(255, 215, 0, 0.6) !important; }
        .pagination .page-item.active .page-link { background: linear-gradient(45deg, #b30000, #ff3333); border-color: #ff3333; }
        .pagination .page-link { color: #ff3333; border-color: #b30000; }
        
        /* Promo Box */
        .promo-choice-box { background-color: #1a0a0a; border: 2px solid #5c1818; color: #ecf0f1; }
        .promo-choice-box:hover { border-color: #ff3333; }
        .promo-choice-box.selected { border-color: #FFD700; box-shadow: 0 0 10px rgba(255, 215, 0, 0.6); }
        .promo-choice-box h5 { color: #FFD700; }
        
        /* Gacor Card */
        .gacor-card { background: linear-gradient(145deg, #1f0a0a, #0f0000); border: 1px solid #b30000; }
        .gacor-card:hover { transform: translateY(-3px); box-shadow: 0 3px 15px rgba(255, 51, 51, 0.5); }
        .gacor-time i { color: #ff3333; }

        /* General Toggles */
        #custom-sidebar-toggle { color: #ff3333 !important; text-shadow: 0 0 10px #ff3333 !important; }
        #custom-sidebar-toggle:hover { color: #fff !important; }
        .password-toggle-icon, .balance-toggle-icon { color: #FFD700; }
        
        /* Carousel Togel */
        #carousel-togel .card { background: linear-gradient(160deg, #1f0a0a, #0f0000) !important; border: 1px solid #b30000 !important; box-shadow: 0 0 15px rgba(179, 0, 0, 0.5) !important; }
        #carousel-togel .card .togel-countdown-timer { color: #ff3333; }
    `;

    const styleElement = document.createElement('style');
    document.head.appendChild(styleElement);
    styleElement.innerHTML = danangThemeStyles;

    // --- KUMPULAN FUNGSI ---
    let intervalsInitialized = false;

    function formatNumberWithCommas(val) {
        if (val === null || val === undefined) return '';
        let stringVal = val.toString().replace(/,/g, '');
        if (isNaN(stringVal) || stringVal.trim() === '') return '';
        try { return Number(stringVal).toLocaleString('en-US'); } catch (e) { return stringVal; }
    }
    
    function initializeBetFormatting() {
        document.querySelectorAll('#betting-page-container td.td-input > input.form-control[name^="bet"]:not(.display-input), #betting-page-container td.td-input > input.form-control[id^="bet-"]:not(.display-input)').forEach(originalInput => {
            if (originalInput.dataset.betFormatted === 'true' || originalInput.offsetParent === null || originalInput.type === 'hidden') return;
            let displayInput = originalInput.previousElementSibling;
            if (!displayInput || !displayInput.classList.contains('display-input')) {
                displayInput = originalInput.cloneNode(true);
                displayInput.id = 'display_' + originalInput.id;
                displayInput.classList.add('display-input');
                displayInput.type = 'text';
                displayInput.inputMode = 'numeric';
                displayInput.pattern = '[0-9,]*';
                displayInput.removeAttribute('name'); 
                originalInput.parentNode.insertBefore(displayInput, originalInput);
            }
            originalInput.style.display = 'none';
            displayInput.value = formatNumberWithCommas(originalInput.value);
            const handleInput = () => {
                const rawValue = displayInput.value.replace(/,/g, '');
                if (/^\d*$/.test(rawValue)) {
                    originalInput.value = rawValue;
                    originalInput.dispatchEvent(new Event('change', { bubbles: true }));
                    const formattedValue = formatNumberWithCommas(rawValue);
                    displayInput.value = formattedValue;
                } else {
                    displayInput.value = formatNumberWithCommas(originalInput.value);
                }
            };
            displayInput.addEventListener('input', handleInput);
            displayInput.addEventListener('blur', () => { displayInput.value = formatNumberWithCommas(originalInput.value); });
            originalInput.dataset.betFormatted = 'true';
        });
    }

    function setupPersistentCountdownIntervals() { if (intervalsInitialized) return; setInterval(() => { document.querySelectorAll('#carousel-togel .togel-countdown-timer').forEach(timer => { const now = new Date().getTime(); const closingTime = parseInt(timer.dataset.time, 10); const status = parseInt(timer.dataset.status, 10); if (status !== 1 || !closingTime || isNaN(closingTime) || (closingTime - now) <= 0) { timer.classList.remove('show-warning-text', 'closing-soon'); if (!timer.classList.contains('is-closed')) { timer.textContent = "TUTUP"; timer.classList.add('is-closed'); } return; } const diff = closingTime - now; if (diff < 1800000) { timer.classList.add('closing-soon'); let blinkCounter = parseInt(timer.dataset.blinkCounter || '0', 10); if (blinkCounter < 5) { timer.classList.add('show-warning-text'); } else { timer.classList.remove('show-warning-text'); } timer.dataset.blinkCounter = (blinkCounter + 1) % 10; } else { timer.classList.remove('closing-soon', 'show-warning-text'); if (timer.dataset.blinkCounter) { delete timer.dataset.blinkCounter; } } }); }, 1000); intervalsInitialized = true; }
    function initializeSwipeableHeaderMenu() { const menuNav = document.querySelector('nav.menubar.d-xl-none'); if (!menuNav || menuNav.dataset.styled === 'true') return; const originalContainer = menuNav.querySelector('#category-navbar .owl-stage-outer'); if (!originalContainer) return; const allItems = Array.from(originalContainer.querySelectorAll('.owl-item:not(.cloned) > .item')); if (allItems.length === 0) return; const homeItem = allItems.find(item => item.querySelector('a[href="/"]')); const otherItems = allItems.filter(item => item !== homeItem); if (!homeItem || otherItems.length === 0) return; const wrapper = document.createElement('div'); wrapper.className = 'custom-header-wrapper'; const homeDiv = document.createElement('div'); homeDiv.className = 'home-link-fixed'; homeDiv.appendChild(homeItem.cloneNode(true)); const scrollableDiv = document.createElement('div'); scrollableDiv.className = 'scrollable-menu-container'; const owlCarouselDiv = document.createElement('div'); owlCarouselDiv.className = 'owl-carousel other-items-carousel'; otherItems.forEach(item => { owlCarouselDiv.appendChild(item.cloneNode(true)); }); scrollableDiv.appendChild(owlCarouselDiv); wrapper.appendChild(homeDiv); wrapper.appendChild(scrollableDiv); const parentContainer = menuNav.querySelector('.container'); parentContainer.innerHTML = ''; parentContainer.appendChild(wrapper); const newCarousel = $(parentContainer).find('.other-items-carousel'); if (newCarousel.length > 0) { newCarousel.owlCarousel({ autoWidth: true, loop: true, margin: 15, nav: false, dots: false, autoplay: true, autoplayTimeout: 4000, autoplayHoverPause: true, }); } menuNav.dataset.styled = 'true'; }
    function initializeTogelCarousel() { const carousel = document.querySelector('#carousel-togel'); if (!carousel || carousel.dataset.initialized === 'true') return; setTimeout(() => { const stage = carousel.querySelector('.owl-stage'); if (!stage || carousel.dataset.initialized === 'true') return; const items = Array.from(stage.querySelectorAll('.owl-item:not(.cloned)')); if (items.length <= 1) return; const sortedItems = items.map(item => { const timer = item.querySelector('.togel-countdown-timer'); const time = timer ? parseInt(timer.dataset.time, 10) : Infinity; const status = timer ? parseInt(timer.dataset.status, 10) : -1; const isClosed = (timer && timer.textContent.trim().toUpperCase() === 'TUTUP') || status !== 1; return { element: item, time: isClosed ? Infinity : time }; }).sort((a, b) => a.time - b.time); stage.innerHTML = ''; sortedItems.forEach(item => stage.appendChild(item.element)); const existingButton = carousel.parentElement.querySelector(".show-more-wrapper"); if (existingButton) existingButton.remove(); const showMoreWrapper = document.createElement("div"); showMoreWrapper.className = "show-more-wrapper"; const showMoreButton = document.createElement("button"); showMoreButton.className = "show-more-button"; showMoreButton.innerHTML = 'Tampilkan Semua Pasaran <i class="bi bi-chevron-down"></i>'; showMoreWrapper.appendChild(showMoreButton); carousel.parentElement.insertBefore(showMoreWrapper, carousel.nextSibling); showMoreButton.addEventListener("click", () => { const isShowingAll = carousel.classList.toggle("show-all"); showMoreButton.innerHTML = isShowingAll ? 'Tutup <i class="bi bi-chevron-up"></i>' : 'Tampilkan Semua Pasaran <i class="bi bi-chevron-down"></i>'; }); carousel.dataset.initialized = 'true'; }, 700); }
    function styleTogelTutorialPage() { const navTab = document.querySelector('#nav-tab'); if (!navTab || navTab.dataset.styled === 'true') return; navTab.dataset.styled = 'true'; }
    function styleMemberStatusPanel() { const panel = document.querySelector('#member-status-panel'); if (!panel || panel.dataset.styled === 'true') return; const greetingDiv = Array.from(panel.querySelectorAll('div')).find(div => div.textContent.includes('Halo,')); if (greetingDiv) { const usernameStrong = greetingDiv.querySelector('strong'); if (usernameStrong) { greetingDiv.innerHTML = ''; greetingDiv.appendChild(usernameStrong); greetingDiv.style.lineHeight = '1.2em'; } } panel.dataset.styled = 'true'; }
    function addSidebarBalanceToggle() { const creditSpan = Array.from(document.querySelectorAll("#sidebar span")).find(span => span.textContent.includes("CREDIT:")); if (!creditSpan || creditSpan.dataset.balanceToggleAdded === 'true') return; const textContent = creditSpan.textContent.trim(); const match = textContent.match(/CREDIT:\s*([\d,.]+)/); if (!match) return; const originalValue = match[1]; const currency = textContent.split(originalValue)[1]?.trim() || 'IDR'; creditSpan.innerHTML = `CREDIT: <span class="balance-value">${originalValue}</span> ${currency} `; const valueSpan = creditSpan.querySelector('.balance-value'); const toggleIcon = document.createElement('i'); toggleIcon.className = 'bi bi-eye-fill balance-toggle-icon'; const updateView = (state) => { if (state === 'hidden') { valueSpan.textContent = '•••••'; toggleIcon.className = 'bi bi-eye-slash-fill balance-toggle-icon'; } else { valueSpan.textContent = originalValue; toggleIcon.className = 'bi bi-eye-fill balance-toggle-icon'; } }; toggleIcon.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); const newState = (localStorage.getItem('balanceVisibility') || 'visible') === 'visible' ? 'hidden' : 'visible'; localStorage.setItem('balanceVisibility', newState); updateView(newState); addMainBalanceToggle(true); }); creditSpan.appendChild(toggleIcon); creditSpan.dataset.balanceToggleAdded = 'true'; const savedState = localStorage.getItem('balanceVisibility'); if (savedState) updateView(savedState); }
    function addMainBalanceToggle(forceUpdate = false) { const panel = document.querySelector('#member-status-panel'); if (!panel) return; const balanceSpan = panel.querySelector('.text-gradient'); const link = panel.querySelector('a'); if (!balanceSpan || !link) return; if (panel.dataset.toggleAdded === 'true' && !forceUpdate) return; const originalValue = (forceUpdate && link.dataset.originalBalance) ? link.dataset.originalBalance : balanceSpan.textContent.trim(); if(!link.dataset.originalBalance) link.dataset.originalBalance = originalValue; const updateView = (state) => { if (state === 'hidden') { balanceSpan.textContent = '•••••'; if (link.querySelector('.balance-toggle-icon')) link.querySelector('.balance-toggle-icon').className = 'bi bi-eye-slash-fill balance-toggle-icon'; } else { balanceSpan.textContent = originalValue; if (link.querySelector('.balance-toggle-icon')) link.querySelector('.balance-toggle-icon').className = 'bi bi-eye-fill balance-toggle-icon'; } }; if (panel.dataset.toggleAdded !== 'true') { const toggleIcon = document.createElement('i'); toggleIcon.className = 'bi bi-eye-fill balance-toggle-icon'; toggleIcon.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); const newState = (localStorage.getItem('balanceVisibility') || 'visible') === 'visible' ? 'hidden' : 'visible'; localStorage.setItem('balanceVisibility', newState); updateView(newState); addSidebarBalanceToggle(); }); link.appendChild(toggleIcon); panel.dataset.toggleAdded = 'true'; } const savedState = localStorage.getItem('balanceVisibility'); if (savedState) updateView(savedState); }
    function addPasswordToggle(passwordInput) { if (!passwordInput || passwordInput.dataset.toggleAdded === 'true') return; const wrapper = passwordInput.closest('.input-wrapper'); if (!wrapper) { const parent = passwordInput.parentElement; const newWrapper = document.createElement('div'); newWrapper.className = 'input-wrapper'; parent.replaceChild(newWrapper, passwordInput); newWrapper.appendChild(passwordInput); } const finalWrapper = passwordInput.closest('.input-wrapper'); if (!finalWrapper || finalWrapper.querySelector('.password-toggle-icon')) return; const toggleIcon = document.createElement('i'); toggleIcon.className = 'bi bi-eye-fill password-toggle-icon'; toggleIcon.addEventListener('click', () => { const isPassword = passwordInput.type === 'password'; passwordInput.type = isPassword ? 'text' : 'password'; toggleIcon.className = isPassword ? 'bi bi-eye-slash-fill password-toggle-icon' : 'bi bi-eye-fill password-toggle-icon'; }); finalWrapper.appendChild(toggleIcon); passwordInput.dataset.toggleAdded = 'true'; }
    function fetchRtpWithIframe() { return new Promise((e,t)=>{const o=document.createElement("iframe");o.src="/rtp",o.style.display="none",o.onload=function(){try{const a=o.contentDocument||o.contentWindow.document,n=a.querySelectorAll('.row.mb-3.g-1 > div[class*="col-"]');if(0===n.length)return t(new Error("No games found"));const l=Array.from(n).filter(e=>{const t=e.querySelector(".progress-bar-rtp");return t&&parseInt(t.textContent)>=75});if(0===l.length)return t(new Error("No games with RTP >= 75%"));const c=l.map(e=>{const t=e.querySelector("a"),o=e.querySelector(".progress-bar-rtp");return{link:t.dataset.playurl,image:t.querySelector("img").src,name:t.dataset.gamename,percentage:parseInt(o.textContent),colorClass:Array.from(o.classList).find(e=>e.startsWith("bg-"))}});e(c)}catch(e){t(e)}finally{document.body.removeChild(o)}},o.onerror=function(){t(new Error("Failed to load RTP iframe")),document.body.removeChild(o)},document.body.appendChild(o)})}
    function displayGacorGames(container, games) { let e="";games.forEach(t=>{const o=new Date;let a=o.getHours();const n=o.getMinutes();let l=5*Math.ceil((n+1)/5),r=[];l>=60&&(a=(a+1)%24,l=0);for(let e=l;e<60;e+=5)r.push(`${String(a).padStart(2,"0")}:${String(e).padStart(2,"0")}`);0===r.length&&(a=(a+1)%24,r.push(`${String(a).padStart(2,"0")}:00`));const c=r[Math.floor(Math.random()*r.length)];e+=`<a href="${t.link}" target="_blank" class="gacor-card"><img src="${t.image}" alt="${t.name}"><div class="gacor-info"><strong title="${t.name}">${t.name}</strong><div class="gacor-time"><i class="bi bi-clock-fill"></i> Pola Berlaku Jam: ${c}</div><div class="progress mt-2"><div class="progress-bar-rtp ${t.colorClass}" role="progressbar" style="width: ${t.percentage}%">${t.percentage}%</div></div></div></a>`}),container.innerHTML=`<h5><i class="bi bi-stars"></i> GAME GACOR SAAT INI</h5><div class="gacor-card-container">${e}</div>`;const t=container.querySelectorAll(".gacor-info strong");t.forEach(e=>{const t=20;e.textContent.length>t&&(e.textContent=e.textContent.substring(0,t-3)+"...")})}
    
    async function injectGacorGame() { if(document.getElementById("gacor-game-sidebar"))return;const e=document.getElementById("sidebar");if(!e)return;const t=document.createElement("div");t.id="gacor-game-sidebar",t.className="m-3",t.innerHTML='<h5><i class="bi bi-stars"></i> GAME GACOR SAAT INI</h5><div class="gacor-card-placeholder">Mencari sinyal gacor...</div>',e.appendChild(t);const o=!!document.querySelector('#sidebar .d-flex[style*="background-image"]'),a=o?1:3;try{const e=await fetchRtpWithIframe(),o=e.sort(()=>.5-Math.random()).slice(0,a);displayGacorGames(t,o)}catch(e){console.error("Gagal memuat game gacor:",e);const o={link:"/launch-pragmatic/vs20olympgold",image:"https://4n76bph80j.gbgfstie.biz/game_pic/square/200/vs20olympgold.png",name:"Gates of Olympus",percentage:96,colorClass:"bg-primary"};displayGacorGames(t,[o].slice(0,a))}}
    
    function styleRtpModal() { const rtpModalLabel = document.querySelector('#rtpModalLabel'); if (!rtpModalLabel || rtpModalLabel.closest('.modal-content').dataset.styled === 'true') return; const modalContent = rtpModalLabel.closest('.modal-content'); modalContent.querySelectorAll(".list-group-item small > strong").forEach(title => { if (title.textContent.includes("Step")) title.textContent = title.textContent.replace(/Step \d+:\s*/, "").trim(); }); ["Provider Name", "Slot Game"].forEach(labelText => { const labelDiv = Array.from(modalContent.querySelectorAll(".modal-body .row .col-6")).find(el => el.textContent.trim() === labelText); if (labelDiv) { const row = labelDiv.closest(".row"); if (row) { const valueDiv = row.querySelector(".col-6.text-end"); if (valueDiv) { valueDiv.classList.remove("col-6", "text-end"); valueDiv.classList.add("col-12", "text-center"); if (labelText === "Provider Name") valueDiv.style.paddingBottom = "0rem"; if (labelText === "Slot Game") valueDiv.style.marginBottom = "1rem"; } labelDiv.remove(); } } }); const modalTitle = modalContent.querySelector(".modal-title"); if (modalTitle && !modalTitle.querySelector("i")) modalTitle.innerHTML = `<i class="bi bi-controller"></i> TIPS BERMAIN`; const noteElement = modalContent.querySelector(".text-muted.text-center"); if (noteElement && noteElement.textContent.includes("Lakukan Pola diatas Sebanyak 2x")) noteElement.innerHTML = "<small><strong>Note : </strong> Jika Tersedia / Ingin Membeli Fitur Spin, Lakukan Pola diatas Sebanyak 2x Terlebih Dahulu</small>"; modalContent.dataset.styled = "true"; }
    
    // --- UPDATE SCRIPT UNTUK DANANG ---
    function runAllOtherScripts() { 
        [{selector:"h3.my-2:not(#row-togel h3)",oldText:"Terbaru",newText:"GAME TERBARU",icon:"bi-stars"},{selector:"h3.my-2:not(#row-togel h3)",oldText:"100 RP",newText:"GAME RP 100",icon:"bi-coin"},{selector:"h3.my-2:not(#row-togel h3)",oldText:"Populer",newText:"GAME POPULER",icon:"bi-fire"},{selector:"h3.my-2:not(#row-togel h3)",oldText:"Terakhir Dimainkan",newText:"TERAKHIR DIMAINKAN",icon:"bi-clock-history"},{selector:"h3.text-center",oldText:"Provider Kami",newText:"PROVIDER KAMI",icon:"bi-puzzle-fill"},{selector:"h3.text-center",oldText:"Cara Pembayaran",newText:"CARA PEMBAYARAN",icon:"bi-wallet-fill"},{selector:"h3.text-center",oldText:"Temui Kami",newText:"TEMUI KAMI",icon:"bi-people-fill"}].forEach(e=>{document.querySelectorAll(e.selector).forEach(t=>{if(t.textContent.trim().includes(e.oldText)&&!t.querySelector("i"))t.innerHTML=`<i class="bi ${e.icon}"></i> ${e.newText}`})}); const e=document.querySelector("#row-togel h3"),t=document.querySelector("#row-togel > .d-flex > a");if(e&&t&&!e.querySelector("a")){var o=t.href,l="PASARAN TOGEL";const n=document.createElement("a");n.href=o;const c=document.createElement("i");c.className="bi bi-bullseye",n.appendChild(c),n.appendChild(document.createTextNode(` ${l}`)),e.innerHTML="",e.appendChild(n)} document.querySelectorAll(".progress-bar-rtp").forEach(e=>{let t=e.textContent.trim();t.includes("[RTP]")&&(e.textContent=t.replace(/\s*\[RTP\]\s*/,""))}); 
        
        // --- CUSTOM LINK UNTUK DANANG (EDIT DISINI) ---
        const r=document.querySelector("#row-quicklogin .card-body");if(r&&!document.querySelector(".custom-promo-buttons-container")){
            const e=[
                {text:"WHATSAPP DANANG", link:"https://wa.me/NOMOR_HP_DANANG", icon:"bi-whatsapp"}, // Ganti Link WA
                {text:"GROUP FACEBOOK", link:"https://facebook.com/groups/GROUP_DANANG", icon:"bi-facebook"} // Ganti Link FB
            ],t=document.createElement("div");t.className="custom-promo-buttons-container mt-4 d-grid gap-2",e.forEach(e=>{const o=document.createElement("a");o.href=e.link,o.target="_blank",o.className="btn btn-custom-promo",o.innerHTML=`<i class="bi ${e.icon}"></i> ${e.text}`,t.appendChild(o)});const o=r.lastElementChild;o&&o.parentNode.insertBefore(t,o.nextSibling)
        } 
        
        const i={username:"bi-person-fill",password:"bi-key-fill",confirmpassword:"bi-shield-lock-fill",email:"bi-envelope-fill",phone:"bi-phone-fill",agentbankid:"bi-bank",bankAccountNumber:"bi-credit-card-2-front-fill",bankaccountname:"bi-person-vcard-fill"};for(const[e,t]of Object.entries(i)){const o=document.querySelector(`label[for="${e}"]`);o&&!o.querySelector("i")&&(o.innerHTML=`<i class="bi ${t}"></i> ${o.innerText}`)} 
    }

    function createSidebarToggleButton(){if(document.getElementById("custom-sidebar-toggle"))return;const e=document.createElement("a");e.id="custom-sidebar-toggle",e.href="#",e.innerHTML='<i class="bi bi-arrow-left-circle-fill"></i>',document.body.appendChild(e),e.addEventListener("click",function(e){e.preventDefault(),document.getElementById("sidebar").classList.remove("active"),document.querySelector(".overlay").classList.remove("active")})}
    
    function updateProfileElements(){
        const e=document.querySelector("#sidebar .bi-person-circle");
        if(e){
            // Gunakan icon/logo Danang atau hapus baris ini jika ingin icon default
            // const t=document.createElement("img");t.src="URL_LOGO_DANANG.png",t.className="gaban-profile-icon",e.parentNode.replaceChild(t,e)
        }
        const t=Array.from(document.querySelectorAll("#sidebar span")).find(e=>e.textContent.includes("CREDIT:"));t&&(t.style.color="#FFD700")
    }

    // LIST ICON BANK (Bisa disesuaikan dengan aset Danang jika ada)
    const BANK_ICONS = {'DANA':'https://adiltoto.org/images/dana_ok.png','OVO':'https://adiltoto.org/images/ovo_ok.png','GOPAY':'https://adiltoto.org/images/gopay_ok.png','LINKAJA':'https://adiltoto.org/images/link_ok.png','BCA':'https://adiltoto.org/images/bca_ok.png','BNI':'https://adiltoto.org/images/bni_ok.png','BRI':'https://adiltoto.org/images/bri_ok.png','MANDIRI':'https://adiltoto.org/images/mandiri_ok.png','SEABANK':'https://adiltoto.org/images/seabank_ok.png','JAGO':'https://adiltoto.org/images/jago_ok.png'};
    const ICON_MAPPINGS = {'receiver-bank-label':'bi-bank2','receiver-name-label':'bi-person-vcard','receiver-number-label':'bi-credit-card-2-front','agentmemberbankid':'bi-wallet2','amount':'bi-cash-coin','promocode':'bi-tag-fill'};
    
    function initializeDepositForm(depositForm) { 
        if(!depositForm||depositForm.dataset.initialized==='true')return;
        const bankLabel = document.getElementById('receiver-bank-label');
        const nameLabel = document.getElementById('receiver-name-label');
        if (bankLabel) { bankLabel.remove(); }
        if (nameLabel) { nameLabel.remove(); }
        const nameContainer=document.getElementById('receiver-name')?.closest('div');
        const numberContainer=document.getElementById('receiver-number')?.closest('div');
        if(nameContainer&&numberContainer&&nameContainer.parentElement===numberContainer.parentElement){ nameContainer.parentElement.insertBefore(nameContainer,numberContainer) }
        if(numberContainer){
            const numberSpan=document.getElementById('receiver-number');
            if(numberSpan&&!numberContainer.querySelector('.copy-btn')){
                const newCopyButton=document.createElement('button');
                newCopyButton.type='button';
                newCopyButton.className='btn copy-btn';
                newCopyButton.innerHTML='<i class="bi bi-copy"></i> Copy';
                newCopyButton.addEventListener('click',e=>{
                    e.preventDefault();
                    navigator.clipboard.writeText(numberSpan.textContent.trim()).then(()=>{
                        newCopyButton.innerHTML='<i class="bi bi-check-lg"></i> Copied';
                        newCopyButton.classList.add('copy-btn-success');
                        setTimeout(()=>{ newCopyButton.innerHTML='<i class="bi bi-copy"></i> Copy'; newCopyButton.classList.remove('copy-btn-success') },1500)
                    })
                });
                const labelEl=document.getElementById('receiver-number-label');
                if (labelEl) { labelEl.remove(); }
                const contentWrapper=document.createElement('div');
                contentWrapper.append(numberSpan); 
                numberContainer.innerHTML='';
                numberContainer.append(contentWrapper,newCopyButton);
                numberContainer.style.display='flex';
                numberContainer.style.justifyContent='space-between';
                numberContainer.style.alignItems='center'
            }
        }
        const oldCopyButton=depositForm.querySelector('button[onclick*="copyReceiverNumber"]');
        if(oldCopyButton)oldCopyButton.style.display='none';
        depositForm.dataset.initialized='true' 
    }
    
    function updateDepositFormUI(depositForm) { if(!depositForm)return;const receiverBankSpan=document.getElementById('receiver-bank');if(receiverBankSpan&&!receiverBankSpan.dataset.iconApplied){const bankName=receiverBankSpan.textContent.trim().toUpperCase();if(BANK_ICONS[bankName]){receiverBankSpan.innerHTML=`<img src="${BANK_ICONS[bankName]}" alt="${bankName}" style="height: 40px; vertical-align: middle;">`}receiverBankSpan.dataset.iconApplied='true'}for(const[key,iconClass]of Object.entries(ICON_MAPPINGS)){const isLabelForInput=!key.includes('receiver');const element=isLabelForInput?depositForm.querySelector(`label[for="${key}"]`):document.getElementById(key);if(element&&!element.querySelector('i.bi')){const iconEl=document.createElement('i');iconEl.className=`bi ${iconClass}`;element.prepend(iconEl,document.createTextNode(' '))}}const qrCodeImg=document.getElementById('receiver-qrcode');if(qrCodeImg){qrCodeImg.classList.remove('bg-white');qrCodeImg.style.setProperty('border-color','#ff3333','important');qrCodeImg.style.setProperty('background-color','transparent','important')} }
    
    function styleWithdrawForm() { const withdrawCard=document.querySelector('#withdraw-form')?.closest('.card.shadow');if(!withdrawCard||withdrawCard.dataset.tabsApplied==='true')return;const mainTitle=withdrawCard.querySelector('h1.text-center');const historyTitle=Array.from(withdrawCard.querySelectorAll('h1, h2, h3')).find(el=>el.textContent.includes('RIWAYAT WITHDRAW'));if(mainTitle&&historyTitle){const navTabs=document.createElement('ul');navTabs.className='nav nav-tabs';navTabs.innerHTML=`<li class="nav-item"><a class="nav-link active" href="#">Withdraw</a></li><li class="nav-item"><a class="nav-link" href="#">Riwayat</a></li>`;const contentWrapper=document.createElement('div');contentWrapper.className='border border-top-0 px-3 pb-3 pt-2';Array.from(withdrawCard.children).forEach(child=>{if(child!==mainTitle){contentWrapper.appendChild(child.cloneNode(true))}});while(withdrawCard.firstChild){withdrawCard.removeChild(withdrawCard.firstChild)}withdrawCard.appendChild(mainTitle);withdrawCard.appendChild(navTabs);withdrawCard.appendChild(contentWrapper);const newHistoryTitle=contentWrapper.querySelector('h1, h2, h3');if(newHistoryTitle&&newHistoryTitle.textContent.includes('RIWAYAT WITHDRAW')){newHistoryTitle.style.display='none'}withdrawCard.dataset.tabsApplied='true'}const withdrawForm=withdrawCard.querySelector('#withdraw-form');if(withdrawForm){const bankLabel=withdrawForm.querySelector('label[for="agentmemberbankid"]');if(bankLabel&&!bankLabel.querySelector('i.bi')){bankLabel.innerHTML='<i class="bi bi-wallet2"></i> Bank / e-Wallet'}const amountLabel=withdrawForm.querySelector('label[for="amount"]');if(amountLabel&&!amountLabel.querySelector('i.bi')){amountLabel.innerHTML='<i class="bi bi-cash-coin"></i> '+amountLabel.textContent}} }

    function styleBettingPage() {
        const bettingContainer = document.querySelector('#select-market')?.closest('.container[class*="my-"]');
        if (!bettingContainer) return;
        bettingContainer.classList.remove('my-5');
        bettingContainer.classList.add('my-3'); 
        if (!bettingContainer.dataset.styledOnce) {
            bettingContainer.id = 'betting-page-container';
            const marketLabel = document.querySelector('label[for="select-market"]');
            if (marketLabel && !marketLabel.querySelector('i')) {
                marketLabel.innerHTML = `<i class="bi bi-bullseye"></i> ${marketLabel.textContent}`;
            }
            const websiteBtn = document.getElementById('info-website');
            if (websiteBtn) {
                websiteBtn.innerHTML = 'Website <i class="bi bi-arrow-up-right-square"></i>';
                websiteBtn.classList.remove('btn-outline-primary');
                websiteBtn.classList.add('btn', 'btn-secondary');
            }
            const categoryButtons = bettingContainer.querySelectorAll('button[name="category"]');
            if (categoryButtons.length > 0) {
                const firstButton = categoryButtons[0];
                const row = firstButton.closest('.row');
                if (row && !row.classList.contains('category-buttons')) {
                    row.classList.add('category-buttons');
                    categoryButtons.forEach(btn => {
                        btn.classList.remove('btn-primary', 'btn-outline-primary', 'btn-outline-info', 'rounded-3');
                        btn.classList.add('btn');
                        if (btn.id === 'btn-4D') { btn.classList.add('active'); }
                    });
                    row.addEventListener('click', (e) => {
                        if (e.target.matches('button[name="category"]')) {
                            row.querySelectorAll('button').forEach(b => b.classList.remove('active'));
                            e.target.classList.add('active');
                        }
                    });
                }
            }
            bettingContainer.querySelectorAll('.btn-group[role="group"]').forEach(group => { group.classList.add('bet-type-toggle'); });
            bettingContainer.dataset.styledOnce = 'true';
        }
        bettingContainer.querySelectorAll('div[id^="panel-"]:not([data-panel-styled="true"])').forEach(panel => {
            panel.dataset.panelStyled = 'true';
            panel.classList.remove('bg-dark', 'border', 'rounded-3', 'p-1', 'p-3');
            if (!panel.classList.contains('card')) panel.classList.add('card', 'mb-3');
            const cardHeader = panel.querySelector('.card-header');
            const cardBody = panel.querySelector('.card-body');
            if (!cardHeader && !cardBody) {
                const infoDiv = panel.querySelector('.mb-3');
                const title = infoDiv ? (infoDiv.querySelector('strong')?.textContent.trim() || 'Panel Permainan') : 'Panel Permainan';
                const newCardHeader = document.createElement('div');
                newCardHeader.className = 'card-header';
                newCardHeader.innerHTML = `<i class="bi bi-joystick"></i> ${title}`;
                const newCardBody = document.createElement('div');
                newCardBody.className = 'card-body';
                while (panel.firstChild) { newCardBody.appendChild(panel.firstChild); }
                panel.appendChild(newCardHeader);
                panel.appendChild(newCardBody);
            }
            const infoDivInsideBody = panel.querySelector('.card-body > .mb-3');
            if (infoDivInsideBody) {
                const descriptionWrapper = infoDivInsideBody.querySelector('.ms-3');
                if (descriptionWrapper) { descriptionWrapper.classList.remove('ms-3'); }
                const duplicateTitle = infoDivInsideBody.querySelector('strong');
                if (duplicateTitle && duplicateTitle.nextElementSibling && duplicateTitle.nextElementSibling.matches('div')) { duplicateTitle.style.display = 'none'; }
                infoDivInsideBody.style.marginTop = '0.5rem';
            }
            if (panel.id === 'panel-closed') { panel.classList.add('panel-closed-themed'); }
            panel.querySelectorAll('.table-input thead.table-warning').forEach(thead => { thead.classList.remove('table-warning'); });
            panel.querySelectorAll('.fa-plus').forEach(icon => { icon.className = 'bi bi-plus-lg'; });
            panel.querySelectorAll('input[name="digit"]:not([type="tel"])').forEach(input => { input.type = 'tel'; input.pattern = '[0-9]*'; });
            panel.querySelectorAll('input[name^="bet"]:not([type="number"])').forEach(input => { input.type = 'number'; input.inputMode = 'numeric'; });
            panel.querySelectorAll('button[type="reset"].btn-outline-danger').forEach(resetButton => { resetButton.classList.remove('btn-outline-danger'); resetButton.classList.add('btn-danger'); });
            const addRowButton = panel.querySelector('button[onclick="addRow(event)"]');
            if (addRowButton) { addRowButton.classList.remove('btn-outline-primary'); }
        });
    }

    function styleQuickLogin() { document.querySelectorAll('#row-quicklogin:not([data-styled="true"])').forEach(card => { card.dataset.styled = 'true'; const form = card.querySelector('form'); if (!form) return; const usernameDiv = form.querySelector('label[for="username"]')?.parentElement; const passwordDiv = form.querySelector('label[for="password"]')?.parentElement; const buttonDiv = form.querySelector('.d-flex.gap-1.my-3'); if (!usernameDiv || !passwordDiv || !buttonDiv) return; const newInputsHTML = ` <div class="row g-2 mb-3"> <div class="col-md-6"> <div class="input-group"> <span class="input-group-text"><i class="bi bi-person-fill"></i></span> <input type="text" name="userName" id="username" class="form-control" placeholder="Username"> </div> </div> <div class="col-md-6"> <div class="input-wrapper"> <div class="input-group"> <span class="input-group-text"><i class="bi bi-key-fill"></i></span> <input type="password" name="password" id="password" class="form-control" placeholder="Password"> </div> </div> </div> </div> `; buttonDiv.insertAdjacentHTML('beforebegin', newInputsHTML); usernameDiv.remove(); passwordDiv.remove(); const newPasswordInput = card.querySelector('#password'); if (newPasswordInput) { addPasswordToggle(newPasswordInput); } }); }
    function styleLoginPage() {
        const loginForm = document.querySelector('#maincontent form[action="/login"]');
        if (!loginForm) return;
        const loginCard = loginForm.closest('.card.shadow');
        if (!loginCard || loginCard.dataset.layoutStyled === 'true') return;
        loginCard.dataset.layoutStyled = 'true';
        try {
            if (!loginCard.parentElement.classList.contains('col-lg-6')) { 
                const cardParent = loginCard.parentElement;
                const newRow = document.createElement('div');
                newRow.className = 'row';
                const newCol = document.createElement('div');
                newCol.className = 'col-lg-6 offset-lg-3';
                cardParent.replaceChild(newRow, loginCard);
                newRow.appendChild(newCol);
                newCol.appendChild(loginCard);
            }
        } catch (e) { console.error("Theme Error (Centering Login):", e); }
        const usernameLabel = loginForm.querySelector('label[for="username"]');
        const passwordLabel = loginForm.querySelector('label[for="password"]');
        const usernameGroup = usernameLabel ? usernameLabel.parentElement : null;
        const passwordGroup = passwordLabel ? passwordLabel.parentElement : null;
        const usernameInput = loginForm.querySelector('input[name="userName"]');
        const passwordInput = loginForm.querySelector('input[name="password"]');
        const buttonContainer = loginForm.querySelector('button[type="submit"]')?.parentElement;

        if (usernameGroup && passwordGroup && buttonContainer && usernameInput && passwordInput) {
            const newRow = document.createElement('div');
            newRow.className = 'row g-2 mb-3';
            const usernameCol = document.createElement('div');
            usernameCol.className = 'col-12';
            const usernameInputGroup = document.createElement('div');
            usernameInputGroup.className = 'input-group';
            usernameInputGroup.innerHTML = '<span class="input-group-text"><i class="bi bi-person-fill"></i></span>';
            usernameInput.placeholder = "User Name";
            usernameInputGroup.appendChild(usernameInput);
            usernameCol.appendChild(usernameInputGroup);
            newRow.appendChild(usernameCol);

            const passwordCol = document.createElement('div');
            passwordCol.className = 'col-12';
            const passwordWrapper = document.createElement('div');
            passwordWrapper.className = 'input-wrapper';
            const passwordInputGroup = document.createElement('div');
            passwordInputGroup.className = 'input-group';
            passwordInputGroup.innerHTML = '<span class="input-group-text"><i class="bi bi-key-fill"></i></span>';
            passwordInput.placeholder = "Password";
            if (passwordInput.dataset.toggleAdded) { delete passwordInput.dataset.toggleAdded; }
            passwordInputGroup.appendChild(passwordInput);
            passwordWrapper.appendChild(passwordInputGroup);
            passwordCol.appendChild(passwordWrapper);
            newRow.appendChild(passwordCol);
            buttonContainer.before(newRow);
            usernameGroup.remove();
            passwordGroup.remove();
        }
    }
    function styleRegisterPage() {
        const form = document.querySelector('form[action="/register"]');
        if (!form || form.dataset.styled === 'true') return;
        form.dataset.styled = 'true';
        const card = form.closest('.card.shadow');
        const mainRow = card ? card.querySelector('.row.mb-3') : null;
        const buttonWrapper = card ? card.querySelector('.d-grid.gap-3.mb-3') : null;
        if (!card || !mainRow || !buttonWrapper) return;
        try {
            const targetColumn = mainRow.querySelector('.col-lg-6:has(label[for="email"])') || mainRow.querySelector('.col-lg-6:nth-child(2)');
            const usernameGroup = form.querySelector('label[for="username"]')?.closest('.form-group');
            const passwordGroup = form.querySelector('label[for="password"]')?.closest('.form-group');
            const confirmGroup = form.querySelector('label[for="confirmpassword"]')?.closest('.form-group');
            if (targetColumn && usernameGroup && passwordGroup && confirmGroup) { targetColumn.prepend(confirmGroup); targetColumn.prepend(passwordGroup); targetColumn.prepend(usernameGroup); }
        } catch (e) { console.error("Theme Error (Layouting Register):", e); }
        try {
            if (!card.parentElement.classList.contains('col-lg-6')) { 
                const cardParent = card.parentElement;
                const newRow = document.createElement('div');
                newRow.className = 'row';
                const newCol = document.createElement('div');
                newCol.className = 'col-lg-6 offset-lg-3';
                cardParent.replaceChild(newRow, card);
                newRow.appendChild(newCol);
                newCol.appendChild(card);
            }
            const emptyColumn = mainRow.querySelector('.col-lg-6:first-child');
            const contentColumn = mainRow.querySelector('.col-lg-6:last-child');
            if (emptyColumn && contentColumn && !emptyColumn.querySelector('input, select')) { 
                emptyColumn.remove();
                contentColumn.classList.remove('col-lg-6', 'offset-lg-3');
                contentColumn.classList.add('col-12');
            } else if (mainRow.children.length === 1 && mainRow.firstElementChild.classList.contains('col-lg-6')) {
                mainRow.firstElementChild.classList.remove('col-lg-6', 'offset-lg-3');
                mainRow.firstElementChild.classList.add('col-12');
            }
        } catch (e) { console.error("Theme Error (Centering Register):", e); }

        mainRow.before(form);
        form.append(mainRow);
        form.append(buttonWrapper);
        form.querySelectorAll('h3').forEach(h3 => h3.remove());
        form.querySelectorAll('.form-group').forEach(group => {
            const label = group.querySelector('label');
            const input = group.querySelector('input, select');
            if (!label || !input) return;
            const icon = label.querySelector('i.bi');
            const placeholderText = label.textContent.replace(/\(.*\)/g, '').replace(/(\r\n|\n|\r)/gm, " ").trim();
            let newElement;
            if (icon) {
                const inputGroup = document.createElement('div');
                inputGroup.className = 'input-group mb-2';
                const iconSpan = document.createElement('span');
                iconSpan.className = 'input-group-text';
                iconSpan.appendChild(icon.cloneNode(true));
                inputGroup.appendChild(iconSpan);
                inputGroup.appendChild(input);
                newElement = inputGroup;
            } else {
                const simpleDiv = document.createElement('div');
                simpleDiv.className = 'mb-2';
                simpleDiv.appendChild(input);
                newElement = simpleDiv;
            }
            if (input.tagName.toLowerCase() !== 'select') { input.placeholder = placeholderText; } else {
                if (!input.querySelector('option[value=""]')) {
                    const defaultOption = document.createElement('option');
                    defaultOption.value = "";
                    defaultOption.textContent = placeholderText || "Pilih Opsi";
                    defaultOption.disabled = true;
                    defaultOption.selected = true;
                    input.prepend(defaultOption);
                }
            }
            input.classList.add('form-control');
            if (input.type === 'password') {
                const wrapper = document.createElement('div');
                wrapper.className = 'input-wrapper';
                wrapper.appendChild(newElement);
                group.replaceWith(wrapper);
            } else {
                group.replaceWith(newElement);
            }
        });
        const passwordInput = form.querySelector('#password');
        const confirmPasswordInput = form.querySelector('#confirmpassword');
        if (passwordInput && confirmPasswordInput) {
            const passwordWrapper = passwordInput.closest('.input-wrapper');
            confirmPasswordInput.closest('.input-wrapper')?.querySelector('.password-toggle-icon')?.remove();
            if (passwordWrapper && !passwordWrapper.querySelector('.password-toggle-icon')) {
                const toggleIcon = document.createElement('i');
                toggleIcon.className = 'bi bi-eye-fill password-toggle-icon';
                toggleIcon.addEventListener('click', () => {
                    const isPassword = passwordInput.type === 'password';
                    const newType = isPassword ? 'text' : 'password';
                    passwordInput.type = newType;
                    confirmPasswordInput.type = newType;
                    toggleIcon.className = isPassword ? 'bi bi-eye-slash-fill password-toggle-icon' : 'bi bi-eye-fill password-toggle-icon';
                });
                passwordWrapper.appendChild(toggleIcon);
                passwordInput.dataset.toggleAdded = 'true';
                confirmPasswordInput.dataset.toggleAdded = 'true';
            }
        }
    }
    
    function styleProfilePage() {
        const title = Array.from(document.querySelectorAll('h1.text-center')).find(h1 => h1.textContent.trim() === 'Profil Akun');
        if (!title) return;
        const profileForm = title.nextElementSibling;
        if (!profileForm || profileForm.tagName !== 'FORM' || profileForm.dataset.styled === 'true') return;
        profileForm.dataset.styled = 'true';
        profileForm.id = 'profile-page-container';
        const formGroups = profileForm.querySelectorAll('.form-group.mb-3');
        if (formGroups.length === 0) return;
        const newContentWrapper = document.createElement('div');
        newContentWrapper.style.marginBottom = '2rem';
        const iconMapping = { 'Username': 'bi-person-fill', 'Email': 'bi-envelope-fill', 'Nomor HP': 'bi-phone-fill', 'Rekening Bank': 'bi-wallet2', 'Bergabung Sejak': 'bi-calendar-check', 'Login Terakhir': 'bi-clock-history' };
        const stackedLayoutLabels = ['Rekening Bank', 'Bergabung Sejak', 'Login Terakhir'];
        formGroups.forEach(group => {
            const labelEl = group.querySelector('label');
            if (!labelEl) return;
            let labelText = labelEl.textContent.trim();
            let valueText = '';
            if (labelText === 'Nama Lengkap' || labelText === 'Credit') { return; }
            if (labelText === 'Nama') { labelText = 'Username'; }
            if (labelText === 'Rekening Bank') {
                const inputs = group.querySelectorAll('input.form-control');
                valueText = Array.from(inputs).map(input => input.value).join(' - ');
            } else {
                const input = group.querySelector('input.form-control');
                if (input) { valueText = input.value; }
            }
            const iconClass = iconMapping[labelText];
            if (!iconClass) return;
            const row = document.createElement('div');
            const isStacked = stackedLayoutLabels.includes(labelText);
            row.className = isStacked ? 'profile-row profile-row-stacked' : 'profile-row';
            const newLabel = document.createElement('div');
            newLabel.className = 'profile-label';
            newLabel.innerHTML = `<i class="bi ${iconClass}"></i> <span>${labelText}</span>`;
            const newValue = document.createElement('div');
            newValue.className = 'profile-value';
            newValue.textContent = valueText || '-';
            row.appendChild(newLabel);
            row.appendChild(newValue);
            newContentWrapper.appendChild(row);
        });
        profileForm.prepend(newContentWrapper);
        formGroups.forEach(group => group.remove());
    }

    function styleChangePasswordPage() {
        const form = document.querySelector('form[action="/change-password"]');
        if (!form || form.dataset.styled === 'true') return;
        form.dataset.styled = 'true';
        const iconMapping = { 'currentpassword': 'bi-key-fill', 'password': 'bi-shield-lock-fill', 'confirmpassword': 'bi-shield-check' };
        form.querySelectorAll('.form-group').forEach(group => {
            const label = group.querySelector('label');
            const input = group.querySelector('input');
            if (!label || !input) return;
            const iconClass = iconMapping[input.id];
            if (!iconClass) return;
            const placeholderText = label.textContent.trim();
            const inputGroup = document.createElement('div');
            inputGroup.className = 'input-group mb-3';
            const iconSpan = document.createElement('span');
            iconSpan.className = 'input-group-text';
            iconSpan.innerHTML = `<i class="bi ${iconClass}"></i>`;
            input.placeholder = placeholderText;
            inputGroup.appendChild(iconSpan);
            inputGroup.appendChild(input.cloneNode(true));
            const wrapper = document.createElement('div');
            wrapper.className = 'input-wrapper';
            wrapper.appendChild(inputGroup);
            group.replaceWith(wrapper);
            const newPasswordInput = wrapper.querySelector('input');
            addPasswordToggle(newPasswordInput);
        });
    }
    function stylePagePadding() {
        const depositTitle = Array.from(document.querySelectorAll('h1.text-center')).find(h1 => h1.textContent.trim() === 'Deposit');
        const withdrawTitle = Array.from(document.querySelectorAll('h1.text-center')).find(h1 => h1.textContent.trim() === 'Withdraw');
        const resultTitle = Array.from(document.querySelectorAll('#maincontent h3')).find(h3 => h3.textContent.trim() === 'Result Togel');
        const title = depositTitle || withdrawTitle || resultTitle;
        if (title) {
            const mainColumn = title.closest('[class*="col-lg-"]');
            if (mainColumn && !mainColumn.dataset.colPadded) {
                mainColumn.style.padding = '0 12px'; 
                mainColumn.dataset.colPadded = 'true';
            }
        }
    }
    function styleDepositFormFields(depositForm) {
        if (!depositForm) return;
        const contentWrapper = depositForm.parentElement;
        if (contentWrapper && contentWrapper.classList.contains('border-top-0') && !contentWrapper.dataset.padded) {
            contentWrapper.classList.remove('p-2'); 
            contentWrapper.classList.add('p-3');    
            contentWrapper.dataset.padded = 'true';
        }
        const agentBankSelect = depositForm.querySelector('#agentmemberbankid');
        const currentWrapper = agentBankSelect ? agentBankSelect.closest('.form-group, .profile-row') : null;
        if (agentBankSelect && currentWrapper && !agentBankSelect.dataset.styledAsInputGroup) {
            const originalLabel = document.querySelector('label[for="agentmemberbankid"]'); 
            const labelIcon = originalLabel ? originalLabel.querySelector('i.bi') : null;
            const newInputGroup = document.createElement('div');
            newInputGroup.className = 'input-group mb-3';
            newInputGroup.setAttribute('bis_skin_checked', '1');
            const labelSpan = document.createElement('span');
            labelSpan.className = 'input-group-text';
            if (labelIcon) { labelSpan.appendChild(labelIcon.cloneNode(true)); } else { labelSpan.innerHTML = '<i class="bi bi-wallet2"></i>'; }
            labelSpan.appendChild(document.createTextNode('\u00A0Akun Saya')); 
            agentBankSelect.style.backgroundColor = '';
            agentBankSelect.style.border = '';
            agentBankSelect.style.color = '';
            agentBankSelect.style.marginTop = '';
            newInputGroup.appendChild(labelSpan);
            newInputGroup.appendChild(agentBankSelect); 
            currentWrapper.replaceWith(newInputGroup); 
            agentBankSelect.dataset.styledAsInputGroup = 'true'; 
            if (agentBankSelect.dataset.styled) delete agentBankSelect.dataset.styled;
        }
        if (agentBankSelect && !agentBankSelect.dataset.optionsShortened) {
            const options = agentBankSelect.querySelectorAll('option');
            options.forEach(option => {
                const originalText = option.textContent;
                const parts = originalText.split(' - '); 
                if (parts.length === 3) { option.textContent = `${parts[0].trim()} - ${parts[2].trim()}`; }
            });
            agentBankSelect.dataset.optionsShortened = 'true';
        }
        const amountInput = depositForm.querySelector('#amount');
        if (amountInput && !amountInput.dataset.styled) {
            const amountGroup = amountInput.closest('.form-group');
            if (amountGroup) {
                const label = amountGroup.querySelector('label.form-label');
                const labelIcon = label ? label.querySelector('i.bi') : null;
                const placeholderText = label ? label.textContent.trim() : 'Jumlah';
                const newInputGroup = document.createElement('div');
                newInputGroup.className = 'input-group mb-3';
                newInputGroup.setAttribute('bis_skin_checked', '1');
                const iconSpan = document.createElement('span');
                iconSpan.className = 'input-group-text';
                if (labelIcon) { iconSpan.appendChild(labelIcon.cloneNode(true)); } else { iconSpan.innerHTML = '<i class="bi bi-cash-coin"></i>'; }
                amountInput.placeholder = placeholderText; 
                newInputGroup.appendChild(iconSpan);
                newInputGroup.appendChild(amountInput); 
                amountGroup.replaceWith(newInputGroup); 
                amountInput.dataset.styled = 'true'; 
            }
        }
        const promoInput = depositForm.querySelector('#promocode');
        if (promoInput && !promoInput.dataset.styled) {
            const promoGroup = promoInput.closest('.form-group');
            if (promoGroup) {
                const label = promoGroup.querySelector('label.form-label');
                const labelIcon = label ? label.querySelector('i.bi') : null;
                const newInputGroup = document.createElement('div');
                newInputGroup.className = 'input-group';
                newInputGroup.setAttribute('bis_skin_checked', '1');
                const iconSpan = document.createElement('span');
                iconSpan.className = 'input-group-text';
                if (labelIcon) { iconSpan.appendChild(labelIcon.cloneNode(true)); } else { iconSpan.innerHTML = '<i class="bi bi-tag-fill"></i>'; }
                const wrapper = document.createElement('div');
                wrapper.className = 'promo-input-wrapper mb-3'; 
                promoInput.placeholder = "Pilih promo yang tersedia";
                promoInput.dataset.clearable = 'true'; 
                newInputGroup.appendChild(iconSpan);
                newInputGroup.appendChild(promoInput);
                const clearBtn = document.createElement('i');
                clearBtn.className = 'bi bi-x-circle-fill promo-clear-btn';
                clearBtn.id = 'promo-clear-btn-instance'; 
                wrapper.appendChild(newInputGroup);
                wrapper.appendChild(clearBtn);
                promoGroup.replaceWith(wrapper); 
                promoInput.dataset.styled = 'true'; 
            }
        }
        const promoButtonContainer = depositForm.querySelector('.row.g-2.mb-3');
        if (promoButtonContainer && !promoButtonContainer.dataset.styled) {
            const purpleButtons = promoButtonContainer.querySelectorAll('button.promo-button.btn-purple-moon');
            if (purpleButtons.length > 0) {
                purpleButtons.forEach(button => {
                    const newPromoBox = document.createElement('div');
                    newPromoBox.className = 'promo-choice-box';
                    newPromoBox.dataset.code = button.dataset.code; 
                    newPromoBox.innerHTML = button.innerHTML; 
                    const column = button.closest('.d-grid')?.parentElement;
                    if (column) { column.innerHTML = ''; column.appendChild(newPromoBox); }
                });
                promoButtonContainer.dataset.styled = 'true'; 
            }
        }
    }
    function initializePromoSelection() {
        const promoBoxes = document.querySelectorAll('.promo-choice-box');
        const promoInput = document.getElementById('promocode');
        const clearBtn = document.getElementById('promo-clear-btn-instance');
        if (!promoBoxes.length || !promoInput || !clearBtn) return;
        const updateClearButton = () => { if (promoInput.value) { clearBtn.classList.add('visible'); } else { clearBtn.classList.remove('visible'); } };
        const clearPromo = () => { promoInput.value = ''; promoBoxes.forEach(box => box.classList.remove('selected')); updateClearButton(); };
        if (!clearBtn.dataset.promoInitialized) { clearBtn.addEventListener('click', clearPromo); clearBtn.dataset.promoInitialized = 'true'; }
        promoBoxes.forEach(function(box) {
            if (box.dataset.promoInitialized === 'true') { return; }
            box.dataset.promoInitialized = 'true'; 
            box.addEventListener('click', function() {
                const selectedCode = box.getAttribute('data-code');
                if (box.classList.contains('selected')) { clearPromo(); } else {
                    promoBoxes.forEach(b => b.classList.remove('selected'));
                    box.classList.add('selected');
                    promoInput.value = selectedCode;
                    updateClearButton();
                }
            });
        });
        updateClearButton();
    }
    function styleWithdrawPage() {
        const withdrawForm = document.querySelector('#withdraw-form');
        if (!withdrawForm || withdrawForm.dataset.styled === 'true') { return; }
        const card = withdrawForm.closest('.card.p-1');
        if (card) { card.classList.remove('p-1'); card.classList.add('p-3'); }
        const bankSelect = withdrawForm.querySelector('#agentmemberbankid');
        const bankGroup = bankSelect ? bankSelect.closest('.form-group') : null;
        if (bankSelect && bankGroup) {
            const label = bankGroup.querySelector('label.form-label');
            const labelIcon = label ? label.querySelector('i.bi') : null;
            const newBankGroup = document.createElement('div');
            newBankGroup.className = 'input-group mb-3';
            const newBankSpan = document.createElement('span');
            newBankSpan.className = 'input-group-text';
            if (labelIcon) { newBankSpan.appendChild(labelIcon.cloneNode(true)); } else { newBankSpan.innerHTML = '<i class="bi bi-wallet2"></i>'; }
            newBankSpan.appendChild(document.createTextNode('\u00A0Akun Saya')); 
            newBankGroup.appendChild(newBankSpan);
            newBankGroup.appendChild(bankSelect); 
            bankGroup.replaceWith(newBankGroup); 
            const options = bankSelect.querySelectorAll('option');
            options.forEach(option => {
                const originalText = option.textContent;
                const parts = originalText.split(' - '); 
                if (parts.length === 3) { option.textContent = `${parts[0].trim()} - ${parts[2].trim()}`; }
            });
        }
        const amountInput = withdrawForm.querySelector('#amount');
        const amountGroup = amountInput ? amountInput.closest('.form-group') : null;
        if (amountInput && amountGroup) {
            const label = amountGroup.querySelector('label.form-label');
            const labelIcon = label ? label.querySelector('i.bi') : null;
            const placeholderText = label ? label.textContent.trim() : 'Jumlah IDR';
            const newAmountGroup = document.createElement('div');
            newAmountGroup.className = 'input-group mb-3';
            const newAmountSpan = document.createElement('span');
            newAmountSpan.className = 'input-group-text';
            if (labelIcon) { newAmountSpan.appendChild(labelIcon.cloneNode(true)); } else { newAmountSpan.innerHTML = '<i class="bi bi-cash-coin"></i>'; }
            newAmountGroup.appendChild(newAmountSpan);
            amountInput.placeholder = placeholderText; 
            newAmountGroup.appendChild(amountInput); 
            amountGroup.replaceWith(newAmountGroup); 
        }
        withdrawForm.dataset.styled = 'true'; 
    }
    function styleResultPage() {
        const title = Array.from(document.querySelectorAll('#maincontent h3')).find(h => h.textContent.trim() === 'Result Togel');
        if (!title) return;
        const mainContainer = title.parentElement.nextElementSibling; 
        if (!mainContainer || !mainContainer.classList.contains('mb-5') || mainContainer.dataset.styled === 'true') { return; }
        const oldSelect = mainContainer.querySelector('select[name="m"]');
        if (!oldSelect) return; 
        const urlLink = mainContainer.querySelector('a[target="_blank"]');
        const scheduleBtn = mainContainer.querySelector('button[data-bs-target="#scheduleModal"]');
        const modal = document.querySelector('#scheduleModal');
        mainContainer.classList.remove('mb-5');
        mainContainer.classList.add('mb-3');
        if (urlLink && scheduleBtn && modal) {
            const modalBody = modal.querySelector('.modal-body');
            const allTextNodes = modalBody ? Array.from(modalBody.querySelectorAll('.card-body > *')) : [];
            const tutupEl = allTextNodes.find(el => el.textContent.includes('Tutup:'));
            const hasilEl = allTextNodes.find(el => el.textContent.includes('Hasil:'));
            const hariEl = allTextNodes.find(el => el.textContent.includes('Hari Aktif:'));
            const tutup = tutupEl ? tutupEl.textContent.trim() : 'Tutup: -';
            const hasil = hasilEl ? hasilEl.textContent.trim() : 'Hasil: -';
            const hariText = hariEl ? hariEl.textContent.replace('Hari Aktif:', '').trim() : '-';
            const newGroup = document.createElement('div');
            newGroup.className = 'input-group mb-3';
            oldSelect.className = 'form-select'; 
            oldSelect.style = ''; 
            oldSelect.style.setProperty('border-color', '#ffd700', 'important');
            const newBtn = document.createElement('a');
            newBtn.className = 'btn btn-secondary'; 
            newBtn.target = '_blank';
            newBtn.href = urlLink.href; 
            newBtn.innerHTML = 'Website <i class="bi bi-arrow-up-right-square"></i>';
            const scheduleBox = document.createElement('div');
            scheduleBox.className = 'alert alert-primary p-2';
            scheduleBox.style.alignItems = 'center';
            scheduleBox.innerHTML = ` <strong style="color: #fff; font-size: 0.9em; display: block; text-align: center; margin-bottom: 5px;"> ${hariText} </strong> <div style="font-size: 0.9em; text-align: center; border-top: 1px solid #b30000; padding-top: 5px;"> <span>${tutup}</span> &nbsp;&nbsp;|&nbsp;&nbsp; <span>${hasil}</span> </div> `;
            newGroup.appendChild(oldSelect); 
            newGroup.appendChild(newBtn);     
            mainContainer.innerHTML = '';       
            mainContainer.appendChild(newGroup); 
            mainContainer.appendChild(scheduleBox); 
            modal.remove();
        } else {
            oldSelect.style.setProperty('border-color', '#ffd700', 'important');
            oldSelect.style.width = '100%'; 
            if (urlLink) urlLink.parentElement.remove();
            if (scheduleBtn) scheduleBtn.parentElement.remove();
        }
        mainContainer.dataset.styled = 'true'; 
    }
    function styleResultTableHighlight() {
        const resultTitle = Array.from(document.querySelectorAll('#maincontent h3')).find(h => h.textContent.trim() === 'Result Togel');
        if (!resultTitle) { return; }
        const tableBody = document.querySelector('#maincontent .table-bordered tbody');
        if (!tableBody || !tableBody.firstElementChild) return; 
        const activePageLink = document.querySelector('.pagination .page-item.active a');
        let isPageOne = false;
        if (activePageLink) { if (activePageLink.textContent.trim() === '1') isPageOne = true; } else { isPageOne = true; }
        const allRows = tableBody.querySelectorAll('tr');
        const dayOptions = { weekday: 'long' };
        const locale = 'id-ID'; 
        allRows.forEach((row, index) => {
            const dateCell = row.querySelector('td:first-child');
            if (!dateCell) return;
            const originalDateStr = dateCell.textContent.trim();
            if (dateCell.dataset.dateFormatted !== 'true') {
                const parts = originalDateStr.split('-');
                if (parts.length === 3) {
                    try {
                        const dateObj = new Date(parts[2], parts[1] - 1, parts[0]);
                        const dayName = dateObj.toLocaleDateString(locale, dayOptions);
                        dateCell.textContent = `${dayName}, ${originalDateStr}`;
                        dateCell.dataset.dateFormatted = 'true'; 
                    } catch (e) { }
                }
            }
            row.style.color = '';
            row.style.fontWeight = '';
            if (index === 0 && isPageOne) {
                row.style.color = '#FFD700';
                row.style.fontWeight = 'bold';
            }
        });
    }
    function styleLogoutButton() {
        const profileFormLogout = document.querySelector('form a[href="/logout"]');
        if (profileFormLogout && !profileFormLogout.dataset.styled) {
             profileFormLogout.classList.remove('btn-outline-primary');
             profileFormLogout.classList.add('btn-danger');
             profileFormLogout.dataset.styled = 'true';
        }
        const sidebarLogout = document.querySelector('#sidebar a[href*="logout"]');
        if (sidebarLogout && !sidebarLogout.dataset.styled) {
            sidebarLogout.classList.remove('nav-link');
            sidebarLogout.classList.add('btn', 'btn-danger', 'mx-3', 'my-2');
            sidebarLogout.dataset.styled = 'true';
        }
    }

    function styleConfirmationModal() {
        const modalTitle = document.querySelector('#confirmModal .modal-title');
        if (modalTitle && !modalTitle.querySelector('i.bi')) {
            modalTitle.innerHTML = `<i class="bi bi-patch-check-fill"></i> ${modalTitle.textContent}`;
        }
    }

    function runDynamicStyling() {
        initializeSwipeableHeaderMenu();
        updateProfileElements();
        addSidebarBalanceToggle();
        addMainBalanceToggle();
        styleMemberStatusPanel();
        styleTogelTutorialPage();
        initializeTogelCarousel();
        stylePagePadding();
        const depositForm = document.querySelector('#deposit-form');
        if (depositForm) {
            initializeDepositForm(depositForm);
            updateDepositFormUI(depositForm);
            styleDepositFormFields(depositForm); 
        }
        initializePromoSelection();
        styleWithdrawPage();
        styleResultPage();
        styleResultTableHighlight();
        styleWithdrawForm();
        styleRtpModal();
        styleConfirmationModal(); 
        initializeBetFormatting(); 
        document.querySelectorAll('input[type="password"]:not([data-toggle-added="true"])').forEach(input => { addPasswordToggle(input); });
        styleBettingPage(); 
        styleQuickLogin();
        styleLoginPage();
        styleRegisterPage(); 
        styleProfilePage();
        styleLogoutButton();
        styleChangePasswordPage();
    }
    
    document.addEventListener('DOMContentLoaded', () => {
        setupPersistentCountdownIntervals();
        createSidebarToggleButton();
        runAllOtherScripts();
        injectGacorGame();
        setInterval(runDynamicStyling, 250); 
        runDynamicStyling(); 
        
        document.body.addEventListener('change', (event) => {
            if (event.target.id === 'agentmemberbankid') {
                const receiverBankSpan = document.getElementById('receiver-bank');
                if (receiverBankSpan) delete receiverBankSpan.dataset.iconApplied;
            }
        });
        
        const sidebar = document.getElementById("sidebar");
        if (sidebar) {
            const toggleButton = document.getElementById("custom-sidebar-toggle");
            const toggleObserver = new MutationObserver(() => {
                if (toggleButton) {
                    sidebar.classList.contains("active") ? toggleButton.classList.add("show") : toggleButton.classList.remove("show");
                }
            });
            toggleObserver.observe(sidebar, { attributes: true, attributeFilter: ['class'] });
        }
    });
})();