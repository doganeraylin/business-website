<template>
    <div class="container">
        <div class="title_container" >
             <h1 class="title_container__title" ref="titleRef">Unlock a World of Inspiration:</h1>
        </div>
        <div class="subtitle_container" >
            <h2 class="subtitle_container__subtitle" ref="subtitleRef"> Join Our Newsletter for Design Tips, Trends, and Exclusive Deals.</h2>
        </div>
        
        <div class="input_container">
            <input type="email" placeholder="example@example.com">
            <Button 
                buttonClass="primary-style"
                buttonText="subscribe" 
                @click="isModalOpen = true"
            />
        </div>
    </div>
    <div v-if="isModalOpen">
        <Confirmation @close="closeModal"/>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const titleRef = ref()
const subtitleRef = ref()
const textRef = ref();
const ctx = ref()

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

onMounted(() => {
    let mediaQueries = gsap.matchMedia()
    mediaQueries.add("(min-width: 800px)", (context) => {
        context.add( () => {
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
            }),
            titleRef.value = gsap.to(titleRef.value, {
                scrollTrigger: {
                    trigger: titleRef.value,
                    toggleClass: "title_container__active",
                    start: "top 90%"
                }
            }),
            subtitleRef.value = gsap.to(subtitleRef.value, {
                scrollTrigger: {
                    trigger: subtitleRef.value,
                    toggleClass: "subtitle_container__typing",
                    start: "top 90%"
                }
            })
        })
    });
});
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/main.scss";

.container {
    max-width: 1100px;
    margin: 10rem auto;
    text-align: center;
}
.title_container {
    &__title {
        font-size: 3rem;
    }
    &__active {
        width: 25ch;
        margin: 0 auto;
        animation: typing 2s steps(22), blink .5s step-end infinite alternate;
        white-space: nowrap;
        overflow: hidden;
        border-right: 3px solid;
   }
    
}
.subtitle_container {
    &__subtitle {
        max-width: 600px;
        font-weight: lighter;
        margin: 0.5rem auto 1rem auto;
    }
    &_typing {
        width: 25ch;
        margin: 0 auto;
        animation: typing 2s steps(22), blink .5s step-end infinite alternate;
        white-space: nowrap;
        overflow: hidden;
        border-right: 3px solid;
    }
}
.input_container {
    display: flex;
    align-items: center;
    justify-content: center;
    input[type="email"] {
        padding: 0.8rem 1rem;
        border: none;
    }
}

@keyframes typing {
  from {
    width: 0
  }
}
    
@keyframes blink {
  50% {
    border-color: transparent
  }
}

@media (min-width: 1080px) {
    .container {
        &__title {
            font-size: 3.5rem;
        }
        &__subtitle {
            font-size: 2.5rem;
        }
    }
}

</style>