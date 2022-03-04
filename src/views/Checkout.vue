<template>
  <div>
    <!-- <Header /> -->
    <div class="checkoutContainer">
      <div class="checkoutSection">
        <div class="checkoutInputContainer">
          <h2 class="header">Delivery address</h2>
          <div class="inputContainer">
            <input type="text" placeholder="Name" v-model="customerInfo.name" />
            <input type="text" placeholder="Address line 1" v-model="customerInfo.address" />
            <input type="text" placeholder="Address line 2" />
            <div class="inputRow">
              <input type="text" placeholder="Zip" v-model="customerInfo.zip" />
              <input type="text" placeholder="City" v-model="customerInfo.city" />
            </div>
          </div>
        </div>
        <div class="checkoutInputContainer">
          <h2 class="header">Shipping</h2>
          <div class="inputContainer">
            <div class="shippingContainer">
              <div
                class="shippingOption"
                @click="selectShipping('postmord', 0)"
                v-bind:class="{ selected: this.shipping.company === 'postmord' }"
              >
                <p>PostMord</p>
                <p>FREE</p>
              </div>
              <div
                class="shippingOption"
                @click="selectShipping('bring', 69)"
                v-bind:class="{ selected: this.shipping.company === 'bring' }"
              >
                <p>Bring</p>
                <p>69 SEK</p>
              </div>
              <div
                class="shippingOption"
                @click="selectShipping('instabox', 49)"
                v-bind:class="{ selected: this.shipping.company === 'instabox' }"
              >
                <p>Instabox</p>
                <p>49 SEK</p>
              </div>
            </div>
          </div>
        </div>
        <div class="checkoutInputContainer">
          <h2 class="header">Payment</h2>
          <div class="paymentContainer">
            <img
              class="paymentIcon"
              src="@/assets/visa.svg"
              @click="selectCardbrand('visa')"
              v-bind:class="{ selected: this.cardBrand === 'visa' }"
            />
            <img
              class="paymentIcon"
              src="@/assets/mastercard.svg"
              @click="selectCardbrand('mastercard')"
              v-bind:class="{ selected: this.cardBrand === 'mastercard' }"
            />
          </div>
          <div class="inputContainer">
            <input type="text" placeholder="Card" />
            <div class="inputRow">
              <input type="text" placeholder="ccv" />
              <input type="text" placeholder="Date" />
            </div>
          </div>
        </div>
      </div>
      <div class="checkoutSection">
        <div class="cartContainer">
          <h2 class="header">Cart</h2>
          <ul class="cartList">
            <li v-for="product in CartData" :key="product.title" class="product">
              <img
                class="productImg"
                :src="'http://localhost:5000/images/' + product.imgFile"
                :alt="product.shortDesc"
              />
              <div class="productInfo">
                <p>{{ product.title }}</p>
                <p>{{ product.price }} SEK</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="orderContainer">
          <div class="checkoutRow">
            <p>Order value</p>
            <p>{{ calculateOrderValue }} SEK</p>
          </div>
          <div class="checkoutRow bottomBorder">
            <p>Delivery</p>
            <p>{{ shippingPrice }}</p>
          </div>
          <div class="checkoutRow">
            <p>Total</p>
            <p>{{ calculateTotalPrice }} SEK</p>
          </div>
          <div class="buttonContainer">
            <button @click="handlePostOrder" class="button greenButton">Complete Order</button>
            <button class="button greyButton">Cancel</button>
          </div>
        </div>
      </div>
    </div>
    <OrderDone v-show="orderDone" />
    <!-- <Footer /> -->
  </div>
</template>

