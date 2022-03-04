<template>
  <div>
    <!-- <Header /> -->
    <section class="profileContainer">
      <article class="profileSection">
        <h2 class="header">Account info</h2>
        <div class="accountInfoContainer">
          <p class="accountInfo">{{ profileData.name }}</p>
          <p class="accountInfo">{{ profileData.email }}</p>
          <p class="accountInfo">{{ profileData.address.street }}</p>
          <div class="accountInfoRow">
            <p class="accountInfo">{{ profileData.address.zip }}</p>
            <p class="accountInfo">{{ profileData.address.city }}</p>
          </div>
        </div>
      </article>
      <article class="profileSection">
        <h2 class="header">Orders</h2>
        <ul class="orderList">
          <li class="orderItem" v-for="item in orders" :key="item.id">
            <p class="orderInfo">ID: {{ item.id }}</p>
            <p class="orderInfo">Price: {{ calculateTotalOrderPrice(item.items) }}</p>
            <p class="orderInfo">Status: {{ getOrderStatus(item.status) }}</p>
          </li>
        </ul>
      </article>
    </section>
    <!-- <Footer /> -->
  </div>
</template>

<script>
// import Footer from "@/components/Footer.vue";
// import Header from "@/components/Header.vue";
import * as API from "../api/index";

export default {
  components: {
    // Footer,
    // Header,
  },
  data() {
    return {
      profileData: this.$store.state.userModule.userData,
      orders: [],
    };
  },
  methods: {
    calculateTotalOrderPrice(products) {
      let totalPrice = 0;
      products.map((product) => {
        totalPrice += product.price;
      });
      return totalPrice;
    },
    getOrderStatus(status) {
      switch (status) {
        case "inProcess":
          return "In process";
        case "canceled":
          return "Cancelled";
        case "shipped":
          return "Shipped";
      }
    },
  },
  computed: {},
  created: async function () {
    const { data } = await API.fetchOrders(this.$store.state.userModule.token);
    this.orders = data;
  },
};
</script>

<style>
.profileContainer {
  min-height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.profileSection {
  display: flex;
  flex-direction: column;
  width: 500px;
  /* background-color: pink; */
  margin-top: 5vh;
}

.header {
  font-size: 36px;
  width: max-content;
}

.accountInfoContainer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-top: 20px;
}

.accountInfo {
  font-size: 20px;
}

.accountInfoRow {
  display: flex;
  flex-direction: row;
  gap: 15px;
}

.orderList {
  padding: 0;
  margin-top: 10px;
}

.orderItem {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 10px;
  padding-top: 10px;
}

.orderInfo {
  font-size: 20px;
}
</style>
