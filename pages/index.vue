<template>
    <Navbar/>
    <Hero/>
    <BrandValues/>
    <CTA/>
    <Newsletter/>
    <Footer/>
    <Confirmation v-show="showModal"/>  
</template>

<script setup>
    const showModal = false
</script>

<style>
@import "@/assets/main.scss";
@import "@/assets/variables.scss";
</style>