<script>
    import { base } from '$app/paths';
    import CapacityInput from '$lib/components/CapacityInput.svelte';
    import ConversionDisplay from '$lib/components/ConversionDisplay.svelte';
    import { fade, fly } from 'svelte/transition';

    let value = '';
    let unitId = 'ml';
    $: invalid = value !== '' && Number.isNaN(Number(value));
</script>

<svelte:head>
<title>Liquid Capacity Converter | Accurate Gallon Liter Cup Milliliter Conversion</title>

<meta name="description" content="Convert liquid capacity units instantly with high precision. Convert gallons liters cups milliliters quarts pints and more using accurate scientific conversion factors." />

<meta name="keywords" content="capacity converter liquid converter liters to gallons cups to milliliters fluid ounce conversion volume conversion tool" />

<meta property="og:title" content="Liquid Capacity Converter | Accurate Unit Conversion Tool" />
<meta property="og:description" content="High precision liquid capacity converter supporting liters gallons cups milliliters pints quarts and more." />
<meta property="og:url" content="{base}/" />
<meta property="og:type" content="website" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Liquid Capacity Converter | Accurate Unit Conversion Tool" />
<meta name="twitter:description" content="Convert liters gallons cups milliliters and more using precise conversion factors." />

<meta name="robots" content="index, follow" />
</svelte:head>

<div class="container py-5">
    <section id="home" class="row justify-content-center mb-5">
        <div class="col-lg-8 col-xl-6 text-center">
            <div in:fade={{ duration: 1000 }}>
                <h1 class="display-4 fw-bold mb-3" style="color: var(--brand-orange);">Capacity Converter</h1>
                <p class="lead opacity-75 mb-5">Precise. Fast. Minimalist.</p>
            </div>

            <div class="glass-card p-4 p-md-5" in:fly={{ y: 40, duration: 1000 }}>
                <CapacityInput bind:value bind:unitId {invalid} />
                <div class="mt-4">
                    <ConversionDisplay inputValue={value} fromUnitId={unitId} />
                </div>
            </div>
        </div>
    </section>

<section id="about" class="py-5" in:fade>
    <div class="glass-card p-5">
        <h2 class="mb-4">About AxelBase Capacity Converter</h2>
        <p>AxelBase Capacity Converter is a precision-focused liquid measurement utility designed to provide reliable conversions between many common global capacity units. Liquid measurements appear simple at first glance, but the relationships between measurement systems can be complex. Different regions of the world rely on different unit standards, including the metric system, the United States customary system, and the imperial measurement system. Each of these systems defines units such as cups, pints, quarts, gallons, and liters differently. Without accurate conversion methods, translating between these systems can easily produce incorrect results.</p>
        
        <p>The goal of this tool is to make liquid capacity conversion simple while preserving numerical accuracy. Instead of relying on simplified approximations, the converter uses precise conversion relationships between units. Every supported unit is mathematically linked to a canonical base unit, which ensures that conversions remain consistent across all supported measurements. By translating a value through a common base reference, the tool ensures that every unit pair produces a reliable and predictable result.</p>
        
        <p>Accuracy is especially important when measurements are used in scientific work, laboratory experiments, food preparation, engineering, and industrial applications. Even a small rounding difference can become significant when measurements are scaled to larger quantities. A slight deviation in a conversion factor can result in noticeable differences when converting large volumes or when repeating calculations multiple times. Because of this, maintaining high precision throughout the calculation process is essential.</p>
        
        <p>The converter is designed to display results with a minimum level of decimal precision while also adapting to more precise conversion factors when necessary. Some measurement relationships include many decimal places in their exact values. Rather than discarding that precision, the system preserves it and ensures that the final output remains mathematically accurate.</p>
        
        <p>Another important aspect of the converter is accessibility. The tool is designed to work instantly within modern web browsers without requiring downloads, accounts, or server processing. This allows users to perform reliable conversions quickly from any device with internet access. The lightweight design also ensures that the tool remains fast and responsive even on mobile devices.</p>
        
        <p>AxelBase focuses on providing simple utilities that solve practical problems without unnecessary complexity. The capacity converter is part of a broader effort to create tools that help students, engineers, researchers, and everyday users work with accurate numerical data. By combining clear design with precise mathematical relationships, the converter allows anyone to translate liquid capacity measurements with confidence.</p>
        
        <p>Whether converting between liters and gallons, cups and milliliters, or any other supported capacity unit, the goal remains the same: Provide consistent results, maintain precision, and make reliable measurement conversion accessible to everyone.</p>
    </div>
