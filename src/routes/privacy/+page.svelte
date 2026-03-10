<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | AxelBase Capacity Converter</title>
  <meta name="description" content="Read our Privacy Policy to understand our commitment to local browser-based data processing." />
</svelte:head>

<div class="container fade-in post-layout">
<div class="breadcrumbs-wrapper">
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <a href="{base}/" class="home-icon" title="Home">
      <i class="bi bi-house-door-fill"></i>
    </a>

    <span class="separator">
      <i class="bi bi-chevron-right"></i>
    </span>

    <span class="current-page">
      Privacy Policy
    </span>
  </nav>
</div>

<style>
  .breadcrumbs-wrapper {
    margin-bottom: 2.5rem;
  }

  .breadcrumbs {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.6rem 1.2rem;
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    border: 1px solid var(--glass-border);
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 600;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
  }

  /* Icons and Links */
  .home-icon {
    color: var(--brand-orange);
    display: flex;
    align-items: center;
    transition: transform 0.2s ease;
    text-decoration: none;
  }

  .home-icon:hover {
    transform: scale(1.1);
  }

  .breadcrumb-link {
    color: var(--color-text-main);
    text-decoration: none;
    opacity: 0.7;
    transition: all 0.2s ease;
  }

  .breadcrumb-link:hover {
    opacity: 1;
    color: var(--brand-orange);
  }

  /* Separator Styling */
  .separator {
    display: flex;
    align-items: center;
    color: var(--brand-orange);
    font-size: 0.7rem;
    opacity: 0.5;
  }

  /* Current Page Text */
  .current-page {
    color: var(--color-text-main);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 250px; /* Prevents mobile explosion */
    opacity: 0.9;
  }

  @media (max-width: 576px) {
    .current-page {
      max-width: 120px;
    }
    .breadcrumbs {
      padding: 0.5rem 1rem;
    }
  }

  /* Integration with your existing prose */
  .post-layout {
    max-width: 800px;
    padding: 2rem 1rem 4rem 1rem;
    margin: 0 auto;
  }

  .prose h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    color: var(--color-text-main);
    font-family: 'Poppins', sans-serif;
  }
</style>

  <article class="prose">
    <h1>Privacy Policy</h1>
    <p class="post-meta">Effective Date: March 10, 2026</p>

    <h2>1. The Privacy-First Commitment</h2>
    <p>At <strong>AxelBase</strong>, we believe that your data belongs to you. This Privacy Policy governs the <em>Capacity Converter</em> utility. Unlike traditional web applications that require server interaction, our tool is built on a <strong>purely client-side architecture</strong>. This means that every calculation, unit conversion, and data entry happens <em>exclusively within your device's web browser</em>.</p>

    <h2>2. Data Collection and Usage</h2>
    <p>We operate under a <strong>Zero-Collection Policy</strong>. When you use the AxelBase Capacity Converter, we do not collect:</p>
    <ul>
      <li><strong>Personal Information:</strong> We do not ask for names, email addresses, or account registrations.</li>
      <li><strong>Input Values:</strong> The numerical data you enter for conversion is processed locally. <em>We never see your data</em>.</li>
      <li><strong>Behavioral Analytics:</strong> We do not use intrusive trackers, session recording, or heatmaps to monitor your clicks.</li>
    </ul>

    <h2>3. Local Processing and Cookies</h2>
    <p>Because the logic of this tool is written in JavaScript that runs on <strong>your hardware</strong>, no data is transmitted to our servers for processing. We do not use persistent cookies to identify you. We may use <em>local storage</em> or <em>session storage</em> solely to remember your theme preference (Light vs. Dark mode) or your last-used unit, ensuring a smoother user experience. This data never leaves your machine.</p>

    <h2>4. Third-Party Links and Support</h2>
    <p>Our website includes links to third-party platforms, such as <strong>PayPal</strong> or <strong>Buy Me A Coffee</strong>, for those who wish to support our project. Please note that once you click these links, you are subject to the privacy policies of those specific platforms. We encourage you to <em>review their terms</em> before providing any payment information.</p>

    <h2>5. Information Security</h2>
    <p>While we do not store your data on our servers, the security of the information while on your device depends on your own browser security and system integrity. We recommend using <strong>modern, updated browsers</strong> and avoiding public terminals when handling sensitive conversion data. <strong>AxelBase</strong> implements <em>HTTPS encryption</em> to ensure that the tool itself is delivered to you securely and without tampering.</p>

    <h2>6. Compliance and Updates</h2>
    <p>This policy is designed to be globally compliant with regulations such as <strong>GDPR</strong> and <strong>CCPA</strong> by virtue of not collecting data in the first place. We may update this text occasionally to reflect new features. Your continued use of the converter constitutes acceptance of these <em>privacy-focused</em> practices.</p>

    <p class="italic-note">Your privacy isn't just a feature; it is the foundation of AxelBase. If you have questions, please reach out via our official channels.</p>
  </article>
</div>

<style>
  .post-layout { max-width: 800px; padding-top: 5rem; padding-bottom: 4rem; }
  .breadcrumbs { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem; font-size: 0.9rem; opacity: 0.7; }
  .breadcrumbs a { color: var(--brand-orange); text-decoration: none; }
  .prose { line-height: 1.8; color: var(--color-text-main); }
  .prose .post-meta { font-size: 0.9rem; margin-bottom: 2rem; border-bottom: 1px solid var(--glass-border); padding-bottom: 1rem; opacity: 0.6; }
  .prose h1, .prose h2 { color: var(--brand-orange); font-weight: 700; }
  .prose h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }
  .prose h2 { margin-top: 2.5rem; border-bottom: 1px solid var(--glass-border); padding-bottom: 0.5rem; }
  .prose ul { list-style-type: '→ '; padding-left: 1.5rem; }
  .prose ul li { margin-bottom: 0.5rem; }
  .prose .italic-note { font-style: italic; opacity: 0.7; text-align: center; margin-top: 3rem; }
</style>