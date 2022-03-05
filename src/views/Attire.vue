<template>
  <div class="clothes-view">
    <h1>Attire</h1>
    <div class="clothes-list">
      <div class="list" v-for="product in products" :key="product.id">
        <SingleProduct :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import SingleProduct from "@/components/SingleProduct.vue";

export default {
  components: {
    SingleProduct,
  },
  computed: {
    products() {
      return this.$store.state.attire;
    },
  },
  created() {
    this.$store.dispatch("getAttireCategory");
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Mulish&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");

.clothes-view {
  width: 100%;
  height: auto;

  .clothes-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    list {
      margin: 0px;
    }
  }

  h1 {
    margin: 20px;
  }
}
</style>
