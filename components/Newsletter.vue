<template>
    <div class="container">
        <div class="title_container" >
             <h1 class="title_container__title" ref="titleRef">Unlock a World of Inspiration:</h1>
        </div>
        <div class="subtitle_container" >
            <h2 class="subtitle_container__subtitle"> Join Our Newsletter for Design Tips, Trends, and Exclusive Deals.</h2>
        </div>
        
        <div class="input_container">
            <input type="email" placeholder="example@example.com" v-model="email" required>
            <Button 
                :class="isButtonDisabled ? 'disabled-style' : 'primary-style'"
                buttonText="subscribe" 
                @click="subscribe"
                :disabled="isButtonDisabled"
            />
        </div>
    </div>
    <div v-if="isModalOpen">
        <Confirmation @close="closeModal"/>
    </div>
</template>

<script>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      email: '',
      isModalOpen: false,
      emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      errorMessage: '',
    };
  },
  methods: {
    subscribe() {
      if (!this.isValidEmail()) {
        this.errorMessage = 'Please enter a valid email address.';
        return;
      }
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    isValidEmail() {
      return this.emailRegex.test(this.email.trim());
    },
  },
  computed: {
    isButtonDisabled() {
      return !this.isValidEmail() || this.email.trim() === '';
    },
  },
  mounted() {
    const titleRef = this.$refs.titleRef;
    const subtitleRef = this.$refs.subtitleRef;

    let mediaQueries = gsap.matchMedia();
    mediaQueries.add('(min-width: 800px)', (context) => {
      context.add(() => {
        gsap.to(titleRef, {
          scrollTrigger: {
            trigger: titleRef,
            toggleClass: 'title_container__active',
            start: 'top 100%',
          },
        });
      });
    });
  },
};
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