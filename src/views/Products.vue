<template>
  <div>
    <Hero />
    <h1>All Products</h1>
    <section>
      <router-link
        class="link"
        :to="'/product/' + product.id"
        v-for="product in items"
        :key="product.id"
      >
        <article>
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
          <img
            :src="'http://localhost:5000/images/' + product.imgFile"
            :alt="product.shortDesc"
          />
          <span>
            <i
              v-if="product.specialEdition"
              :key="product.specialEdition"
              class="fa-solid fa-star"
              title="Special edition item!"
            ></i>
          </span>
          <p>{{ product.title }}</p>
          <p>{{ product.shortDesc }}</p>
          <p>{{ product.category }}</p>
          <p>{{ product.price }} £</p>
          <button @click="addToCart(product)">Buy</button>
        </article>
      </router-link>
    </section>
    <section>
      <i @click="previousPage()" class="fa-solid fa-angle-left"></i>
      <p class="page-text">{{ currentPage }}/{{ maxPage }}</p>
      <i @click="nextPage()" class="fa-solid fa-angle-right"></i>
    </section>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";

export default {
  name: "Products",
  components: {
    Hero,
    // Wishlist
  },

  created() {
    this.$store.dispatch("fetchItems", {page: this.currentPage});
  },

  computed: {
    items() {
      return this.$store.state.items;
    },
    cart() {
      return this.$store.state.cart;
    },
  },

  data() {
    return {
      currentPage: 1,
      minPage: 1,
      maxPage: 5,
    };
  },

  methods: {
    addToCart(product) {
      this.$store.dispatch("addToCart", product);
      console.log("addToCart", product);
    },
    previousPage() {
      if (this.currentPage > this.minPage) {
        this.currentPage--;
        this.$store.dispatch("fetchItems", {page: this.currentPage});
      }
    },
    nextPage() {
      if (this.currentPage < this.maxPage) {
        this.currentPage++;
        this.$store.dispatch("fetchItems", {page: this.currentPage});
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Mulish&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");

section {
  width: 70%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: auto auto 5rem auto;
  color: black;
}
h1 {
  width: 100%;
  color: black;
  font-family: "Quicksand", sans-serif;
}
a {
  text-decoration: none;
  color: black;
}
article {
  height: 360px;
  width: 270px;
  border: solid 1px rgba($color: #4b4b4b, $alpha: 1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: "Mulish", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0.9rem;
  justify-content: flex-end;
  position: relative;
  margin: 1rem 0.5rem 1rem 0.5rem;
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
  margin: 2.2rem 0 0.2rem 0;
  object-fit: scale-down;
}
p {
  height: 1rem;
  margin: 0.2rem;
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
  margin-top: 0.5rem;
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
