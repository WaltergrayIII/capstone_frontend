import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import ProductsIndex from "../views/ProductsIndex.vue";
import ProductsNew from "../views/ProductsNew.vue";
import ProductsShow from "../views/ProductsShow.vue";
import ProductsEdit from "../views/ProductsEdit.vue";
import SwapiIndex from "../views/SwapiIndex.vue";
import SwapiShow from "../views/SwapiShow.vue";
import MovieLink from "../views/MovieLink.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/products", name: "products-index", component: ProductsIndex },
  { path: "/products/new", name: "products-new", component: ProductsNew },
  {
    path: "/products/:id",
    name: "products-show",
    component: ProductsShow,
  },
  {
    path: "/products/:id/edit",
    name: "products-edit",
    component: ProductsEdit,
  },
  {
    path: "/swapi",
    name: "swapi-index",
    component: SwapiIndex,
  },
  {
    path: "/swapishow/:id",
    name: "swapi-show",
    component: SwapiShow,
  },
  {
    path: "/MovieLink",
    name: "movie-link",
    component: MovieLink,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
