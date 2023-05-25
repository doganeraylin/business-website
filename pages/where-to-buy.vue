<template>
  <div class="container">
    <Navbar/>
    <img class="container__img" src="/assets/findDealer/banner.png">
    <h1 class="container__title">find a dealer</h1>
    <div class="sortby_container">
        <div v-for="country in dealers" :key="country" class="options_container">
          <label>
            <input :value="country.country" v-model="filteredDealers" type="checkbox"/>
            <span >{{ country.country}}</span>
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

</style>