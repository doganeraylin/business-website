<template>
    <div class="container">
        <h1 class="container__title">Unlock a World of Inspiration:</h1>
        <h2 class="container__subtitle"> Join Our Newsletter for Design Tips, Trends, and Exclusive Deals.</h2>
        <div class="input_container">
            <input type="email" placeholder="example@example.com">
            <Button 
                buttonClass="primary-style"
                buttonText="subscribe"
                clickHandler="goToProducts"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/main.scss";

.container {
    max-width: 1100px;
    margin: 6.5rem auto;
    text-align: center;
    &__subtitle {
        max-width: 600px;
        font-weight: lighter;
        margin: 0.5rem auto 1rem auto;
    }
}

.input_container {
    display: flex;
    align-items: center;
    justify-content: center;
    input[type="email"] {
    padding: 0.8rem 1rem;
    border: none;
    }
}

@media (min-width: 1080px) {
    .container {
        &__title {
            font-size: 3.5rem;
        }
        &__subtitle {
            font-size: 2.5rem;
        }
    }
}

</style>