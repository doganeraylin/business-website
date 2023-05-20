<template>
   <div class="container">
        <div class="img_container">
            <img class="img_container__img img_container__img_first_craftsman" src="/assets/about/craftsman-1.png">
            <img class="img_container__img img_container__img_second_craftsman" src="/assets/about/craftsman-2.png">  
        </div>
        <div class="img_container">
            <img class="img_container__img img_container__img_details" src="/assets/about/details.png">
            <img class="img_container__img img_container__img_third_craftsman" src="/assets/about/craftsman-3.png">
            <img class="img_container__img img_container__img_fourth_craftsman" src="/assets/about/craftsman-4.png">
        </div>
    </div>
</template>


<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/main.scss";

.img_container {
    display: flex;
    flex-direction: column;
    &__img {
        max-width: 320px;
        margin: 1rem auto;
    }
}

@media (min-width: 768px) and (max-width: 1199px) {
    .img_container {
        &__img {
        max-width: 750px;
        }
    }        
}

@media (min-width: 1200px) {
    .img_container {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        &__img {
            margin: 1rem 0;
            max-width: 100%;
            height: 275px;
        }
    }

}
   

</style>