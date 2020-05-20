<template>
  <div class="home">
    <section id="four" class="wrapper alt style1">
      <div class="inner">
        <h2 class="major">Everyones Cool Stuff</h2>
        <div v-for="product in products">
          <section class="features">
            <article rows="2">
              <a href="#" class="image">
                <img v-bind:src="product.image_url" alt />
              </a>
              <h3 class="major">{{ product.name }}</h3>
              <p>{{ product.description}}</p>
              <router-link v-bind:to="`/products/${product.id}`" class="special">More details</router-link>
            </article>
          </section>
          <ul class="actions"></ul>
        </div>
      </div>
    </section>
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
