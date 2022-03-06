<template>
  <div>
    <section>
      <article v-if="product">
        <img
          :src="'http://localhost:5000/images/' + product.imgFile"
          :alt="product.shortDesc"
        />
        <i
          v-if="product.favorite"
          :key="product.favorite"
          title="Added to wishlist!"
          class="fa-solid fa-heart"
        ></i>
        <i
          v-else
          title="Click to add to wishlist"
          class="fa-regular fa-heart"
        ></i>
        <i
          v-if="product.specialEdition"
          :key="product.specialEdition"
          class="fa-solid fa-star"
          title="Special edition item!"
        ></i>
        <span>
          <h1>{{ product.title }}</h1>
          <p class="longDesc">{{ product.longDesc }}</p>
          <p>{{ product.price }} £</p>
          <button @click="addToCart(product)">Buy</button>
        </span>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: ["product"],
  components: {},
  computed: {
    Product() {
      return this.$store.state.singleProduct;
    },
    // Product() {
    //   return this.$store.state.items.find(
    //     (product) => product.id == this.$route.params.productId
    //   );
    // },
    cart() {
      return this.$store.state.cart;
    },
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch("addToCart", product);
      console.log("addToCart", product);
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Mulish&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
section {
  width: 80%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 1rem 1rem 1rem auto;
  color: black;
}
h1 {
  width: 100%;
  color: black;
  font-family: "Quicksand", sans-serif;
  margin: 1rem 0 0.5rem 0;
}
a {
  text-decoration: none;
  color: black;
}
article {
  height: 460px;
  width: 320px;
  border: solid 1px rgba($color: #4b4b4b, $alpha: 1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: "Mulish", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0.9rem;
  justify-content: flex-end;
  position: relative;
  margin: 1rem 0.5rem 0.5rem 0.5rem;
}
.fa-heart {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: x-large;
}
.fa-solid {
  color: #b84040;
}
article img {
  width: 160px;
  height: 180px;
  margin: 0;
  object-fit: scale-down;
}
p {
  height: 1rem;
  margin: 0.2rem;
}
.longDesc {
  margin-bottom: 70px;
}
button {
  width: 11rem;
  height: 2.5rem;
  font-size: large;
  border: 1px solid #b45a5a;
  border-radius: 20px;
  font-family: "Mulish", sans-serif;
  font-weight: bold;
  color: white;
  background: linear-gradient(#e78b8b, #b35a5a);
  letter-spacing: 2px;
  margin-top: 0.6rem;
  box-shadow: 0px 4px 4px #888888;
  cursor: pointer;
  &:hover {
    background: linear-gradient(#d37171, #7a3333);
  }
  &:active {
    background: linear-gradient(#ffb0b0, #b36f6f);
  }
}
.fa-star {
  color: rgb(245, 245, 19);
  font-size: x-large;
  position: absolute;
  top: 10px;
  left: 10px;
}
.fa-circle-arrow-left,
.fa-circle-arrow-right {
  font-size: xx-large;
}
.fa-angle-left,
.fa-angle-right {
  font-size: 50px;
  &:hover {
    color: #7a3333;
  }
  &:active {
    color: #ffb0b0;
  }
}
.page-text {
  font-size: x-large;
  height: auto;
}
</style>
