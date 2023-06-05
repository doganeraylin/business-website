<template>
    <div class="statement">
        <div class="statement__text">
            <h2 class="statement__title">creating exquisite living experiences</h2>
            <p class="statement__description">"Lumière is a leading furniture brand dedicated to providing a refined and enriching lifestyle. We pride ourselves on exceptional quality, timeless designs, and personalized service. We strive to minimize our environment_al footprint while maximizing customer satisfaction. </p>
        </div>
        <div class="statement__imgs">
            <img class="statement__img" src="/assets/about/chair-1.png">
            <img class="statement__img" src="/assets/about/chair-2.png">
            <img class="statement__img" src="/assets/about/chair-3.png">
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.statement {
    max-width: 370px;
    padding: 0 1rem;
    margin: 5rem auto;
    &__title {
        font-family: $titleFont;
        text-transform: uppercase;
        font-size: 2rem;
    }
    &__imgs {
        display: flex;
        justify-content: space-between;
    }
    &__img {
        max-width: 110px;
    }
}

@media (min-width: 768px) {
      .statement {
        max-width: 1000px;
        margin: 10rem auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &__imgs {
            flex-direction: column;
        }
        &__img {
        margin: 0.5rem 0;
        }
        &__text {
            max-width: 600px;
        }
        &__title {
            font-size: 3rem;
            max-width: 550px;
        }
        &__description {
            font-size: 1.5rem;
        }
    }
}
</style>

