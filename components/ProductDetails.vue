<template>
    <Navbar/>
    <div class="product_card_container">
        <div class="product_card">
            <img class="product_card__img" :src="product.img">
            <div class="product_details">
                <p class="product_details__model">Model {{product.model}}</p>
                <p class="product_details__name">{{product.name}}</p>
                <p class="product_details__description">{{product.description}}</p>
                <p>Materials</p>
                <p class="product_details__materials">{{product.materials}}</p>
                <p>Specifications</p>
                <ul class="specifications">
                    <li v-for="spec in product.specifications" :key="spec.width">
                        Width: {{ spec.width }}
                        Depth: {{ spec.depth }}
                        Height: {{ spec.height }}
                    </li>
                </ul>
            </div>
        </div>
            <div class="wishlist">
                <img src="/assets/empty-fav.png" class="wishlist__icon">
                <p class="wishlist__text">Add to wishlist</p>
            </div>
        </div>
</template>


<script setup>
  const { product } = defineProps(['product'])
</script>



<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/main.scss";

.product_card_container {
    max-width: 800px;
    margin: 0 auto;
    border: 1px solid green;
}

.product_card {
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
    max-width: 325px;
    margin: 0 auto;
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
    &__description,
    &__materials {
        font-size: 0.8rem;
    }
}

.specifications {
    max-width: 100px;
    padding: 0;
    li {
        list-style: none;
        font-size: 0.8rem;
    }
}

.wishlist {
    display: flex;
    align-items: center;
    justify-content: center;
    color: $light-brown;
    text-decoration: underline;
    &__icon {
        max-width: 20px;
        margin: 0 0.5rem 0 0;
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
