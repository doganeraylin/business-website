<template>
  <button :class="buttonClass" @click="handleClick" >
    <NuxtLink :to="to" v-if="to" class="link_style">{{ buttonText }}</NuxtLink>
    <span v-else>{{ buttonText }}</span>
  </button>
</template>

<script>
export default {
  props: {
    buttonClass: {
      type: String,
      default: 'default-style' 
    },
    buttonText: {
      type: String,
      default: 'button' 
    },
    clickHandler: {
      type: String,
    },
    to: {
      type: [String, Object],
      default: null
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.default-style,
.primary-style,
.button-small {
  text-align: center;
  border: 1px solid $black;
  font-weight: lighter;
  cursor: pointer;
}
.default-style {
  background-color: transparent;
  padding: 0.5rem 1.4rem;
  font-size: 1.2rem;
  margin: 1rem 0;
}
.primary-style {
  background-color: $light-brown;
  color: $gray-primary;
  color: $white;
  padding: 0.5rem 1rem;
  font-size: 1.3rem;
  margin: 1rem 0;
}
.button-small {
  opacity: 0.5;
  margin: 0.5rem 0;
  padding: 0.2rem 0.5rem;
}
.link_style {
  text-decoration: none;
  color: $black;
}
.disabled {
  background: $gray-primary;
}
</style>
