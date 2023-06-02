<template>
    <div class="container">
        <img class="container__img" src="/assets/about/craftsman-img-1.png">
        <img class="container__img" src="/assets/about/craftsman-img-2.png">
        <img class="container__img" src="/assets/about/details-img.png">
        <img class="container__img" src="/assets/about/craftsman-img-3.png">
        <img class="container__img" src="/assets/about/craftsman-img-4.png">
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/main.scss";

.container {
    display: flex;
    flex-direction: column;
    &__img {
        max-width: 300px;
        margin: 1rem auto;
    }
}

@media (min-width: 768px) {
    .container {
        flex-direction: row;
        border: 1px solid magenta;
    }
}

</style>