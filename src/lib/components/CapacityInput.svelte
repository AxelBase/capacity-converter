<script>
  import { units } from '$lib/conversions';
  import { fade, slide } from 'svelte/transition';

  export let value = '';
  export let unitId = 'ml';
  export let invalid = false;
</script>

<div class="input-container mb-5">
  <label class="custom-label" for="capacity-input">
    Source Capacity
  </label>

  <div class="glass-input-group {invalid ? 'is-invalid-group' : ''}">
    <div class="input-icon">
      <i class="bi bi-droplet-fill"></i>
    </div>
    
    <input
      id="capacity-input"
      type="text"
      class="custom-input"
      placeholder="0.00"
      bind:value
      autocomplete="off"
      inputmode="decimal"
    />

    <div class="vertical-divider"></div>

    <div class="select-wrapper">
      <select class="custom-select" bind:value={unitId}>
        {#each units as unit}
          <option value={unit.id}>
            {unit.symbol} — {unit.name}
          </option>
        {/each}
      </select>
      <i class="bi bi-chevron-down select-arrow"></i>
    </div>
  </div>

  {#if invalid}
    <div class="error-text" in:slide={{ duration: 200 }} out:fade>
      <i class="bi bi-exclamation-circle-fill me-1"></i> 
      Please enter a valid numeric value
    </div>
  {/if}
</div>

<style>
  .input-container {
    max-width: 600px;
    margin: 0 auto;
  }

  .custom-label {
    display: block;
    font-weight: 700;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 12px;
    color: var(--brand-orange);
    padding-left: 10px;
  }

  .glass-input-group {
    display: flex;
    align-items: center;
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid var(--glass-border);
    border-radius: 50px;
    padding: 6px 18px;
    transition: all 0.3s ease;
    box-shadow: var(--glass-shadow);
  }

  .glass-input-group:focus-within {
    border-color: var(--brand-orange);
    box-shadow: 0 0 0 4px rgba(195, 88, 49, 0.15);
    transform: translateY(-2px);
  }

  .is-invalid-group {
    border-color: #dc3545 !important;
    animation: shake 0.4s ease-in-out;
  }

  .input-icon {
    color: var(--brand-orange);
    font-size: 1.2rem;
    margin-right: 10px;
    opacity: 0.8;
  }

  .custom-input {
    flex: 1;
    border: none;
    background: transparent;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 10px 5px;
    outline: none;
    color: var(--color-text-main);
    width: 100%;
  }

  .vertical-divider {
    width: 1px;
    height: 30px;
    background: var(--glass-border);
    margin: 0 15px;
  }

  .select-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  .custom-select {
    appearance: none;
    -webkit-appearance: none;
    border: none;
    background: transparent;
    padding: 8px 30px 8px 10px;
    font-weight: 700;
    font-size: 1rem;
    outline: none;
    cursor: pointer;
    color: var(--color-text-main);
  }

  /* FIX: Ensure dropdown options have a solid, themed background */
  .custom-select option {
    background-color: var(--input-bg);
    color: var(--color-text-main);
  }

  .select-arrow {
    position: absolute;
    right: 10px;
    pointer-events: none;
    font-size: 0.8rem;
    color: var(--brand-orange);
  }

  .error-text {
    color: #dc3545;
    font-size: 0.85rem;
    font-weight: 600;
    margin-top: 12px;
    padding-left: 15px;
  }

  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
  }
</style>