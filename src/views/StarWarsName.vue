<template>
<body class="name">
  <div class="wrapper">
    <div class="star-wars-logo">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/109450/star-wars-logo-outline.png" alt />
    </div>
    <div class="input-container">
      <form action="#" onsubmit="event.preventDefault();">
        <input type="text" placeholder="Your First Name" class="first" v-model="firstName" />
        <input type="text" placeholder="Your Last Name" class="last" v-model="lastName" />
        <input
          type="text"
          placeholder="Your Mother's Maiden Name"
          class="maiden"
          v-model="maidenName"
        />
        <input type="text" placeholder="Your Birth City" class="birth" v-model="birthCity" />
        <button class="submit" type="submit" v-on:click="submit">Trust the Force</button>
      </form>
    </div>
    <div class="result-container">
      <b class="result">Your Star wars Name is: {{ starWarsName }}</b>
    </div>
  </div>
</body>
</template>

<script>
export default {
  data: function() {
    return {
      firstName: "",
      lastName: "",
      birthCity: "",
      maidenName: "",
      starWarsName: "",
    };
  },
  created: function() {},
  methods: {
    submit: function() {
      var firstName = this.firstName,
        lastName = this.lastName,
        maidenName = this.maidenName,
        birthCity = this.birthCity,
        subFirst = lastName.substring(0, 3) + firstName.substring(0, 2),
        subLast = maidenName.substring(0, 2) + birthCity.substring(0, 3),
        starWarsName = subFirst + " " + subLast;

      this.starWarsName = starWarsName.toLowerCase();
    },
  },
};
</script>

<style lang="scss" scoped>
@color-gold: #e5b13a;
@color-submit: #e74c3c;

body {
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande",
    sans-serif;
  font-weight: 300;
  background: none;

  &:before {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
}

html {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.wrapper {
  position: relative;
  z-index: 5;
  width: 90%;
  max-width: 500px;
  padding: 20px;
  margin: 50px auto;
  overflow: hidden;
}

.star-wars-logo {
  margin-bottom: 20px;
  img {
    width: 100%;
  }
}

input {
  display: block;
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 18px;
}

button.submit {
  transition: background 0.2s ease;
  display: block;
  width: 100%;
  padding: 15px;
  background: gray;
  color: white;
  border: none;
  text-transform: uppercase;
  margin-bottom: 20px;

  &:hover {
    background: darken(blue, 10%);
  }
}

.result {
  display: block;
  font-size: 60px;
  line-height: 64px;
  text-align: center;
  text-transform: capitalize;
  color: red;
}
</style>
