<template>
    <div class="container" > 
        <h1 class="container__title">inspired creators, captivating visions</h1>
        <div class="team_container">
            <div class="single_card" v-for="member in teamData" :key="member.id">
                <div class="single_card__content">
                    <img class="single_card__img" :src="member.img"> 
                    <div>
                        <p class="single_card__name">{{member.name}}</p>
                        <p class="single_card__position">{{member.position}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        teamData: {
            type: Array,
            required: true,
        }
    }
}
</script>


<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/main.scss";

.container {
    margin: 5rem 0;
}

.team_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
    overflow-x: hidden;
}
.single_card {
    margin: 1rem;
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
            margin: 3rem 0;
            box-shadow: 10px 10px 0px 0px rgba(188,160,107,1);
        }
    }
}
 
</style>
