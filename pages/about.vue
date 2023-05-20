<template>
    <div class="container">
        <div class="story_container">
            <h1 class="container__title">our story</h1>
            <p class="container__story">At [Your Brand], established in [Year] in [Place], we are driven by our passion for creating timeless furniture that blends functionality, aesthetics, and sustainability. From our humble beginnings in a small workshop, we have grown into a recognized name, guided by our unwavering commitment_ to exceptional craftsmanship and innovative design. Each piece in our collection tells a story, crafted with care and attent_ion to detail, bringing beauty and inspiration to homes worldwide</p>
        </div>
        <AboutImgLayout/>
        <AboutStatement/>
        <Team/>
        <Footer/>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/main.scss";

.container {
    &__story_wrapper {
        display: flex;
        flex-direction: column;
        align-items: cent_er;
    }
    &__story {
        padding: 0 1rem;
        max-width: 750px;
        margin: 1rem auto;

    }
}

</style>