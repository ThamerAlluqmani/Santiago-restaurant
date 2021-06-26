import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Breakfast from "../views/Breakfast";
import Lunch from "../views/Lunch";
import Dinner from "../views/Dinner";
import Drinks from "../views/Drinks";
import Disserts from "../views/Disserts";
import Offers from "../views/Offers";
import Spicials from "../views/Spicials";
import HealthyBreakfast from "../views/HealthyBreakfast";
import FoodInfo from "../views/FoodInfo";
import ViewOrder from "../views/ViewOrder";
import Login from "../views/Login";
import Register from "../views/Register";
import Checkout from "../views/Checkout";
import Order from "../views/Order";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/Breakfast",
    name: "Breakfast",
    component: Breakfast,
  },
  {
    path: "/lunch",
    name: "Lunch",
    component: Lunch,
  },
  {
    path: "/Dinner",
    name: "Dinner",
    component: Dinner,
  },
  {
    path: "/Drinks",
    name: "Drinks",
    component: Drinks,
  },
  {
    path: "/Disserts",
    name: "Disserts",
    component: Disserts,
  },
  {
    path: "/Offers",
    name: "Offers",
    component: Offers,
  },
  {
    path: "/Spicials",
    name: "Spicials",
    component: Spicials,
  },
  {
    path: "/HealthyBreakfast",
    name: "HealthyBreakfast",
    component: HealthyBreakfast,
  },

  {
    path: "/food-info",
    name: "FoodInfo",
    component: FoodInfo,
  },
  {
    path: "/ViewOrder",
    name: "ViewOrder",
    component: ViewOrder,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
  },
  {
    path: "/Checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/Order",
    name: "Order",
    component: Order,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
