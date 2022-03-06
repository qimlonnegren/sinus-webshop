import Vue from "vue";
import VueRouter from "vue-router";
import Profile from "../views/Profile.vue";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import Product from "../views/Product.vue";
import Wishlist from "../components/Wishlist.vue";
import Cart from "../views/Cart.vue";
import Checkout from "../views/Checkout.vue";
import Attire from "../views/Attire.vue";
import Skateboards from "../views/Skateboards.vue";
import Accessories from "../views/Accessories.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/products",
        name: "Products",
        component: Products,
    },
    {
        path: "/product/:productId",
        name: "Product",
        component: Product,
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
    },
    {
        path: "/Wishlist",
        name: "Wishlist",
        component: Wishlist,
    },
    {
        path: "/Cart",
        name: "Cart",
        component: Cart,
    },
    {
        path: "/Checkout",
        name: "Checkout",
        component: Checkout,
    },
    {
        path: "/Attire",
        name: "Attire",
        component: Attire,
    },
    {
        path: "/Skateboards",
        name: "Skateboards",
        component: Skateboards,
    },
    {
        path: "/Accessories",
        name: "Accessories",
        component: Accessories,
    },
];


const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;