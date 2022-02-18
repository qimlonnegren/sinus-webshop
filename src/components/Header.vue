<template>
<div class="wrapper">
    
    <img src="@/assets/Sinus-Logo.svg"/>
    <nav>
    <router-link to="/"> Home </router-link>
    <router-link to="/products"> Products </router-link>
    <router-link to="/contact"> Contact </router-link>

    <img class="icon" src="@/assets/Search-icon.svg" width="30"/>
    <img class="icon" src="@/assets/Heart-icon.svg" width="30"/>
    <img class="icon" src="@/assets/Profile-icon.svg" width="30"/>
    <img class="icon" src="@/assets/Bag-icon.svg" width="30"/>




    </nav>
</div>
    
</template>


<script>
export default {
    name: 'Header'
}

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

   .icon{
       margin: 1rem;
       display: flex;
   }
}


</style>
