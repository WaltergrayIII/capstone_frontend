<template>
  <div class="container">
    <h1>Edit product</h1>
    <form v-on:submit.prevent="updateproduct(product)">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>Name:
      <input type="text" v-model="product.name" />
      Description:
      <input type="text" v-model="product.description" />
      Image:
      <input type="text" v-model="product.image_url" />
      Approximate Value:
      <input type="text" v-model="product.approximate_value" />
      Category_id:
      <input type="text" v-model="product.category_id" />
      Link:
      <input type="text" v-model="product.link" />
      <input type="submit" value="Update" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      product: {},
      errors: [],
    };
  },
  created: function() {
    axios.get("/api/products/" + this.$route.params.id).then(response => {
      this.product = response.data;
    });
  },
  methods: {
    updateProducts: function(product) {
      var params = {
        Name: product.name,
        Description: product.description,
        Image_url: product.image_url,
        Link: product.link,
        Category_id: product.Category_id,
        Approximate_value: product.approximate_value,
      };
      axios
        .patch("/api/products/" + product.id, params)
        .then(response => {
          this.$router.push("/products");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>