<template>
<div class="container">
    <img class="container__img" src="/assets/findDealer/banner.png">
    <h1 class="container__title">find a dealer</h1>
     <Sortby text="30 dealers"
    />
    <div class="dealer_list_container">
        <div class="single_dealer" v-for="dealer in dealers" :key="dealer.id"> 
            <h2 class="single_dealer__country">{{dealer.country}}</h2>
            <div class="dealer_details_container">
                <div class="dealer_details_container__content" v-for="info in dealer.dealer" :key="info.company">
                    <h3>{{info.company}}</h3>
                    <h3>{{info.address}}</h3>
                    <h3>{{info.phone}}</h3>
                    <h3>{{info.website}}</h3>
                </div>
            </div>
        
        </div>
    </div>
</div>

</template>

<script>
export default {
  props: {
    dealers: {
      type: Array,
      required: true
    }
  }
}
</script>


<style lang="scss" scoped>
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

.dealer_list_container {
    display: flex;
    flex-direction: column;
    max-width: 700px;
    margin: 0 auto;
}

.single_dealer {
    max-width: 350px;
    margin: 0 1.5rem;
    &__country {
        font-size: 1.5rem;
        font-weight: lighter;
        border-bottom: 1px solid ; 
    }
}

.dealer_details_container {
    display: flex;
    flex-direction:  column;
    h3 {
        font-weight: lighter;
        font-size: 0.8rem;
    }

    &__content {
        margin: 0.5rem 3rem 0.5rem 0;
    }


}

@media (min-width: 768px) {
    .dealer_details_container {
        flex-wrap: wrap;
        flex-direction: row;

    }
    .single_dealer {
        max-width: 500px;

    }
}

</style>