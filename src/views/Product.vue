<template>
  <div>
    <section>
      <article v-if="product">
        <img :src="'http://localhost:5000/images/' + product.imgFile" :alt="product.shortDesc" />
        <i v-if="product.favorite" :key="product.favorite" title="Added to wishlist!" class="fa-solid fa-heart"></i>
        <i v-else title="Click to add to wishlist" class="fa-regular fa-heart"></i>
        <i v-if="product.specialEdition" :key="product.specialEdition" class="fa-solid fa-star" title="Special edition item!"></i>
        <span>
            <h1>{{product.title}}</h1>
            <p>{{product.longDesc}}</p>
            <p>{{product.price}} £</p>
            <button @click="addToCart(product)">Buy</button>
        </span>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: "Product",
  components: {
  },
  computed: {
      items() {
      return this.$store.state.items;
    },
      product(){
          return this.$store.state.items.find(product => product.id == this.$route.params.productId)
    },
    cart(){
      return this.$store.state.cart;
    },
  },
  methods:{
    addToCart(product){
      this.$store.dispatch('addToCart', product)
      console.log('addToCart',product)
    }
  },
};
</script>

<style lang="scss" scoped>

section {
  width: 100%;
  height: auto;
  display: flex;
  margin: auto;
}
article{
  width: 75%;
  height: auto;
  display: flex;
  align-items: center;
  border: solid 1px #dadada;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: auto auto 5rem auto;
  margin: 3rem auto 3rem auto;
  position: relative;
}
img{
  width: 20rem;
  height: 20.5rem;
  object-fit: scale-down;
}
span{
    text-align: left;
}
h1{
    font-family: 'Quicksand', sans-serif;
    font-size: xx-large;
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
  font-size: xx-large;
  top: 15px;
  right: 15px;
}
.fa-solid{
  color: #B84040;
}
.fa-star{
  color: rgb(245, 245, 19);
  font-size: xx-large;
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
  margin: 3rem 0 0 10rem;
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