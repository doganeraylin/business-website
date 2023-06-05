<template>
    <Navbar/>
    <Hero/>
    <BrandValues/>
    <CTA/>
    <Newsletter/>
    <Footer/>
    <Confirmation v-show="showModal"/>  
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style>
@import "@/assets/variables.scss";
</style>