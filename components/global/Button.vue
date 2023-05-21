<template>
  <button :class="buttonClass" @click="handleClick">
    <NuxtLink :to="to" v-if="to" class="link_style">{{ buttonText }}</NuxtLink>
    <span v-else>{{ buttonText }}</span>
  </button>
</template>

<script>
export default {
  props: {
    buttonClass: {
      type: String,
      default: 'default-style' // Default style if no style is provided
    },
    buttonText: {
      type: String,
      default: 'button' // Default content if no content is provided
    },
    clickHandler: {
      type: String,
      required: true,
    },
    to: {
      type: [String, Object],
      default: null
    }

  },
  methods: {
    handleClick() {
        if (typeof this[this.clickHandler] === 'function') {
            this[this.clickHandler]();
        }
        },
        goToProducts() {
        console.log('products page');
        // Perform action for button1
        },
        submitEmail() {
        console.log('email submitted');
        // Perform action for button2
        }
        // Add more methods for other buttons if needed
    }

}

</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/main.scss";

/* Define different button styles as per your requirements */
.default-style {
  text-align: center;
  border: 1px solid black;
  background-color: transparent;
  padding: 0.5rem 1.4rem;
  font-size: 1.2rem;
  font-weight: lighter;
  margin: 1rem 0;
}

.primary-style {
  text-align: center;
  border: 1px solid black;
  background-color: $light-brown;
  color: $gray-primary;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 1.3rem;
  margin: 1rem 0;
}
.link_style {
  text-decoration: none;
  color: black;
}

</style>
