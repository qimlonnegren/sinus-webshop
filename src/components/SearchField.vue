<template>
       <input class="search-field"  placeholder="Search" >
     
  
</template>

<script>
export default {
    name: 'SearchField'
}

</script>

<style lang="scss">

       
    


.search-field{
    z-index: 3;
    position: absolute;
    height: 50px;
    border-radius: 48px;
    border: 0.5px solid lightgrey;
    width: 450px;
    padding-right: 40px;
    padding-left: 10px;
    margin: 8px;    
    transform: translateX(370px);

    
}


</style>