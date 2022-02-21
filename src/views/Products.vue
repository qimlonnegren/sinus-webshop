<template>
  <div>
    <!-- <Header/> -->
    <!-- HeroOffer -->
    <h1>All Products</h1>
    <section>
      <article v-for="product in products" :key="product.name" >
        <i v-if="product.favorite" :key="product.favorite" title="Added to wishlist!" class="fa-solid fa-heart"></i>
        <i v-else title="Click to add to wishlist" class="fa-regular fa-heart"></i>
        <!-- <p>{{product.favorite}}</p> -->
        <p>{{product.imgFile}}</p>
        <p>{{product.title}}</p>
        <!-- <p>{{product.specialEdition}}</p> -->
        <span>
          <i v-if="product.specialEdition" :key="product.specialEdition" class="fa-solid fa-star" title="Special edition item!"></i>
          <i v-else :key="product.specialEdition" class="fa-regular fa-star" title="Not special edition"></i>
        </span>
        <p>{{product.category}}</p>
        <p>{{product.shortDesc}}</p>
        <!-- <p>{{product.longDesc}}</p> -->
        <p>{{product.price}} £</p>
        <button>Buy</button>
      </article>
    </section>
    <i class="fa-solid fa-circle-arrow-left"></i>
    <i class="fa-solid fa-circle-arrow-right"></i>
    <!-- <i class="fa-regular fa-angle-left"></i> -->
    <!-- <i class="fa-regular fa-angle-right"></i> -->
    <p></p>
    <Footer></Footer>
  </div>
</template>

<script>
// import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Products",
  components: {
    // Header,
    Footer,
  },
  data() { return {
    products: [
      {
        title: "skate",
        size: "Large",
        specialEdition: false,
        price: "123",
        category: "Skateboards",
        shortDesc: "unisex",
        longDesc: "Smith grind bail fastplant nose-bump Chris Haslam hard flip nose grab.",
        imgFile: "sinus-cap-blue.png",
        favorite: true,
        id: 11111
      },
      {
        title: "board",
        size: "Medium",
        specialEdition: true,
        price: 123,
        category: "Skateboards",
        shortDesc: "unisex",
        longDesc: "Smith grind bail fastplant nose-bump Chris Haslam hard flip nose grab.",
        imgFile: "sinus-cap-blue.png",
        favorite: false,
        id: 11112
      },
      {
        title: "thing",
        size: "One size",
        specialEdition: false,
        price: 123,
        category: "Skateboards",
        shortDesc: "unisex",
        longDesc: "Smith grind bail fastplant nose-bump Chris Haslam hard flip nose grab.",
        imgFile: "sinus-cap-blue.png",
        favorite: false,
        id: 11113
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
  font-family: 'Quicksand', sans-serif;
}
article{
  height: 320px;
  width: 230px;
  border: solid 1px rgba($color: #4b4b4b, $alpha: 1.0);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: 'Mulish', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1.2rem;
  justify-content: flex-end;
  position: relative;
  margin: 1rem 0 1rem 0;
}
.fa-heart{
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: x-large;
}
.fa-solid{
  color: #B84040;
}
p{
  height: 1rem;
  margin: 0.3rem;
}
button{
  width: 11rem;
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
  box-shadow: 0px 4px 4px #888888;
  cursor: pointer;
	&:hover{
		background: linear-gradient(#d37171, #7a3333);
	}
	&:active{
		background: linear-gradient(#e78b8b, #b35a5a);
	}
}
.fa-star{
  color: rgb(245, 245, 19);
  font-size: x-large;
  position: absolute;
  top: 15px;
  left: 15px;
}
.fa-circle-arrow-left,
.fa-circle-arrow-right{
  font-size: xx-large;
}
</style>