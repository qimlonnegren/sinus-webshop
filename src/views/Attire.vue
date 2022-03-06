<template>
  <div class="clothes-view">
    <h1>Attire</h1>
    <div class="clothes-list">
      <div class="list" v-for="product in products" :key="product.id">
        <SingleProduct :product="product" />
      </div>
    </div>
    <span>
      <i @click="previousPage()" class="fa-solid fa-angle-left"></i>
      <p class="page-text">{{ currentPage }}/{{ maxPage }}</p>
      <i @click="nextPage()" class="fa-solid fa-angle-right"></i>
    </span>
  </div>
</template>

<script>
import SingleProduct from "@/components/SingleProduct.vue";

export default {
  components: {
    SingleProduct,
  },
  created() {
    this.$store.dispatch("getAttireCategory", { page: this.currentPage });
  },
  computed: {
    products() {
      return this.$store.state.attire;
    },
  },
  data() {
    return {
      currentPage: 1,
      minPage: 1,
      maxPage: 2,
    };
  },
  methods: {
    previousPage() {
      if (this.currentPage > this.minPage) {
        this.currentPage--;
        this.$store.dispatch("getAttireCategory", {
          page: this.currentPage,
        });
      }
    },
    nextPage() {
      if (this.currentPage < this.maxPage) {
        this.currentPage++;
        this.$store.dispatch("getAttireCategory", {
          page: this.currentPage,
        });
      }
    },
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
.fa-circle-arrow-left,
.fa-circle-arrow-right {
  font-size: xx-large;
}
.fa-angle-left,
.fa-angle-right {
  color: #d37171;
  font-size: 50px;
  &:hover {
    color: #7a3333;
  }
  &:active {
    color: #ffb0b0;
  }
}
span {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}
span p {
  font-size: x-large;
  padding: 1rem;
}
</style>
