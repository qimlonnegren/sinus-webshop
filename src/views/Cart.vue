<template>
  <div>
      <Header/>
      <div class="content">
          <h1 class="title">Varukorg</h1>
          <div class="bottom-border"></div>
          <ul>
                <li>
                    <div class="product-card">
                        <div class="left-span">
                            <div class="product-img"></div>
                        </div>

                        <div class="right-span">
                            <h1>{{product.title}}</h1>
                            <p>{{product.size}}</p>
                            <p>{{product.shortDesc}}</p>
                            <p>{{product.id}}</p>
                            <h2>{{product.price}}</h2>

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
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    grid-gap: 5px;
}

.left-span {
    background-color: #e7e7e7;
    background-color: rgba(0,0,0,.08);
    grid-row: 1 / 3;
    grid-column: 1 / 2;
}

.right-span {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    text-align: left;
    padding-left: 10px;
    background-color: #e7e7e7;
    background-color: rgba(0,0,0,.04);
}

.container {
    grid-row: 1 / 2;
    grid-column: 3 / 4;
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