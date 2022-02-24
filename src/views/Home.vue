<template>
  <div class="home">

    
    <Header/>
    <Hero/>
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
