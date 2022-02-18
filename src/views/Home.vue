<template>
  <div class="home">

    
    <Header/>

    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Footer></Footer>

  </div>
</template>

<script>


import Header from '@/components/Header.vue'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {

    Header,
    HelloWorld,
    Footer

  }
}
</script>
