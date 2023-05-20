<template>
    <div class="container">
        <h1 class="container__title">inspired creators, captivating visions</h1>
        <div class="team_container">
            <div class="single_card">
                <img class="single_card__img" src="/assets/about/founder.png"> 
                <div>
                    <p class="single_card__name">Freya Magnusdottir</p>
                    <p class="single_card__position">Founder / CEO</p>
                </div>
            </div>
            <div class="single_card">
                <img class="single_card__img" src="/assets/about/founder.png"> 
                <div><p class="single_card__name">Freya Magnusdottir</p>
                <p class="single_card__position">Founder / CEO</p></div>
            </div>
            <div class="single_card">
                <img class="single_card__img" src="/assets/about/founder.png"> 
                <div><p class="single_card__name">Freya Magnusdottir</p>
                <p class="single_card__position">Founder / CEO</p></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/main.scss";

.team_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
}
.single_card {
    text-align: center;
    &__img {
        max-width: 320px;
        margin: 1rem 0;
        box-shadow: 10px 10px 0px 0px rgba(188,160,107,1);
    }
    &__name,
    &__position {
        margin:0;
    }
    &__position {
        opacity: 0.5;
    }
}

@media (min-width: 992px) {
    .team_container {
        flex-direction: row;
        justify-content: space-around;
    }
    .single_card {
        &__img {
            max-width: 290px;
            margin: 1rem 0;
            box-shadow: 10px 10px 0px 0px rgba(188,160,107,1);
        }
    }
}
 
</style>