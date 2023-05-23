<template>
    <div class="container">
        <h1 class="container__title">inspired creators, captivating visions</h1>
        <div class="team_container">
            <div class="single_card" v-for="member in data" :key="member.id">
                <img class="single_card__img" :src="member.img"> 
                <div>
                    <p class="single_card__name">{{member.name}}</p>
                    <p class="single_card__position">{{member.position}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const data = ref(null);

    async function fetchData() {
      try {
        const response = await fetch('https://business-website-json.vercel.app/team');
        const jsonData = await response.json();
        data.value = jsonData;
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
    return {
      data
    };
  }
};
</script>







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

