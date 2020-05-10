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
          <label>Image_url:</label>
          <input type="text" class="form-control" v-model="image_url" />
        </div>
        <div class="form-group">
          <label>:Approximate_value:</label>
          <input type="text" class="form-control" v-model="approximateValue" />
        </div>
        <div class="form-group">
          <label>Category ID:</label>
          <input type="text" class="form-control" v-model="categoryId" />
        </div>
        <div class="form-group">
          <label>Link:</label>
          <input type="text" class="form-control" v-model="link" />
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
      Name: "",
      Description: "",
      Image: "",
      ApproximateValue: "",
      CategoryId: "",
      Link: "",
      errors: [],
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        description: this.description,
        image_url: this.image_url,
        approximate_value: this.approximate_value,
        category_id: this.category_id,
        link: this.link,
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