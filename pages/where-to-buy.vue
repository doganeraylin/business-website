<template>
  <div class="container">
    <Navbar/>
    <img class="container__img" src="/assets/banners/dealers-banner.png">
    <h1 class="container__title">find a dealer</h1>
    <div class="filter_container">
      <button class="filter_container__toggle" @click="toggleFilter">filter</button>
      <div v-if="isFilterOpen" class="filter_container__dropdown">
        <label v-for="country in dealers" :key="country.country">
          <input :value="country.country" v-model="filteredDealers" type="checkbox"/>
          <span>{{ country.country }}</span>
        </label>
      </div>
    </div>
    <FindDealer :filteredDealers="filteredDealers" :dealers="dealers"/>
    <Footer/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dealers: [],
      allDealers: [],
      filteredDealers: [],
      isFilterOpen: false,
    };
  },
  async mounted() {
    try {
      const response = await fetch('https://business-website-json.vercel.app/dealersList');
      if (response.ok) {
        this.dealers = await response.json();
      } else {
        console.error('Failed to fetch posts:', response.status);
      }
      } catch (error) {
        console.error('Error:', error);
      }
    this.allDealers = [dealers]
  },
  methods: {
    toggleFilter() {
      this.isFilterOpen = !this.isFilterOpen;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.container {
  &__img {
  width: 100%;
  }
  &__title {
  margin: 1rem auto;
  }
}
.filter_container {
  position: relative;
  display: inline-block;
  &__toggle {
  cursor: pointer;
    padding: 0.5rem 1rem;
    margin: 0 1rem;
    border: 1px solid $black;
  }
  &__toggle:hover {
    background-color: $light-brown;
  }
  &__dropdown {
    position: absolute;
    top: 100%;
    left: 1rem;
    width: 150px;
    background-color: $gray-secondary;
    border: 1px solid $black;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    height: auto;
  }
  &__dropdown label {
    display: block;
    margin-bottom: 0.5rem;    
  }
  &__dropdown input[type="checkbox"] {
    margin-right: 0.5rem;
  }
  &__dropdown span {
    font-size: 0.9rem;
  }
} 
</style>