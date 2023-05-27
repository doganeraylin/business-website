<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const brandValuesRefOne = ref();
const brandValuesRefTwo = ref();
const brandValuesRefThree = ref();
const ctx = ref();

onMounted(() => {
    ctx.value = gsap.context(()=> {
        brandValuesRefOne.value = gsap.from(brandValuesRefOne.value, {
            x: -50,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: brandValuesRefOne.value,
                scrub: 1,
                start: "top bottom"
            }
        }),
        brandValuesRefTwo.value = gsap.from(brandValuesRefTwo.value, {
            x: 50,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: brandValuesRefTwo.value,
                scrub: 1,
                start: "top bottom"
            }
        }),
        brandValuesRefThree.value = gsap.from(brandValuesRefThree.value, {
            x: -50,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: brandValuesRefThree.value,
                scrub: 1,
                start: "top bottom"
            }
        })
    })
})
onUnmounted(() => {
  ctx.value.revert(); 
});
</script>


<template>
    <div class="container" >
        <div class="container__brand_value" ref="brandValuesRefOne">
            <div class="container__title_wrapper">
                <h1 class="container__title">crafted with care</h1>
                <div class="container__line"></div>
            </div> 
            <div class="container__brand_content">
                <img class="container__img" src="/assets/brandValues/details.png">
                <p class="container__statement">Each chair meticulously handcrafted using time-honored techniques.</p>
            </div>
        </div>
         <div class="container__brand_value" ref="brandValuesRefTwo">
            <div class="container__title_wrapper">
                <div class="container__line container__materials_line"></div>
                <h1 class="container__title container__materials_title">materials that matter</h1>
            </div> 
            <div class="container__brand_content">
                <p class="container__statement">Thoughtfully chosen, sustainable materials for chairs of exceptional quality.</p>
                <img class="container__img" src="/assets/brandValues/material.png">
            </div>
        </div>
         <div class="container__brand_value" ref="brandValuesRefThree">
            <div class="container__title_wrapper">
                <h1 class="container__title ">exquisite craftsmanship</h1>
                <div class="container__line container__craftsmanship_line"></div>
            </div> 
            <div class="container__brand_content">
                <img class="container__img" src="/assets/brandValues/craftsman.png">
                <p class="container__statement">Our skilled artisans ensure flawless execution of every curve, angle, and finish.</p>
            </div>
        </div>
 
 
    </div>
</template>


<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/main.scss";

.container {
    max-width: 900px;
    margin: 3rem auto;
    &__brand_value {
        margin: 4rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &__title {
        font-family: $titleFont;
        font-size: 2rem;
        text-transform: uppercase;
        text-align: start !important;
    }
    &__title_wrapper {
        display: flex;
        align-items: center;
        justify-content: space-around;
        max-width: 350px;
        margin: 0 auto;
    }
    &__line {
        width: 100px;
        height: 2px;
        background-color: $light-brown;

    }
    &__img {
        margin: 1.5rem 0;
        max-width: 300px;
        box-shadow: 10px 10px 0px 0px rgba(188,160,107,1);
    }
    &__brand_content {
        max-width: 350px;
        margin: 0 auto;
    }

    &__statement {
        max-width: 300px;
        margin: 1.5rem auto 0;

    }
    &__materials_title {
        text-align: right !important;
    }
    &__materials_line,
    &__craftsmanship_line  {
        width: 200px;
    }
    &__line {
        width: 400px;
        height: 2px;
        background-color: $light-brown;
    }
}


@media (min-width: 992px) {
    .container {
        margin: 10rem auto;
        &__brand_content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2.5rem;
        max-width: 600px;
        }
        &__title_wrapper {
        display: flex;
        align-items: center;
        max-width: 600px;
        }
        &__img {
        width: 500px;
        }
        &__statement {
        font-size: 1.75rem;
        }
    
        &__title {
        font-size: 3rem;
        }
    } 
}

</style>