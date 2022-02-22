<template>
<div class="wrapper">
    
    <img src="@/assets/Sinus-Logo.svg"/>
    <nav>
        <section class="nav-top">
            <router-link to="/"> Home </router-link>
            <router-link to="/products"> Products </router-link>
            <router-link to="/contact"> Contact </router-link>

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
            />
            <img class="icon" src="@/assets/Profile-icon.svg" />
            <img class="icon" src="@/assets/Bag-icon.svg" />
        
        </section>
        
        <section class="nav-bottom">
            <a>Attire</a>
            <a>Skateboards</a>
            <a>Sale</a>
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
        WishList

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
    width: 100%;
    height: 70px;

    .nav-top{
        display: flex;
        justify-content: space-evenly;
        }
    .nav-bottom{
        display: flex;
        background-image: linear-gradient(to left, black, #333333);
        
    
    }

    .nav-bottom a{
      
        margin: 1rem 2.5rem;
    }

   a{ 
    text-decoration: none;
    margin: 1rem;
    color: #FFFFFF;
    font-size: 2rem;
    font-weight: 100;
    }

    .icons{
        display: flex;
        justify-content: flex-end;
        
    }

   .icon{
       width: 25px;
       margin: 1rem;
       display: flex;
       cursor: pointer;
   }
   
}




</style>
