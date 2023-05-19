<template>
    <div class="container">
        <div class="container__text">
            <h1 class="container__title">Timeless Elegance for Your Home Sanctuary</h1>
            <button>explore</button>
        </div>
        <div class="container__imgs">
            <img class="container__img" src="/assets/hero/chair-1.png">
            <img class="container__img" src="/assets/hero/chair-2.png">
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/main.scss";

.container {
   max-width: 1100px;
   margin: 0 auto;
   padding: 1rem;
   &__img {
       max-width: 175px;
   }
   &__title {
       font-size: 3rem;
       max-width: 600px;
   }
}

@media (min-width: 768px) {
    .container {
        border: 1px solid gray;
        display: flex;
        justify-content: space-around;
        align-items: center;

        &__img {
        max-width: 300px;
        }
        &__imgs {
            display: flex;
        }
        &__title {
        font-size: 2rem;
        max-width: 200px;
        }

    }
}
@media (min-width: 1200px) {
    .container {
        border: 1px solid magenta;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;

        &__img {
        max-width: 400px;
        }
        &__imgs {
            display: flex;
        }
        &__title {
        font-size: 2.5rem;
        max-width: 200px;
        }

    }
}
</style>