<script lang="ts">
    import "../app.css";
    import { base } from '$app/paths';
    import { fly } from 'svelte/transition';

    let isDropdownOpen = false;
    let isDarkMode = false;

    function toggleDropdown() { isDropdownOpen = !isDropdownOpen; }
    function closeDropdown() { isDropdownOpen = false; }

    function toggleTheme() {
        isDarkMode = !isDarkMode;
        document.body.dataset.bsTheme = isDarkMode ? 'dark' : 'light';
    }

    function clickOutside(node: HTMLElement) {
        const handleClick = (event: MouseEvent) => {
            if (node && !node.contains(event.target as Node)) {
                node.dispatchEvent(new CustomEvent('click_outside'));
            }
        };
        document.addEventListener('click', handleClick, true);
        return {
            destroy() { document.removeEventListener('click', handleClick, true); }
        };
    }
</script>

<header class="fixed-top p-3 w-100" style="z-index: 1040;">
    <nav class="container glass rounded-pill px-4 py-2 d-flex justify-content-between align-items-center shadow-sm">
        
        <div class="d-flex align-items-center gap-2 gap-md-4">
            <a href="{base}/" class="d-flex align-items-center text-decoration-none brand-group">
                <img src="{base}/AxelLab-Logo.ico" alt="Logo" class="nav-logo me-2" />
                <span class="fw-bold fs-5 brand-text d-none d-sm-inline">AxelBase</span>
            </a>

            <div class="position-relative" use:clickOutside on:click_outside={closeDropdown}>
                <button 
                    class="bmac-button d-flex align-items-center gap-2 text-white border-0 px-3 px-md-4 py-2 rounded-pill shadow-sm"
                    on:click={toggleDropdown}
                    aria-label="Support options"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
                    </svg>
                    <span class="d-none d-md-inline fw-semibold">Buy me a Coffee</span>
                    <span class="d-md-none fw-semibold">Coffee</span>
                </button>

                {#if isDropdownOpen}
                    <div class="bmac-dropdown mt-2 shadow-lg" transition:fly={{ y: -10, duration: 250 }}>
                        <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
                            <span class="amount">$3</span> One Coffee
                        </a>
                        <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
                            <span class="amount">$5</span> Two Coffees
                        </a>
                        <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
                            <span class="amount">$10</span> Three Coffees
                        </a>
                        <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown} class="custom-amount">
                            Custom Amount
                        </a>
                        <a 
                            href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
                            on:click={closeDropdown}
                            class="custom-amount"
                        >
                            Buy via Crypto (BTC)
                        </a>
                    </div>
                {/if}
            </div>

            <button class="btn-theme-toggle" on:click={toggleTheme} aria-label="Toggle Theme">
                <i class="bi {isDarkMode ? 'bi-sun-fill' : 'bi-moon-stars-fill'}"></i>
            </button>
        </div>

        <ul class="nav d-none d-lg-flex align-items-center gap-4 m-0 list-unstyled">
            <li><a class="nav-link-custom" href="{base}/">Home</a></li>
            <li><a class="nav-link-custom" href="{base}/#about">About</a></li>
            <li><a class="nav-link-custom" href="{base}/#how-to-use">How to Use</a></li>
            <li><a class="nav-link-custom" href="{base}/#faq">FAQ</a></li>
            <li><a class="btn btn-orange rounded-pill px-4 fw-bold" href="{base}/blog">Blog</a></li>
        </ul>
    </nav>
</header>

<main>
    <slot />
</main>

<footer class="glass border-top py-4 mt-5">
    <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center opacity-75 small">
        <p class="m-0">© {new Date().getFullYear()} AxelBase Capacity Converter</p>
        <div class="d-flex gap-4 mt-3 mt-md-0">
            <a href="{base}/privacy" class="footer-link">Privacy Policy</a>
            <a href="{base}/terms" class="footer-link">Terms & Conditions</a>
        </div>
    </div>
</footer>

<style>
    .nav-logo { height: 38px; transition: transform 0.4s ease; }
    .brand-group:hover .nav-logo { transform: rotate(15deg) scale(1.1); }
    .brand-text { color: var(--brand-orange); font-family: 'Poppins', sans-serif; }

    .nav-link-custom {
        text-decoration: none;
        color: var(--color-text-main);
        font-weight: 600;
        transition: color 0.3s ease;
    }
    .nav-link-custom:hover { color: var(--brand-orange); }

    .btn-orange {
        background: var(--brand-orange);
        color: white;
        transition: all 0.3s ease;
    }
    .btn-orange:hover { background: var(--brand-orange-hover); transform: scale(1.05); }

    /* BMAC Button Styling */
    .bmac-button {
        background: var(--brand-orange);
        font-size: 0.95rem;
        transition: all 0.3s ease;
    }
    .bmac-button:hover {
        background: var(--brand-orange-hover);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(195, 88, 49, 0.3) !important;
    }

    .bmac-dropdown {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        width: 240px;
        background: var(--glass-bg);
        backdrop-filter: blur(20px);
        border-radius: 16px;
        overflow: hidden;
        border: 1px solid var(--glass-border);
        z-index: 1000;
    }

    .bmac-dropdown a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 20px;
        color: var(--color-text-main);
        text-decoration: none;
        font-size: 0.9rem;
        transition: all 0.2s ease;
    }

    .bmac-dropdown a:hover {
        background: var(--brand-orange);
        color: white;
        padding-left: 25px;
    }

    .bmac-dropdown .amount {
        font-weight: 700;
        color: var(--brand-orange);
        font-size: 1rem;
    }
    
    .bmac-dropdown a:hover .amount { color: white; }

    .bmac-dropdown .custom-amount {
        font-weight: 600;
        border-top: 1px solid var(--glass-border);
        justify-content: center !important;
    }

    /* Theme Toggle Styling */
    .btn-theme-toggle {
        background: transparent;
        border: 1px solid var(--glass-border);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: var(--brand-orange);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    }
    .btn-theme-toggle:hover { background: var(--brand-orange); color: white; transform: rotate(15deg); }

    .footer-link { text-decoration: none; color: var(--color-text-main); transition: color 0.2s; }
    .footer-link:hover { color: var(--brand-orange); }
</style>