<template>
  <div>
    <Header />
    <section>
      <img src="../assets/Heart-icon.svg" alt="Product image" />
      <i v-if="product.favorite" :key="product.favorite" title="Added to wishlist!" class="fa-solid fa-heart"></i>
      <i v-else title="Click to add to wishlist" class="fa-regular fa-heart"></i>

      <i v-if="product.specialEdition" :key="product.specialEdition" class="fa-solid fa-star" title="Special edition item!"></i>
      <i v-else :key="product.specialEdition" class="fa-regular fa-star" title="Not special edition"></i>
      <span>
        <h1>{{product.title}}</h1>
        <p>{{product.longDesc}}</p>
        <p>{{product.price}} £</p>
        <button>Choose Size</button>
        <button>Buy</button>
      </span>
    </section>
    <section>
        <h2>You might also like...</h2>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Product",
  components: {
    Header,
    Footer,
  },
  data() { return {
      product:
        {
          title: "Title",
          specialEdition: "False",
          price: "123",
          category: "Skateboards",
          longDesc:
            "Smith grind bail fastplant nose-bump Chris Haslam hard flip nose grab.",
          imgFile: "sinus-cap-blue.png",
          favorite: "false",
        },
    };
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mulish&display=swap');
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");

section {
  width: 75%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: auto auto 5rem auto;
  background-color: rgb(199, 229, 255);
  margin: 3rem auto 3rem auto;
  position: relative;
}
img{
  width: 20rem;
  height: 21rem;
  background-color: #b45a5a;
}
span{
    text-align: left;
}
h1{
    font-family: 'Quicksand', sans-serif;
    width: 30rem;
    margin: 0;
    top: 0;
}
h2{
  font-family: 'Quicksand', sans-serif;
}
p {
  color: black;
  width: 30rem;
  font-family: 'Mulish', sans-serif;
  margin: 4rem 0 0 0;
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
.fa-star{
  color: rgb(245, 245, 19);
  font-size: x-large;
  position: absolute;
  top: 15px;
  left: 15px;
}
button{
  width: 10rem;
  height: 2.5rem;
  font-size: large;
  border: 1px solid #b45a5a;
  border-radius: 20px;
  font-family: 'Mulish', sans-serif;
  font-weight: bold;
  color: white;
  background: linear-gradient(#e78b8b, #b35a5a);
  letter-spacing: 2px;
  margin: 3rem 2rem 0 2rem;
  box-shadow: 0px 4px 4px #888888;
  cursor: pointer;
	&:hover{
		background: linear-gradient(#d37171, #7a3333);
	}
	&:active{
		background: linear-gradient(#e78b8b, #b35a5a);
	}
}
</style>