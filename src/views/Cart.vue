<template>
  <div class="background">
      <Header/>
      <div class="main-content">
          <h1 class="title">Varukorg</h1>
          <div class="bottom-border-one"></div>
          <div class="grid-content">
            <div class="product-list">
                <ul>
                    <li v-for="product in cart" :key="product.id">
                        <div class="product-card">
                            <div class="left-span">
                                <div class="product-img" :src="'http://localhost:5000/images/' + product.imgFile"></div>
                            </div>

                            <div class="right-span">
                                <h1>{{product.title}}</h1>
                                <h2>{{product.shortDesc}}</h2>
                                <p>{{product.category}}</p>
                                <h3>{{product.price}}</h3>

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
            <div class="summary">
                <div class="section-one">
                    <h1>Discounts</h1>
                    <h1>activate code</h1>
                </div>

                <div class="bottom-border-two"></div>

                <div class="section-two">
                    <h1>Order value</h1>
                    <p>{{value}}</p>
                </div>

                <div class="section-three">
                    <h1>Estimated delivery</h1>
                    <p>{{delivery}}</p>
                </div>

                <div class="bottom-border-three"></div>

                <div class="section-four">
                    <h1>Sub total</h1>
                    <p>{{total}}</p>
                </div>
                <div class="bottom-border-four"></div>

                <div class="section-five">

                    <router-link to="/Checkout"><button>Checkout</button></router-link>
                    <p>Happy shopping!</p>
                    <div class="icon-section">
                        <img class="klarna" src="@/assets/checkout-icons/klarna-logo.svg" alt="klarna">
                        <img class="paypal" src="@/assets/checkout-icons/paypal-logo.svg" alt="paypal">
                        <img class="visa" src="@/assets/checkout-icons/Visa-logo.svg" alt="visa">
                        <img class="mastercard" src="@/assets/checkout-icons/mastercard-logo.svg" alt="mastercard">
                    </div>
                </div>
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
  data(){
      return {
          value: 200,
          delivery: 59,
          total: 259
      }
  },
  computed: {
      cart(){
      return this.$store.getters.cart
    },
  },
}
</script>


<style lang="scss" scoped>

.background {
    background-image: linear-gradient(rgb(243, 237, 238), rgb(209, 183, 186));
}

.main-content{
    margin-left: 20px;
    margin-right: 20px;
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

.grid-content{
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 5px;
}

.product-list{
    grid-row: 1 / 3;
    grid-column: 1 / 5;
}

.summary {
    background-color: #dbd9d9;
    grid-row: 1 / 4;
    grid-column: 6 / 10;
}

.product-card{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
}

.left-span {
    background-color: #ffffff;
    background-color: rgba(0,0,0,.08);
    grid-row: 1 / 3;
    grid-column: 1 / 3;
}

.right-span {
   
    text-align: left;
    padding-left: 10px;
    margin-left: 10px;
    background-color: #e7e7e7;
    background-color: rgba(0,0,0,.04);
    grid-row: 1 / 3;
    grid-column: 3 / 5;
}

.container {
    grid-row: 1 / 3;
    grid-column: 5 / 6;
}

.amount {
    background-color: #e7e7e7;
    background-color: rgba(0,0,0,.04);
    width: 60px;
    height: 60px;
    margin-top: 290px;
}

select {
    border: none;
    width: 50px;
    height: 40px;
    margin-top: 10px;
    background-color: #b8b7b7;
    cursor: pointer;
    padding: 5px;
    font-family: 'Mulish', sans-serif;
}

.right-span-bottom {
    display: flex;
    justify-content: space-between;
    padding-right: 10px;
    padding-top: 125px;   
}

.title {
    text-align: left;
    color: #7A7A7A;
    font-family: 'Quicksand', sans-serif;
}

.bottom-border-one {
    border-bottom: 2px solid rgb(182, 182, 182);
    margin-bottom: 20px;
}

.bottom-border-two {
    border-bottom: 2px solid rgb(175, 174, 174);
    margin: 10px 30px 10px 30px;
    border-radius: 3px;
}

.bottom-border-three {
    border-bottom: 4px solid rgb(155, 153, 153);
    margin: 20px 30px;
    border-radius: 5px;
}

.bottom-border-four {
    border-bottom: 2px solid rgb(219, 216, 216);
    margin: 20px 70px;
    border-radius: 5px;
}

.section-one {
    display: flex;
    justify-content: space-between;
    padding-left: 30px;
    padding-right: 30px;
    margin-top: 20px;
}

.section-two {
    display: flex;
    justify-content: space-between;
    padding-left: 30px;
    padding-right: 30px;
}

.section-three {
    display: flex;
    justify-content: space-between;
    padding-left: 30px;
    padding-right: 30px;
}

.section-four {
    display: flex;
    justify-content: space-between;
    padding-left: 30px;
    padding-right: 30px;

    p{
        font-weight: 700;
        font-size: 1.5rem;
    }
}

.section-five{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .klarna{
        width: 40px;
    }
    .paypal{
        width: 30px;
    }
    .visa{
        width: 55px;
    }
    .mastercard{
        width: 45px;
    }

    p {
        padding-bottom: 30px;
    }

    button {
        background-image: linear-gradient(rgb(147, 228, 167), rgb(39, 126, 78));
        color: white;
        font-family: 'Quicksand', sans-serif;
        font-size: 1.8rem;
        border: none;
        border-radius: 50px;
        width: 240px;
        height: 50px;
        margin: 30px;
        cursor: pointer;
    }
} 

.icon-section{
    width: 400px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-around;
}

li {
    list-style-type: none;
    margin-bottom: 10px;
}

ul {
    padding: 0px;
    margin: 0px;
}

h1 {
    font-size: 1.5rem;
}

h2 {
    font-size: 1rem;
    font-weight: 400;
}

p,
h1,
h2,
h3 {
    font-family: 'Mulish', sans-serif;
}

.remove {
    width: 20px;
    cursor: pointer;
}

.icon{
    cursor: pointer;
    margin-right: 10px;
}

</style>