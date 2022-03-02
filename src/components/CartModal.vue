<template>
  <div class="modal">
      <div class="content">
          <h1 class="title">Hello world</h1>
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
</style>