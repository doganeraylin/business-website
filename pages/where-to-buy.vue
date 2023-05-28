<template>
  <div class="container">
    <Navbar/>
    <img class="container__img" src="/assets/findDealer/banner.png">
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


<script setup>
  const { data: dealers } = await useFetch('https://business-website-json.vercel.app/dealersList')
  const allDealers = ref([dealers])
  const filteredDealers = ref([])
  let isFilterOpen = ref(false)
  function toggleFilter  () {
    console.log("filter")
     isFilterOpen.value = !isFilterOpen.value
  }
</script>


<style lang="scss">
@import "@/assets/variables.scss";
@import "@/assets/main.scss";

.container {
  &__img {
  max-width: 100%;
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
    border: 1px solid black;
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