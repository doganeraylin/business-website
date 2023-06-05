<template>
<div class="container">
    <Navbar/>
    <img class="container__img" src="/assets/banners/products-banner.png">
    <h1 class="container__title">all products</h1>
    <p class="container__subtitle">explore our captivating collection of handcrafted furniture pieces</p>
    <ProductCard :products="products"/>
    <Footer/>
</div>
</template>

<script>
export default {
    data() {
        return {
            products: [],
        };
    },
    async mounted() {
        try {
            const response = await fetch('https://business-website-json.vercel.app/products');
        if (response.ok) {
            this.products = await response.json();
        } else {
            console.error('Failed to fetch posts:', response.status);
        }
        } catch (error) {
            console.error('Error:', error);
        }
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.container {
    &__img {
        max-width: 100%;
    }
    &__title {
        margin: 1rem auto;
    }
    &__subtitle {
        text-align: center;
    }
}
</style> 



