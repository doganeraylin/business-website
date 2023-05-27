<template>
<div class="container">
    <Navbar/>
    <img class="container__img" src="/assets/products/banner.png">
    <h1 class="container__title">all products</h1>
    <p class="container__subtitle">explore our captivating collection of handcrafted furniture pieces</p>
    <div class="sortby_container">
    </div>
    <ProductCard :products="products"/>
    <Footer/>
</div>
</template>

<script setup>
const { data: products } = await useFetch('https://business-website-json.vercel.app/products')


</script>





<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/main.scss";

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



