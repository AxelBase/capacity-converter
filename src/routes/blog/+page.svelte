<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    {
      href: '/blog/posts/post1',
      title: 'Why Liquid Capacity Conversions Require Precision',
      category: 'Mathematics',
      description: 'Understanding the mathematical importance of accurate conversion factors and why rounding errors can significantly affect real-world measurements.'
    },
    {
      href: '/blog/posts/post2',
      title: 'The Milliliter: The Universal Pivot Unit',
      category: 'Systems',
      description: 'How a single canonical unit enables accurate conversion across metric, US customary, and imperial liquid measurement systems.'
    },
    {
      href: '/blog/posts/post3',
      title: 'Understanding Metric Capacity Units',
      category: 'Metric',
      description: 'A breakdown of milliliters, liters, centiliters, and larger metric units, and how they scale in scientific and everyday measurements.'
    },
    {
      href: '/blog/posts/post4',
      title: 'US Customary Liquid Measurements Explained',
      category: 'US Customary',
      description: 'Explore teaspoons, cups, quarts, and gallons, including how they relate to each other and why their values differ from imperial units.'
    },
    {
      href: '/blog/posts/post5',
      title: 'Imperial Volume Units and Their Historical Origins',
      category: 'Imperial',
      description: 'Discover the imperial gallon, pint, and fluid ounce, and why they differ from the US customary system.'
    },
    {
      href: '/blog/posts/post6',
      title: 'Handling Extremely Small Liquid Measurements',
      category: 'Specialized',
      description: 'From drops to dashes, learn how small-scale capacity units are used in cooking, chemistry, and medicine.'
    },
    {
      href: '/blog/posts/post7',
      title: 'Large Scale Liquid Measurements in Industry',
      category: 'Industrial',
      description: 'Understanding barrels, kiloliters, and cubic meters used in oil, manufacturing, and scientific applications.'
    }
  ];
</script>

<svelte:head>
  <title>Knowledge Base | Capacity Conversion Guides</title>
  <meta name="description" content="Educational articles explaining liquid capacity measurement systems and accurate conversions." />
</svelte:head>

<div class="blog-container">
  <div class="blob-wrapper">
    <div class="blob"></div>
  </div>

  <div class="container blog-index">
    <header class="blog-header text-center">
      <div class="badge-accent mb-3">Knowledge Base</div>
      <h1 class="display-4 fw-bold mb-3">
        Capacity Insights
      </h1>
      <p class="subtitle mx-auto">
        Learn how metric, US customary, and imperial systems relate to one another and why precision 
        matters in scientific, culinary, and industrial applications.
      </p>
    </header>

    <div class="posts-grid">
      {#each posts as post}
        <a href="{base}{post.href}" class="post-card-wrapper">
          <article class="post-card glass">
            <div class="card-content">
              <span class="category-tag">{post.category}</span>
              <h2 class="post-title">{post.title}</h2>
              <p class="post-description">{post.description}</p>
              <div class="post-footer">
                <span class="read-more">
                  Read Article 
                  <i class="bi bi-arrow-right ms-1"></i>
                </span>
              </div>
            </div>
          </article>
        </a>
      {/each}
    </div>
  </div>
</div>

<style>
  .blog-container {
    position: relative;
    overflow: hidden;
    min-height: 100vh;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  /* Decorative Background */
  .blob-wrapper {
    position: absolute;
    top: -10%;
    right: -5%;
    z-index: -1;
    filter: blur(80px);
    opacity: 0.15;
  }
  .blob {
    width: 400px;
    height: 400px;
    background: var(--brand-orange);
    border-radius: 50%;
  }

  .blog-header {
    margin-bottom: 5rem;
  }

  .badge-accent {
    display: inline-block;
    background: rgba(195, 88, 49, 0.1);
    color: var(--brand-orange);
    padding: 6px 16px;
    border-radius: 50px;
    font-weight: 700;
    font-size: 0.85rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .blog-header h1 {
    color: var(--color-text-main);
    font-family: 'Poppins', sans-serif;
  }

  .subtitle {
    font-size: 1.15rem;
    max-width: 800px;
    line-height: 1.8;
    color: var(--color-text-main);
    opacity: 0.8;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 2rem;
  }

  .post-card-wrapper {
    text-decoration: none;
    color: inherit;
    transition: transform 0.3s ease;
  }

  .post-card-wrapper:hover {
    transform: translateY(-8px);
  }

  .post-card {
    height: 100%;
    border-radius: 24px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid var(--glass-border);
    transition: all 0.3s ease;
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
  }

  .post-card-wrapper:hover .post-card {
    border-color: var(--brand-orange);
    box-shadow: 0 20px 40px rgba(195, 88, 49, 0.12);
  }

  .category-tag {
    font-size: 0.75rem;
    font-weight: 800;
    color: var(--brand-orange);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 1rem;
    display: block;
  }

  .post-title {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.3;
    color: var(--color-text-main);
  }

  .post-description {
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--color-text-main);
    opacity: 0.7;
    margin-bottom: 2rem;
  }

  .read-more {
    font-weight: 700;
    color: var(--brand-orange);
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    transition: gap 0.2s ease;
  }

  .post-card-wrapper:hover .read-more {
    gap: 8px;
  }

  @media (max-width: 768px) {
    .blog-header h1 { font-size: 2.2rem; }
    .posts-grid { grid-template-columns: 1fr; }
  }
</style>