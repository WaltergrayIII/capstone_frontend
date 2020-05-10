<template>
  <div class="signup">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>New Product</h1>
        <ul>
          <li class="text-danger" v-for="product in products">{{ product }}</li>
        </ul>
        <div class="form-group">
          <label>Name:</label>
          <input type="text" class="form-control" v-model="name" />
        </div>
        <div class="form-group">
          <label>Description:</label>
          <input type="text" class="form-control" v-model="description" />
        </div>
        <div class="form-group">
          <label>Image:</label>
          <input type="image" class="form-control" v-model="image" />
        </div>
        <div class="form-group">
          <label>:Approximate_value:</label>
          <input type="text" class="form-control" v-model="approximate_value" />
        </div>
        <div class="form-group">
          <label>Category ID:</label>
          <input type="text" class="form-control" v-model="category_id" />
        </div>

        <input type="submit" class="btn btn-primary" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      Title: "",
      Body: "",
      Image: "",
      errors: [],
    };
  },
  methods: {
    submit: function() {
      var params = {
        title: this.title,
        body: this.body,
        image: this.image,
      };
      axios
        .Product("/api/Products", params)
        .then(response => {
          this.$router.push("/Products");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>