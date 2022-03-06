<template>
  <div class="accessories-view">
    <h1>Accessories</h1>
    <div class="accessories-list">
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
      return this.$store.state.accessories;
    },
  },
  created() {
    this.$store.dispatch("getAccessoriesCategory");
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Mulish&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");

.accessories-view {
  width: 100%;
  height: auto;
  margin: auto;

  .accessories-list {
    display: flex;
    flex-wrap: wrap;

    list {
      margin: auto;
    }
  }

  h1 {
    margin: 20px;
  }
}
</style>
