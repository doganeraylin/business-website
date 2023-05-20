<template>
    <div class="product_card_container">
        <div class="product_card">
            <img class="product_card__img" src="assets/products/chair.png">
            <div class="product_details">
                <p class="product_details__model">Model 2980</p>
                <p class="product_details__name">Serenity Seat</p>
                <p class="product_details__description">Indulge in the ultimate relaxation with our Serenity Seat, an exquisite piece of furniture designed to bring serenity and comfort to your living space. With its sleek and modern design, the Serenity Seat seamlessly blends into any interior décor, creating a serene oasis where you can unwind and rejuvenate.</p>
                <p>Materials</p>
                <p>Specifications</p>
            </div>
        </div>
        <div class="links">
            <button>find a store</button>
            <div class="wishlist">
                <img src="/assets/empty-fav.png" class="wishlist__icon">
                <p class="wishlist__text">Add to wishlist</p>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/main.scss";

.product_card_container {
    max-width: 800px;
    margin: 0 auto;
}

.product_card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
    max-width: 325px;
    // margin: 0 auto;
    border: 1px solid green;
    &__img {
        max-width: 325px;
        border: 1px solid $light-brown;
        margin: 0 0 1rem 0;
    }
}

.product_details {
    &__model {
        opacity: 0.5;
    }
    &__name {
        font-weight: bold;
    }
    &__description {
        font-size: 0.8rem;
    }
}

.links,
.wishlist {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.links {
    max-width: 325px;
    margin: 0 auto;
}

.wishlist {
    color: $light-brown;
    text-decoration: underline;
    &__icon {
        max-width: 20px;
        margin: 0 0.5rem 0 0;
    }
    &__text {
        font-size: 0.8rem;
    }
}


@media (min-width: 768px) {
    .product_card_container {
        padding: 0 1rem;
    }
    .product_card {
        flex-direction: row;
        padding: 0;
        max-width: 1100px;
        &__img {
            margin: 0;
            max-width: 375px;
        }
    }
    .product_details {
        padding: 0 2rem;
          &__name {
            font-size: 1.5rem;
        }
    }
    .links {
    max-width:  1100px;
    }

}


</style>
