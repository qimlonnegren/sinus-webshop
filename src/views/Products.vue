<template>
  <div>
    <!-- HeroOffer -->
    <h1>All Products</h1>
    <section>
      <article v-for="product in products" :key="product.name" >
        <i class="fa-solid fa-heart"></i>
        <p>{{product.favorite}}</p>
        <p>product image</p>
        <p>{{product.name}}</p>
        <p>{{product.rating}}</p>
        <i class="fa-solid fa-star"></i>
        <p>{{product.category}}</p>
        <p>{{product.price}} £</p>
        <button>Buy</button>
      </article>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Products",
  components: {
    Header,
    Footer,
  },
  data() { return {
    products: [
          {
        name: "hej",
        rating: 1,
        category: "Skateboards",
        price: "364",
        favorite: false,
      },
      {
        name: "på",
        rating: 2,
        category: "Clothing",
        price: "1337",
        favorite: true,
      },
      {
        name: "dig",
        rating: 3,
        category: "Skateboards",
        price: "2021",
        favorite: false,
      },
    ]
  }}
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mulish&display=swap');
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");

.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
section {
  width: 70%;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 5rem;
  color: black;
}
h1 {
  width: 100%;
  color: black;
  font-family: 'Quicksand', sans-serif;
}
article{
  height: 360px;
  width: 250px;
  border: solid 1px rgba($color: #4b4b4b, $alpha: 1.0);
  font-family: 'Mulish', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1.2rem;
  justify-content: flex-end
}
p{
  height: 1rem;
  margin: 0.3rem;
}
button{
  width: 12rem;
  height: 2.5rem;
  font-size: large;
  border: 1px solid #b45a5a;
  border-radius: 20px;
  font-family: 'Mulish', sans-serif;
  font-weight: bold;
  color: white;
  background: linear-gradient(#e78b8b, #b35a5a);
  letter-spacing: 2px;
  margin-top: 0.8rem;
}
.fa-star{
  color: yellow;
}
</style>
