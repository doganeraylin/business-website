<template>
   <div class="container">
       <div class="container__links">
            <div>
                <p class="container__links_title">company</p>
                <ul class="container__links_list">
                  <li>our story</li>
                  <li>products</li>
                  <li>find a dealer</li>
                </ul>
            </div>
            <div>
                <p class="container__links_title">contact</p>
                <ul class="container__links_list">
                    <li class="container__contact">WOUD A/SSøndergårdsalle 9 MF8700 Horsens Denmark </li>
                </ul>
            </div>
            <div>
                <p class="container__links_title">legal</p>
                <ul class="container__links_list">
                  <li>privacy policy</li>
                  <li>warranty</li>
                  <li>terms and conditions</li>
                </ul>
            </div>
       </div>
       <div class="container__bottom">
           <p>lumiere</p>
           <p class="container__copyright">Copyright © Lumiere Furniture 2023</p>
       </div>
   </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/main.scss";

.container {
    background-color: $light-brown;
    margin: 0 auto;
    &__links {
        padding: 1rem 0;
        max-width: 900px;
        margin: 0 auto;
        text-align: center;
        color: $gray-primary;
    }
    &__links_title {
       opacity: 0.5;
       margin: 1rem 0;
       text-transform: uppercase;
    }
    &__bottom {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        font-size: 1rem;
        border-top: 1px $gray-primary solid;
        margin: 1rem 0;
    }
    &__copyright {
        font-size: 0.8rem;
        opacity: 0.5;
    }
    &__links_list {
        list-style: none;
    }
}

@media (min-width: 768px) {
    .container {
        &__links_title {
        opacity: 0.5;
        margin: 1rem 0;
        text-transform: uppercase;
        }
        &__links {
            display: flex;
            justify-content: space-around;
        }
        &__contact {
            max-width: 150px;
        }
        &__bottom {
            flex-direction: row;
        }
    }
}
</style>