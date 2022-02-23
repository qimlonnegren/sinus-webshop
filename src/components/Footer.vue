<template>
  <div class="container">
      <div class="nav section">
        <h1>Help</h1>
        <h2><router-link class="link" to="/products">Products</router-link></h2>
        <h2>About Us</h2>
        <h2>Contact</h2>

        <!--
        <h2> <router-link class="link" to="/">About Us</router-link></h2>
        <h2><router-link class="link" to="/">Contact</router-link></h2> -->
      </div>
      <div class="social-icons section">
          <h1>Social media</h1>
          <div class="icons">
              <a href="https://www.facebook.com/"><img src="../assets/logo-facebook.svg" alt="logo"></a>
              <a href="https://www.youtube.com/"><img src="../assets/logo-youtube.svg" alt="logo"></a>
              <a href="https://www.instagram.com/"> <img src="../assets/logo-instagram.svg" alt="logo"></a>
              <a href="https://twitter.com/"> <img src="../assets/logo-twitter.svg" alt="logo"></a>
          </div>
      </div>
      <div class="info section">
          <h1>Location</h1>
          <p>Drottninggatan 01</p>
          <p>111 11 Stockholm</p>
      </div>
  </div>
</template>
<script>
export default {
    name: 'Footer',
}
</script>

<style lang="scss" scoped>

.container{
    width: 100%;
    height: 320px;
    background-color: #000;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    color: white;
    margin: 0px;
    padding: 0px;

    img{
        width: 32px;
    }

    h1{
        font-family: 'Quicksand', sans-serif;
        font-size: 30px;
    }

    p, 
    h2{
        font-family: 'Mulish', sans-serif;
        font-weight: normal;
        font-size: 16px;
        margin-bottom: 10px;
        margin-top: 0px;

        .link{
        color: white;
        text-decoration: none;
    }
    }

    .section{
    margin-top: 50px;
    }


}

.nav{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.info{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.icons{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}



@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mulish&display=swap');
</style>