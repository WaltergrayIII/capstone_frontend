<template>
  <div class="container">
    <h2>{{ person.name }}</h2>
    <p>Birth Year:{{ person.birth_year }}</p>
    <p>Eye Color: {{ person.eye_color }}</p>
    <p>Gender: {{ person.gender}}</p>
    <p>Hair Color:{{ person.hair_color}}</p>
    <p>Height: {{ person.height}}</p>
    <p>Mass: {{ person.mass}}</p>
    <p>Skin Color: {{ person.skin_color}}</p>
    <p v-show="planetloaded">Planet: {{ planet.name}}</p>
    <p>Species: {{ species.name}}</p>
    <p v-for="starship in starships">Starships Flown: {{ starship.name}}</p>
    <p v-for="vehicle in vehicles">Vehicles Used: {{ vehicle.name}}</p>
    <p v-for="film in films">Appeared in: {{ film.title }}</p>

    <div>
      <router-link to="/swapi">Back to all people</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      person: {},
      planet: {},
      planetloaded: false,
      films: [],
      filmloaded: false,
      species: {},
      speciesloaded: false,
      vehicles: [],
      vehiclesloaded: false,
      starships: [],
      starshipsloaded: false,
    };
  },
  created: function() {
    axios.get("https://swapi.dev/api/people/" + this.$route.params.id).then(response => {
      this.person = response.data;

      axios
        .get(
          "https://swapi.dev/api/planets/" +
            this.person.homeworld
              .split("/")
              .slice(-2)
              .slice(0, -1)
        )
        .then(response => {
          this.planet = response.data;
          this.planetloaded = !this.planetloaded;
        });
      this.person.films.forEach(film => {
        axios
          .get(
            "https://swapi.dev/api/films/" +
              film
                .split("/")
                .slice(-2)
                .slice(0, -1)
          )
          .then(response => {
            this.films.push(response.data);
          });
      });
      this.filmloaded = !this.filmloaded;

      this.person.species.forEach(species => {
        axios
          .get(
            "https://swapi.dev/api/species/" +
              species
                .split("/")
                .slice(-2)
                .slice(0, -1)
          )
          .then(response => {
            this.species = response.data;
          });
      });
      this.speciesloaded = !this.speciesloaded;

      this.person.vehicles.forEach(vehicle => {
        axios
          .get(
            "https://swapi.dev/api/vehicles/" +
              vehicle
                .split("/")
                .slice(-2)
                .slice(0, -1)
          )
          .then(response => {
            this.vehicles.push(response.data);
          });
      });
      this.vehiclesloaded = !this.vehiclesloaded;

      this.person.starships.forEach(starship => {
        axios
          .get(
            "https://swapi.dev/api/starships/" +
              starship
                .split("/")
                .slice(-2)
                .slice(0, -1)
          )
          .then(response => {
            this.starships.push(response.data);
          });
      });
      this.starshipsloaded = !this.starshipsloaded;
    });
  },
};
</script>

<style scoped>
p {
  color: white;
}
</style>