<template>
  <div class="home">

    
    <!-- <Hero/> -->
    
    <h1> Skateboards</h1>
      <section>
        <article v-for="item of categories" :key="item.id">
          <img :src="item.imgFile" :alt="item.shortDesc">
          <p>{{item.title}}</p>
          <p>{{item.category}}</p>
          <p>{{item.shortDesc}}</p>
          <p>{{item.price}}</p>

          <button>Buy</button>
        </article>
        
      </section>
      
  

  </div>
</template>

<script>



// import Hero from '@/components/Hero.vue'



export default {
  name: 'Home',
  components: {

   
    // Hero,
   

  },
  mounted(){
    this.$store.dispatch('fetchItems')
  },
  computed:{
    
    categories(){
      return this.$store.getters.getItemsByCategory('skateboard')
    }
  }
}


  

</script>

<style lang="scss" scoped>

.wrapper {
  display: flex;
  justify-content: flex-end;
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
img{
  width: 140px;
  height: 170px;
  background-color: #b45a5a;
}
p{
  height: 1rem;
  margin: 0.2rem;
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
</style>