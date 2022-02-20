<template>
  <div class="modal" @click.self="$emit('list')">
      <div class="content">
          <div class="flex-top">
              <img 
              src="@/assets/left-arrow.svg" 
              alt="Arrow icon"
              class="back" 
              @click="$emit('back')"
              >
              <h1>Wish list</h1>
              <img 
              src="@/assets/shopping.svg" 
              alt="Arrow icon"
              class="cart" 
              @click="$emit('cart')"
              >
          </div>

          <div class="product-card">
              <div class="left-span">
                  <div class="product-img"></div>
              </div>
              <div class="right-span">
                  <h1>Product name</h1>
                  <p>Size</p>
                  <p>Art nr</p>

                  <div class="right-span-bottom">
                      <h2>Price</h2>
                      <img 
                      src="@/assets/trash.svg" 
                      alt="Trash can icon"
                      class="remove" 
                      @click="$emit('remove')"
                      >
                  </div>
              </div>
          </div>
          
          <!-- Elementen nedan ska in i en ul för att skapa en lista med v-for -->

          
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.8); 
}

.content {
    margin: 15% auto;
    padding: 20px;
    width: 40%;
    background: rgb(255, 255, 255);
    color: rgb(65, 65, 65);
    position: relative;
    border-radius: 10px;
}

.remove,
.back,
.cart {
    cursor: pointer;
}

.cart {
    width: 25px;
}

.back {
    width: 18px;
}

.remove {
    width: 25px;
}

.flex-top {
    display: flex;
    justify-content: space-between;

    h1 {
        font-family: 'Mulish', sans-serif;
        color: green;
    }
}

.product-card {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-gap: 5px;
}

.left-span {
    background-color: #e7e7e7;
    background-color: rgba(0,0,0,.1);
    grid-row: 1 / 3;
    grid-column: 1 / 2;
}

.right-span {
    grid-row: 1 / 2;
    grid-column: 2 / 4;
    text-align: left;
    padding-left: 10px;
}

.right-span-bottom {
    display: flex;
    justify-content: space-between;
}

p,
h1,
h2 {
    font-family: 'Mulish', sans-serif;
}

</style>