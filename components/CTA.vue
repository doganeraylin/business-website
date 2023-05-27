<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const imgsRef = ref();
const containerRef = ref();
const textRef = ref();
const ctx = ref();

onMounted(() => {
    const imgs = imgsRef.value.querySelectorAll('.container__img');
    ctx.value = gsap.context(() => {
        textRef.value = gsap.to(textRef.value, {
        opacity: 0,
        y: -50,
        ease:"power3",
        durating: 2,
        yoyo: true,
        scrollTrigger: {
            trigger: textRef.value,
            start: "top 30%",
            end: "bottom top",
            scrub: true,
        }
        })
        gsap.from(imgs, {
        opacity: 0,
        y: 200,
        ease: "power1.out",
        duration: 1.5,
        scrollTrigger: {
            trigger: imgs,
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
    <div class="container" ref="containerRef">
        <h1 ref="textRef" class="container__text">Transform Your Living Spaces with Opulence.</h1>
        <div class="container__imgs" ref="imgsRef">
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
        margin: 5rem auto;
        text-transform: uppercase;
        font-size: 3.5rem;
        text-align: center;
        font-family: 'Oswald', sans-serif;
    }
    &__imgs {
        margin: 2rem 0 5rem 0;
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
            margin: 10rem auto;
            border: 1px solid green;
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