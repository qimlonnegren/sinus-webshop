<template>
  <div>
    <Header />
    <section>
      <p>Hello</p>
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
  data() {
    return {};
  },
};
</script>

<style>
section {
  background-color: grey;
  width: 100%;
  height: 400px;
}
</style>