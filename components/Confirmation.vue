<template>
    <div class="container">
        <img class="container__img" src="/assets/confirmation/modal-img.png">
        <div class="text_container">
            <h1 class="text_container__title">Welcome to The Inner Circle!</h1>
            <p class="text_container__description">Congratulations on subscribing to our newsletter. Get ready to experience a world of design inspiration, exclusive offers, and insider updates. Stay tuned for our captivating content straight to your inbox.</p>
            <p class="text_container__thank_you">Thank you for joining us!</p>
            <p class="text_container__signature">The Lumiere Team</p>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/main.scss";

.container {
    max-width: 520px;
    margin: 0 auto;
    padding: 1rem;
    color: $gray-primary;
    background-color: $light-brown;
    border: 1px solid $black;
    text-align: center;
    &__img {
        max-width: 100%;
    }
}

.text_container {
    &__description {
        max-width: 420px;
        margin: 0 auto;
    }
    &__thank_you {
        font-size: 0.9rem;
    }
    &__signature {
        opacity: 0.5;
        font-size: 0.8rem;
        margin-top: 2rem;
    }
}

</style>