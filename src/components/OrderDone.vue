<template>
  <div class="modal">
      <div class="content">
          <p>Thank you for your order!
          <span>You will shortly recieve an</span>
          order confirmation email.</p>

          <p>Order no: xxxxxxxxxx</p>
          <img src="@/assets/tick.svg" alt="Tick mark">

          <button>Keep shopping!</button>

      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
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
</style>