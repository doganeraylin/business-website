<template>
    <div class="wrapper">
        <div class="container" ref="containerRef">
            <div class="text_container">
            <h1 class="text_container__title">Timeless Elegance for Your Home Sanctuary</h1>
            <div class="button_container">
                <Button 
                    to="/products"
                    buttonClass="default-style"
                    buttonText="explore"
                    clickHandler="goToProducts"
                />
            </div>
        </div>
        <div class="img_container" ref="imgsRef"> 
            <img class="img_container__img" src="/assets/hero/chair-1.png">
            <img class="img_container__img" src="/assets/hero/chair-2.png">
            <img class="img_container__img" src="/assets/hero/chair-1.png">
            <img class="img_container__img" src="/assets/hero/chair-2.png">
            <img class="img_container__img" src="/assets/hero/chair-1.png">
        </div>
        </div>
  
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const imgsRef = ref();
const containerRef = ref();

onMounted(() => {

const imgs = imgsRef.value.querySelectorAll('.img_container__img');
gsap.to(imgs, {
    xPercent: -100 * (imgs.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: containerRef.value,
        pin: true,
        scrub: 1,
        end: "+3000",
        markers: true,
    }
})
})

</script>



<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/main.scss";

.wrapper {
  overflow-x: hidden;
}

.container {
   max-width: 1100px;
   margin: 3rem auto;
//    width: 300vw;
 
}

.img_container {
    border: 1px solid yellow;
    max-width: 500px;
    margin: 0 auto;
    &__img {
        max-width: 180px;
        margin: 2rem 0;

    }
}
.text_container {
    &__title {
       max-width: 600px;
       margin: 1.5rem auto;
       font-family: $titleFont;
       text-align: center;
    }
}
.button_container {
    text-align: center;
    margin: 2rem 0 0 ;
}



@media (min-width: 768px) {
    .container {
        margin: 6rem auto;
        display: flex;
        align-items: center;
    }
    .text_container {
        margin-left: 1.5rem;
        &__title {
        max-width: 300px;
        font-size: 2.5rem;
        margin: 0 auto;
        font-family: $titleFont;
        text-align: start;
        }
    }
    .button_container {
        text-align: start;
    }
    .img_container {
        display: flex;
        &__img {
            max-width: 270px;
    }
  
}


}
// @media (min-width: 1200px) {
//     .container {
//         display: flex;
//         justify-content: space-around;
//         align-items: flex-start;

//         &__img {
//         max-width: 400px;
//         }
//         &__imgs {
//             display: flex;
//         }
//         &__title {
//         text-align:end;
//         font-size: 2.5rem;
//         max-width: 200px;
//         }

//     }
// }
</style>