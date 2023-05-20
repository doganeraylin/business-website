<template>
    <div class="product_card_container">
         <div class="product_card">
        <div class="product_card__img_container">
            <img class="product_card__img" src="assets/products/chair.png">
        </div>
        <div class="product_card__info_container">
            <div class="product_card__info">
                <p class="product_card__name">serenity seat</p>
                <p class="product_card__price">starting from $200</p>
            </div>
            <img class="product_card__icon" src="/assets/empty-fav.png">
        </div>
    </div>
        <div class="product_card">
        <div class="product_card__img_container">
            <img class="product_card__img" src="assets/products/chair.png">
        </div>
        <div class="product_card__info">
            <p>serenity seat</p>
            <img class="product_card__icon" src="/assets/empty-fav.png">
            <!-- <div class="product_card__price_container">
                <p>starting from $200</p>
            </div> -->
        </div>
    </div>
        <div class="product_card">
        <div class="product_card__img_container">
            <img class="product_card__img" src="assets/products/chair.png">
        </div>
        <div class="product_card__info">
            <p>serenity seat</p>
            <img class="product_card__icon" src="/assets/empty-fav.png">
            <!-- <div class="product_card__price_container">
                <p>starting from $200</p>
            </div> -->
        </div>
    </div>
    </div>
   
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/main.scss";

.product_card_container {
    display: flex;
    flex-direction: column;
}

.product_card {
    display: flex;
    flex-direction: column;
    max-width: 305px;
    border: 1px solid $light-brown;
    margin: 1rem auto;
    &__img_container {
        margin: 0 auto;
    }
    &__img {
        max-width: 300px;
    }
    &__icon {
        max-width: 30px;
    }
    &__info_container {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding: 0.5rem 1rem;
    }
    &__name {
        margin: 0;
        text-transform: capitalize;
    }
    &__price {
        opacity: 0.5;
        margin: 1rem 0;
        font-size: 0.8rem;
    }
}

@media (min-width: 768px) {
    .product_card_container {
        flex-direction: row;
        flex-wrap: wrap;
}
}


</style>