<template>
    <Navbar/>
    <div class="container">
        <div class="story_container">
            <h1 class="container__title">our story</h1>
            <p class="container__story">At Lumière, established in 2008 in Copenhagen, we are driven by our passion for creating timeless furniture that blends functionality, aesthetics, and sustainability. From our humble beginnings in a small workshop, we have grown into a recognized name, guided by our unwavering commitment to exceptional craftsmanship and innovative design. Each piece in our collection tells a story, crafted with care and attention to detail, bringing beauty and inspiration to homes worldwide.</p>
        </div>
        <AboutImgLayout/>
        <AboutStatement/>
        <Team :teamData="teamData"/>
        <Footer/>
    </div>
</template>

<script setup>
  const { data: teamData } = await useFetch('https://business-website-json.vercel.app/team')
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/main.scss";

.container {
    &__story {
        padding: 0 1rem;
        max-width: 750px;
        margin: 1rem auto;
        line-height: 1.75rem;
    }
}
.story_container {
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media (min-width: 768px) {
   .story_container {
       margin: 5rem 0 3rem;
   }
}

</style>