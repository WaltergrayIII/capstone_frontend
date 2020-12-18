<template>
  <div class="signup">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Show Off My Product</h1>
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
          <input type="text" class="form-control" v-model="imageUrl" />
        </div>
        <div class="form-group">
          <label>Approximate_value:</label>
          <input type="text" class="form-control" v-model="approximateValue" />
        </div>
        <div class="col-12">
          <label for="demo-category">Category</label>
          <select name="demo-category" id="demo-category">
            <option value="1">Action Figures</option>
            <option value="2">Star Wars Legos</option>
            <option value="3">Gadgets</option>
            <option value="4">Trading Cards</option>
            <option value="5">Posters</option>
          </select>
        </div>
        <div class="form-group">
          <label>Link if Selling:</label>
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
      ImageUrl: "",
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
        .post("/api/products", params)
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

<style scoped>
input {
  color: white;
  text-align: center;
}
div.signup {
  text-align: center;
}
select {
  text-align-last: center;
  text-align: center;
  -ms-text-align-last: center;
  -moz-text-align-last: center;
}
</style>