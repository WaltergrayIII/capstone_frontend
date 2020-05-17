<template>
  <div class="home">
    <h1>All products</h1>
    <div class="row">
      <div v-for="product in products">
        <div class="col-sm-6 col-md-4">
          <div class="thumbnail">
            <img v-bind:src="product.image_url" alt />
            <div class="caption">
              <h3>{{ product.name }}</h3>
              <p>{{ product.description }}</p>
              <router-link v-bind:to="`/products/${product.id}`">More details</router-link>
            </div>
          </div>
        </div>
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