</section>

<section id="how-to-use" class="py-5">
    <h2 class="text-center mb-5">How to Use the Capacity Converter</h2>
    <div class="row g-4">
        <div class="col-md-4">
            <div class="glass-card p-4 text-center h-100">
                <div class="fs-1 mb-3">1</div>
                <h5>Input Value</h5>
                <p class="small opacity-75">Using the capacity converter begins with entering the numeric value you wish to convert. This value represents the quantity of liquid capacity that will be translated into another unit of measurement. The input field accepts standard numeric values and immediately validates the information as it is entered. This ensures that the converter only processes valid numbers and prevents incorrect calculations caused by invalid input.</p>
                <p class="small opacity-75">Liquid capacity values can represent a wide range of quantities, from small measurements such as teaspoons and milliliters to larger volumes such as gallons or cubic meters. The converter is designed to support both small and large values while preserving numerical precision.</p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="glass-card p-4 text-center h-100">
                <div class="fs-1 mb-3">2</div>
                <h5>Select Units</h5>
                <p class="small opacity-75">After entering the numeric value, the next step is selecting the unit that represents the original measurement. Liquid capacity systems include many different units such as liters, milliliters, cups, pints, quarts, gallons, and fluid ounces.</p>
                <p class="small opacity-75">When a source unit is selected, the converter uses that unit to interpret the meaning of the input value. The value is first translated into a canonical base unit (a common reference point), then converted to the target unit. This two-stage approach ensures accurate and consistent results across all unit combinations, regardless of the measurement system.</p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="glass-card p-4 text-center h-100">
                <div class="fs-1 mb-3">3</div>
                <h5>See Results</h5>
                <p class="small opacity-75">Once the value and units have been selected, the converter produces the final result instantly. The calculation occurs directly within the browser, allowing the result to update immediately whenever the input value or units change.</p>
                <p class="small opacity-75">The result is displayed with carefully controlled precision, preserving the full accuracy of conversion factors (often with many decimal places) during calculation, and rounding only for readable output. This makes it ideal for both everyday use and technical/scientific contexts. Results update in real time, so you can quickly experiment and compare different units.</p>
            </div>
        </div>
    </div>
</section>

<section id="faq" class="py-5">
    <div class="glass-card p-5">
        <h2 class="mb-4">FAQ</h2>
        <div class="mb-4">
            <h6 class="fw-bold">How does the converter maintain high precision across different unit systems?</h6>
            <p class="small opacity-75">Every supported unit has a precise mathematical relationship with a shared canonical base unit. By converting through this base reference, the system maintains consistent relationships between all units (metric, US customary, imperial, etc.). Full precision is preserved during calculations, with rounding applied only to the final displayed result.</p>
        </div>
        <div class="mb-4">
            <h6 class="fw-bold">Why do different regions use different liquid measurement systems?</h6>
            <p class="small opacity-75">Historically, measurement standards developed independently around the world. The metric system became the international scientific standard due to its base-10 structure, but regions like the US continue using customary units (cups, pints, quarts, gallons), while others use imperial units. The converter bridges these systems with accurate translations.</p>
        </div>
        <div class="mb-4">
            <h6 class="fw-bold">Does rounding affect the reliability of conversions?</h6>
            <p class="small opacity-75">Rounding too early can introduce errors, especially in scaled or repeated calculations. This tool preserves full precision of conversion factors throughout the process and only rounds for display, ensuring mathematical accuracy.</p>
        </div>
        <div class="mb-4">
            <h6 class="fw-bold">Is this tool mobile friendly?</h6>
            <p class="small opacity-75">Absolutely. AxelBase is designed to be fully responsive on all devices, including desktops, tablets, and mobile phones. The interface adapts automatically to different screen sizes.</p>
        </div>
        <div class="mb-4">
            <h6 class="fw-bold">Are the calculations processed on a server?</h6>
            <p class="small opacity-75">No—all conversions happen instantly in your browser with no data sent to external servers. This keeps the tool fast, responsive, and privacy-friendly.</p>
        </div>
        <div>
            <h6 class="fw-bold">Are there more converters?</h6>
            <p class="small opacity-75">Yes! Check our Blog for updates on new tools being added weekly, plus explanations of measurement standards (metric, US customary, imperial) and their historical context.</p>
        </div>
    </div>
</section>
</div>

<style>
    section { scroll-margin-top: 120px; }
    h2 { color: var(--brand-orange); font-weight: 700; }
</style>