<template>
<div class="wrapper">
    
    <img src="@/assets/Sinus-Logo.svg"/>
    <nav>
        <router-link to="/"> Home </router-link>
        <router-link to="/products"> Products </router-link>
        <router-link to="/contact"> Contact </router-link>

        <img class="icon" src="@/assets/Search-icon.svg" width="30"/>

        <img 
        class="icon" 
        src="@/assets/Heart-icon.svg" 
        width="30"
        alt="Heart icon"
        @click="showList=true"
        />
        <Wishlist
        v-if="showList"
        @back="showList=false"
        @list="showList = false"
        />

        <img class="icon" src="@/assets/Profile-icon.svg" width="30"/>
        
        <router-link class="link" to="/Cart"><img class="icon" src="@/assets/Bag-icon.svg" width="30"/></router-link>
    </nav>
</div>
    
</template>


<script>

import Wishlist from '../components/Wishlist.vue'

export default {
    name: 'Header',
    components: {
        Wishlist
    },
    data(){
        return {
            showList: false
        }
    }
}

//  mutations: {
//         saveProductInCart(state, product){
//             const inCart = state.cart.find(cartItem => cartItem.id == product.id)
//             if(inCart){
//                 inCart.amount++
//             } else {
//                 state.cart.push({id: product.id, amount: 1})
//             }
//         },
        
//     },

//     actions: {
       
//         addToCart({commit}, product){
//             commit('saveProductInCart', product)
//         },
//     },


</script>

<style lang="scss">

.wrapper{
display: flex;
background:#333333;
color: #FFFFFF;
height: 160px;
}

img{
    margin: 1rem;
    display: flex;
    justify-content: right;

}


nav{
    display: flex;
    justify-content: space-evenly;

   a{ 
    text-decoration: none;
    margin: 1rem;
    color: #FFFFFF;
    font-size: 2rem;
    font-weight: 100;
    }

   .icon,
   .link{
       margin: 1rem;
       display: flex;
       cursor: pointer;
   }
}


</style>
