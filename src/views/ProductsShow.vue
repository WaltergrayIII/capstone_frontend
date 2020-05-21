<template>
  <div class="home">
    <section id="four" class="wrapper alt style1">
      <div class="inner">
        <h2 class="major">{{ product.name }}</h2>
        <section class="features">
          <article>
            <a href="#" class="image">
              <img class="product-image" v-bind:src="product.image_url" alt />
            </a>
            <h3 class="major">Approximate Value: ${{ product.approximate_value}}</h3>
            <p>{{ product.description}}</p>
            <div>
              <p>
                <a class="btn btn-primary" href>Link to Buy</a>
              </p>
            </div>
            <router-link to="/products">Back to all products</router-link>
          </article>
        </section>
        <ul class="actions"></ul>
      </div>
    </section>
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