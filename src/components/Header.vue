<template>
<div class="wrapper">
    
    <img src="@/assets/Sinus-Logo.svg"/>
    <nav>
        
        <section class="nav-top">
            <router-link v-if="!isOpen" to="/"> Home </router-link>
            <router-link v-if="!isOpen" to="/products"> Products </router-link>
            <router-link v-if="!isOpen" to="/contact"> Contact </router-link>

            <img class="icon" src="@/assets/Search-icon.svg" @click="isOpen =!isOpen"/>
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
            <img class="icon" src="@/assets/Profile-icon.svg" />
            <router-link class="link" to="/Cart"><img class="icon" src="@/assets/Bag-icon.svg"/></router-link>
        
        </section>
        
        <section class="nav-bottom">
           <router-link to="/Attire">Attire</router-link>
           <router-link to="/Skateboards">Skateboards</router-link>
           <router-link to="/Accessories">Accessories</router-link>
        </section>
    </nav>
     <SearchField v-if="isOpen"/>
 </div>
</template>


<script>
import Wishlist from '../components/Wishlist.vue'
import SearchField from '@/components/SearchField.vue'


export default {
    name: 'Header',
    components: {
        SearchField,
        Wishlist

  },

  data(){
      return{
         isOpen: false,
         showList: false
    }    
  }
}

</script>

<style lang="scss" scoped>

.wrapper{
display: flex;
justify-content: flex-end;
flex-direction: row;
background:#333333;
color: #FFFFFF;
height: 138px;
width: 100%;

}

img{
    margin: 1rem;
    display: flex;

}


nav{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 70px;

    .nav-top{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        }
    .nav-bottom{
        display: flex;
        justify-content: center;
        background-image: linear-gradient(to left, black, #333333);
      
    }


    .nav-bottom a{
      
        margin: 1rem 4rem;
    }

   a{ 
    text-decoration: none;
    // margin: 1rem 2rem;
    color: #FFFFFF;
    font-size: 2rem;
    font-weight: 100;
    margin: 0rem 3rem;
    }
    
    .icons{
        display: flex;
        justify-content: flex-end;
        
    }

   .icon{
       width: 25px;
       margin: 1.4rem 1.5rem;
       display: flex;
       cursor: pointer;
   }
   .link{
       margin: 0rem;
   }
   
}




</style>
