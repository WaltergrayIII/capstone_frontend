<template>
  <div class="home">
    <h1>All Products</h1>
    <div v-for="product in products">
      <h2>Title: {{ product.name }}</h2>
      <p>Description: {{ product.description }}</p>
      <img v-bind:src="product.image" alt />
      <div>
        <router-link v-bind:to="`/products/${product.id}`">More details</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      products: [],
    };
  },
  created: function() {
    this.indexProducts();
  },
  methods: {
    indexproducts: function() {
      axios.get("/api/products").then(response => {
        console.log("Get all products: ", response);
        this.products = response.data;
      });
    },
  },
};
</script>