<template>
  <div class="modal" @click.self="$emit('list')">
      <div class="content">
          <p>Thank you for your order!
          <span>You will shortly recieve an</span>
          order confirmation email.</p>

          <p>Order no: xxxxxxxxxx</p>
          <img src="@/assets/tick.svg" alt="Tick mark">

          <button @click="$router.push('products')">Keep shopping!</button>

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
    width: 30%;
    background-image: linear-gradient(rgb(243, 152, 152), rgb(230, 230, 176));
    color: rgb(65, 65, 65);
    position: relative;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

p{
    font-family: 'Mulish', sans-serif;
    line-height: 1.4;

    span{
        display: block;
    }
}

img{
    width: 8%;
}

button {
    border: none;
    border-radius: 20px;
    height: 40px;
    width: 200px;
    background-image: linear-gradient(rgb(243, 152, 152), white);
    font-family: 'Quicksand', sans-serif;
    font-size: 1.3rem;
    margin: 20px;
    cursor: pointer;
}
</style>