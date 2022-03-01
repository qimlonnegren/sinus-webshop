<template>
  <div class="home">
    <Header/>
    <Hero/>
    <section>
      <h1>For skaters, by skaters</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto minus sapiente hic
      placeat quis eaque tempore assumenda nemo, reprehenderit minima!</p>
    </section>
    <Footer></Footer>

  </div>
</template>

<script>


import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {

    Header,
    Hero,
    Footer

  }
}
</script>
<style lang="scss" scoped>
section{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
h1{
  margin: 3rem 0 2rem 0;
}
p{
  height: 5rem;
  width: 40rem;
}
</style>