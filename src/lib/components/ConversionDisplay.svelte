<script>
  import { units, convert, formatCapacity } from '$lib/conversions';
  import { fly, fade } from 'svelte/transition';

  export let inputValue = '';
  export let fromUnitId = 'ml';

  let searchQuery = '';

  $: inputNum = Number(inputValue);
  $: isValid = inputValue !== '' && !Number.isNaN(inputNum);

  // 1. Calculate all possible conversions
  $: results = isValid
    ? units
      .filter(u => u.id !== fromUnitId)
      .map(u => {
        const value = convert(inputNum, fromUnitId, u.id);
        return {
          ...u,
          value,
          formatted: formatCapacity(value)
        };
      })
    : [];

  // 2. Filter based on search query
  $: filteredResults = results.filter(r => 
    r.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    r.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );
</script>

<div class="results-container">
  {#if !isValid && inputValue !== ''}
    <div class="status-msg error" in:fade>
      <i class="bi bi-exclamation-triangle display-4 mb-3 d-block"></i>
      <p class="fw-bold">Invalid calculation input</p>
      <span>Please provide a valid numeric value.</span>
    </div>

  {:else if inputValue === ''}
    <div class="status-msg empty" in:fade>
      <i class="bi bi-calculator display-4 mb-3 d-block"></i>
      <p class="fw-bold">Ready for conversion</p>
      <span>Enter a value above to see the results.</span>
    </div>

  {:else}
    <div class="search-wrapper glass mb-4" in:fade>
      <i class="bi bi-search search-icon"></i>
      <input 
        type="text" 
        placeholder="Search units (e.g. Gallon, L, Cup)..." 
        bind:value={searchQuery}
        class="search-input"
      />
      {#if searchQuery}
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <button class="clear-btn" on:click={() => searchQuery = ''}>
          <i class="bi bi-x-circle-fill"></i>
        </button>
      {/if}
    </div>

    <div class="scroll-area">
      {#if filteredResults.length > 0}
        <div class="results-grid">
          {#each filteredResults as result, i (result.id)}
            <div 
              class="result-card glass" 
              in:fly={{ y: 20, duration: 400, delay: i * 30 }}
            >
              <div class="unit-info">
                <span class="unit-name">{result.name}</span>
                <span class="unit-symbol">{result.symbol}</span>
              </div>

              <div class="value-display">
                <span class="value-text">{result.formatted}</span>
              </div>
              
              <div class="card-accent"></div>
            </div>
          {/each}
        </div>
      {:else}
        <div class="no-results" in:fade>
          <p>No units match "<strong>{searchQuery}</strong>"</p>
        </div>
      {/if}
    </div>
  {/if}
</div>

<style>
  .results-container {
    margin-top: 2rem;
  }

  /* Search Bar Styling */
  .search-wrapper {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border-radius: 50px;
    border: 1px solid var(--glass-border);
    background: var(--glass-bg);
    transition: all 0.3s ease;
  }

  .search-wrapper:focus-within {
    border-color: var(--brand-orange);
    box-shadow: 0 4px 15px rgba(195, 88, 49, 0.1);
  }

  .search-icon {
    color: var(--brand-orange);
    margin-right: 12px;
    font-size: 1.1rem;
  }

  .search-input {
    flex: 1;
    border: none;
    background: transparent;
    outline: none;
    color: var(--color-text-main);
    font-size: 1rem;
    font-weight: 500;
  }

  .clear-btn {
    background: none;
    border: none;
    color: var(--brand-orange);
    opacity: 0.6;
    cursor: pointer;
    transition: opacity 0.2s;
  }

  .clear-btn:hover { opacity: 1; }

  /* Scroll Area & Custom Scrollbar */
  .scroll-area {
    max-height: 550px; /* Limits the vertical growth */
    overflow-y: auto;
    padding-right: 10px; /* Space for scrollbar */
    padding-bottom: 20px;
    mask-image: linear-gradient(to bottom, black 95%, transparent 100%);
  }

  /* Custom Scrollbar Styling (WebKit) */
  .scroll-area::-webkit-scrollbar {
    width: 6px;
  }

  .scroll-area::-webkit-scrollbar-track {
    background: transparent;
  }

  .scroll-area::-webkit-scrollbar-thumb {
    background: var(--brand-orange);
    border-radius: 10px;
    opacity: 0.3;
  }

  .scroll-area::-webkit-scrollbar-thumb:hover {
    background: var(--brand-orange-hover);
  }

  .results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.25rem;
    padding: 5px; /* Prevention for card hover clipping */
  }

  .result-card {
    position: relative;
    padding: 1.5rem;
    border-radius: 20px;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
  }

  .result-card:hover {
    transform: scale(1.03) translateY(-3px);
    border-color: var(--brand-orange);
    box-shadow: 0 15px 30px rgba(195, 88, 49, 0.1);
    z-index: 2;
  }

  .unit-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .unit-name {
    font-weight: 700;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    opacity: 0.8;
    color: var(--color-text-main);
  }

  .unit-symbol {
    font-size: 0.75rem;
    background: var(--brand-orange);
    color: white;
    padding: 2px 10px;
    border-radius: 50px;
    font-weight: 800;
  }

  .value-display {
    background: rgba(0, 0, 0, 0.03);
    padding: 12px;
    border-radius: 12px;
    text-align: right;
  }

  .value-text {
    font-weight: 800;
    font-family: 'JetBrains Mono', 'Monaco', monospace;
    font-size: 1.4rem;
    color: var(--brand-orange);
    word-break: break-all;
  }

  .card-accent {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 4px;
    background: var(--brand-orange);
    transition: width 0.3s ease;
  }

  .result-card:hover .card-accent { width: 100%; }

  .status-msg, .no-results {
    padding: 60px 20px;
    text-align: center;
    background: var(--glass-bg);
    border-radius: 30px;
    border: 2px dashed var(--glass-border);
    color: var(--color-text-main);
  }

  .no-results { opacity: 0.8; padding: 40px; }
  .status-msg.error { color: #dc3545; border-color: rgba(220, 53, 69, 0.2); }
  .status-msg i { color: var(--brand-orange); }

  @media (max-width: 576px) {
    .results-grid { grid-template-columns: 1fr; }
    .scroll-area { max-height: 450px; }
  }
</style>