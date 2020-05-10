<template>
  <div class="home">
    <h1>All products</h1>
    <div v-for="product in products">
      <h2>Name: {{ product.name }}</h2>
      <p>Description: {{ product.description }}</p>
      <p>Approximate_value: {{ product.approximate_value }}</p>
      <p>Link to Buy: {{ product.link }}</p>
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
    indexProducts: function() {
      axios.get("/api/products").then(response => {
        console.log("Get all products: ", response);
        this.products = response.data;
      });
    },
  },
};
</script>