<template>
  <div class="container">
    <h2>{{ product.name }}</h2>
    <p>{{ product.description }}</p>
    <p>Approximate Value: {{ product.approximate_value}}</p>
    <router-link v-bind:to="product.link">Link to Buy</router-link>
    <img v-bind:src="product.image_url" alt />
    <div>
      <router-link to="/products">Back to all products</router-link>
    </div>
    <div>
      <router-link v-bind:to="`/products/${product.id}/edit`">Edit product</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      product: {},
    };
  },
  created: function() {
    axios.get("/api/products/" + this.$route.params.id).then(response => {
      this.product = response.data;
    });
  },
  destroyProduct: function(product) {
    axios.delete("/api/products/" + product.id).then(response => {
      this.$router.push("/products");
    });
  },
};
</script>

<style scoped>
p {
  color: white;
}
</style>