<script>
// import Footer from "@/components/Footer.vue";
// import Header from "@/components/Header.vue";
import * as API from "../api/index";
import OrderDone from "@/components/OrderDone.vue";
export default {
  name: "Checkout",
  components: {
    // Footer,
    // Header,
    OrderDone,
  },
  data() {
    return {
      products: this.$store.state.cart,
      customerInfo: {
        name: "",
        address: "",
        address2: "",
        zip: "",
        city: "",
      },
      cardDetails: {
        cardNumber: "",
        cardCCV: "",
        cardDate: "",
      },
      shipping: {
        company: "",
        price: "",
      },
      cardBrand: "",
      orderDone: false,
    };
  },
  methods: {
    populateAddressInputs() {
      if (this.$store.state.userModule.token !== null) {
        this.customerInfo.name = this.$store.state.userModule.userData.name;
        this.customerInfo.address = this.$store.state.userModule.userData.address.street;
        this.customerInfo.zip = this.$store.state.userModule.userData.address.zip;
        this.customerInfo.city = this.$store.state.userModule.userData.address.city;
      }
    },
    selectShipping(shippingOption, shippingPrice) {
      this.shipping.company = shippingOption;
      this.shipping.price = shippingPrice;
    },
    selectCardbrand(cardBrand) {
      this.cardBrand = cardBrand;
    },
    async handlePostOrder() {
      const items = this.CartData.map((product) => product.id);
      console.log("items", items);
      if (this.$store.state.userModule.token) {
        const response = await API.postOrder(items, this.$store.state.userModule.token);
        if (response.status === 200) {
          this.orderDone = true;
        }
      } else {
        const response = await API.postOrderAnon(items, this.customerInfo);
        if (response.status === 200) {
          this.orderDone = true;
        }
      }
    },
  },
  computed: {
    CartData() {
      return this.$store.getters.cart;
    },
    cart() {
      return this.$store.state.cart;
    },
    calculateOrderValue() {
      let price = 0;
      this.CartData.forEach((product) => {
        price += product.price;
      });
      return price;
    },
    shippingPrice() {
      if (this.shipping.company === "") {
        return "";
      } else {
        return this.shipping.company === "postmord" ? "FREE" : this.shipping.price + " SEK";
      }
    },
    calculateTotalPrice() {
      let price = 0;
      this.CartData.forEach((product) => {
        price += product.price;
      });
      if (this.shipping.company !== "postmord") {
        price += this.shipping.price;
      }
      return price;
    },
  },
  mounted() {
    this.populateAddressInputs();
  },
};
</script>

<style>
.checkoutContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
}

.checkoutSection {
  display: flex;
  flex-direction: column;
  gap: 50px;
  min-width: 500px;
  height: 100vh;
  /* background-color: pink; */
  margin-top: 20px;
}

.checkoutInputContainer {
  display: flex;
  flex-direction: column;
}

.header {
  font-size: 30px;
  margin-bottom: 10px;
}

.inputContainer {
  display: flex;
  flex-direction: column;
  width: 350px;
  gap: 10px;
}

.inputRow {
  display: flex;
  flex-direction: row;
  width: 350px;
  gap: 10px;
}

input {
  height: 50px;
  width: 100%;
}

.shippingContainer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.shippingOption {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  border-radius: 15px;
  border: 3px solid transparent;
  font-size: 20px;
  cursor: pointer;
}

.paymentContainer {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 20px;
}

.paymentIcon {
  height: 70px;
  object-fit: contain;
  background-color: white;
  padding: 5px 5px 5px 5px;
  border-radius: 10px;
  margin: 0;
  border: 3px solid transparent;
  cursor: pointer;
}

/* .paymentIcon:not(:first-of-type) {
  padding: 5px;
} */

.cartList {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
}

.product {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  gap: 50px;
  padding-bottom: 10px;
}

.product:not(:last-of-type) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}

.productImg {
  height: 100px;
  width: 100px;
  margin: 0;
  background-color: white;
  object-fit: cover;
}

.productInfo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.orderContainer {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.checkoutRow {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.bottomBorder {
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  padding-bottom: 10px;
}

.buttonContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
}

.button {
  width: 200px;
  height: 50px;
  border-radius: 32px;
  border: none;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  font-size: 20px;
}

.greenButton {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.1) 100%), #0fa81f;
  color: white;
}

.greyButton {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3045) 0%, rgba(255, 255, 255, 0) 100%), #dbdbdb;
  color: black;
}

.selected {
  border: 3px solid green;
}
</style>
