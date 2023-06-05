<template>
   <div class="container" id="footer">
       <div class="links">
            <div class="links__single">
                <p class="links__title">company</p>
                <ul class="links__list">
                    <li><NuxtLink class="links__single_link" to="/about">our story</NuxtLink></li>
                    <li><NuxtLink class="links__single_link" to="/products">products</NuxtLink></li>
                    <li><NuxtLink class="links__single_link" to="/where-to-buy">find a dealer</NuxtLink></li>
                </ul>
            </div>
            <div class="links__single">
                <p class="links__title">contact</p>
                <ul class="links__list">
                    <li class="links_list__contact">Lumière Nørrebrogade 22, 2200 / Copenhagen </li>
                    <li>lumière.furniture@gmail.com</li>
                    <li>+45 12 34 56 78</li>
                </ul>
            </div>
       </div>
       <div class="copyright">
           <p class="copyright__logo">lumière</p>
           <p class="copyright__text">Copyright © Lumière Furniture 2023</p>
       </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.container {
    margin-top: 5rem;
    background-color: $light-brown;  
}
.links {
    color: $gray-primary;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__single {
        text-align: center;
        max-width: 250px;
        margin: 0 auto;
    }
    &__title {
        text-transform: uppercase;
        opacity: 0.5;
    }
    &__list {
        list-style: none;
        padding: 0;
    }
    &__single_link {
        text-decoration: none;
        color: $gray-primary;
    }
    &__single_link:hover {
        color: $black;
    }
}
.copyright {
    border-top: 2px solid rgb(225, 225, 225, 0.5);
    text-align: center;
    &__logo {
        font-family: $titleFont;
        font-size: 1.5rem;
        text-transform: uppercase;
    }

    &__text {
        opacity: 0.5;
        font-size: 0.8rem;
    }
}

@media (min-width: 768px) {
    .container {
        margin-top: 12rem;
    }
    .links {
        flex-direction: row;
    }
    .copyright {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 2.5rem;
    }
}
</style>