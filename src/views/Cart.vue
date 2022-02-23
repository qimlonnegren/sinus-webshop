<template>
  <div>
      <Header/>
      <div class="content-main">
          <h1 class="title">Varukorg</h1>
          <div class="bottom-border"></div>
          <div class="content">
              <div class="left-section">
                    <ul>
                        <li>
                            <div class="product-card">

                                <div class="left-span">
                                    <div class="product-img"></div>
                                </div>

                                <div class="right-span">
                                    <!-- <h1>{{product.title}}</h1>
                                    <p>{{product.size}}</p>
                                    <p>{{product.shortDesc}}</p>
                                    <p>{{product.id}}</p>
                                    <h2>{{product.price}}</h2> -->

                                    <h1>title</h1>
                                    <p>size</p>
                                    <p>shortDesc</p>
                                    <p>id</p>
                                    <h2>price</h2>

                                    <div class="right-span-bottom">
                                        <img 
                                        src="@/assets/trash.svg" 
                                        alt="Trash can icon"
                                        class="remove" 
                                        @click="$emit('remove')"
                                        >
                                        <img 
                                        class="icon" 
                                        src="@/assets/Heart-icon-black.svg" 
                                        width="30"
                                        alt="Heart icon"
                                        />    
                                    </div>
                                </div>
                                <div class="container">
                                    <div class="amount">
                                        <select name="amount" id="amount">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
              </div>
              <div class="right-section">
                  <h1>summary box</h1>
              </div>
          </div>
      </div>
      <Footer></Footer>
  </div>
</template>

<script>


import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  },
  props: {
        products: Object,
    },
  data (){
      return{
          
      }
  }
}
</script>


<style lang="scss" scoped>

.content {
    display: flex;
    justify-content: space-between;
}

.flex-top {
    display: flex;
    justify-content: space-between;

    h1 {
        font-family: 'Mulish', sans-serif;
        font-size: 1.7rem;
        color: green;
    }
}

.product-card {
    
}

.left-span {
    background-color: #e7e7e7;
    background-color: rgba(0,0,0,.08);
    
}

.right-span {
    text-align: left;
    padding-left: 10px;
    background-color: #e7e7e7;
    background-color: rgba(0,0,0,.04);
}

.container {
}

.amount{
    width: 80px;
    height: 50px;
    background-color: #e7e7e7;
    background-color: rgba(0,0,0,.04);
}

.right-span-bottom {
    display: flex;
    justify-content: space-between;
}

.title {
    text-align: left;
    color: #7A7A7A;
    font-family: 'Quicksand', sans-serif;
}

.bottom-border {
    border-bottom: 2px solid rgb(201, 199, 199);
}

li {
    list-style-type: none;
}

ul {
    padding: 0px;
}

p,
h1,
h2 {
    font-family: 'Mulish', sans-serif;
}

.remove {
    width: 20px;
}

</style>