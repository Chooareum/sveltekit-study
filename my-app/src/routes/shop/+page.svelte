<script>
    export let data;
    const { products } = data;
</script>

<h1>SHOP</h1>
{#each products as product}
    <h2>
        <a href="/shop/{product.id}" data-sveltekit-prefetch>
            {product.title}
        </a>
    </h2>
    <p>{product.description}</p>
{/each}
