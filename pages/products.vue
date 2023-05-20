<template>
<div class="container">
    <img class="container__img" src="assets/products/banner.png">
    <h1 class="container__title">all products</h1>
    <p class="container__subtitle">explore our captivating collection of handcrafted furniture pieces</p>
    <ProductCard/>
    <ProductDetails/>
</div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/main.scss";

.container {
    &__img {
        max-width: 100%;
    }
    &__subtitle {
        text-align: center;
    }

}
</style>