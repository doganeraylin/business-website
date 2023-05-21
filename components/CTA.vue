<template>
    <div class="container">
        <h1 class="container__text">Transform Your Living Spaces with Opulence.</h1>
        <div class="container__imgs">
            <img class="container__img" src="/assets/cta/chair-1.png">
            <img class="container__img" src="/assets/cta/chair-2.png">
            <img class="container__img" src="/assets/cta/chair-3.png">
        </div>
        <div class="button_container">
            <Button 
                to="/products"
                buttonClass="primary-style"
                buttonText="view all products"
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
    margin: 0 auto;
    &__text {
        max-width: 350px;
        margin: 0 auto;
        text-transform: uppercase;
        // border: 1px solid $light-brown;
        font-size: 3.5rem;
        text-align: center;
        font-family: 'Oswald', sans-serif;
    }
    &__imgs {
        display: flex;
        flex-direction: column;
    }
    &__img {
        max-width: 250px;
        margin: 0.5rem auto;
    }   
}

.button_container {
    display: flex;
    justify-content: center;
}


@media (min-width: 768px) {
    .container {
        &__text {
            max-width: 600px;
            margin: 1rem auto;
        }
        &__imgs {
            flex-direction: row;
            justify-content: space-between;
        }
        &__img {
            margin: 0;
            max-width: 240px;
        }
    }
  
}
@media (min-width: 992px) {
    .container {
        &__text {
            max-width: 800px;
            font-size: 6rem;
        }
        &__img {
            max-width: 320px;
        }
    }
}

@media (min-width: 1200px) {
       .container {
        &__img {
            max-width: 350px;
        }
    }
}

</style>