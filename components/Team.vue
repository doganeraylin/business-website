<template>
<div class="container" > 
  <h1 class="container__title">inspired creators, captivating visions</h1>
  <div class="team_container">
    <button class="button" @click="handlePrevSlide">&lt;</button>
    <div class="single_card" v-for="member in activeMembers" :key="member.id">
      <div class="single_card__content">
        <img class="single_card__img" :src="member.img"> 
        <div>
          <p class="single_card__name">{{member.name}}</p>
          <p class="single_card__position">{{member.position}}</p>
        </div>
      </div>
    </div>
    <button class="button" @click="handleNextSlide">&gt;</button>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      activeIndices: [0, 1, 2]
    };
  },
  props: {
    teamData: {
      type: Array,
      required: true,
    },
  },
  computed: {
    activeMembers() {
      return this.activeIndices.map((index) => this.teamData[index]);
    },
  },
  methods: {
    handleNextSlide() {
      this.activeIndices = this.activeIndices.map((index) => (index + 1) % this.teamData.length);
    },
    handlePrevSlide() {
      this.activeIndices = this.activeIndices.map((index) =>
        index === 0 ? this.teamData.length - 1 : index - 1
      );
    },
  },
  mounted() {
  const mediaQuery = window.matchMedia('(max-width: 992px)');
  const handleResize = () => {
    if (mediaQuery.matches) {
      this.activeIndices = Array.from(Array(this.teamData.length).keys());
    } else {
      this.activeIndices = [0, 1, 2];
    }
  };
  handleResize();
    mediaQuery.addEventListener('change', handleResize);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.container {
    margin: 5rem 0;
}
.team_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
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
.button {
  display: none;
}

@media (min-width: 992px) {
  .button {
    display: block;
  }
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
