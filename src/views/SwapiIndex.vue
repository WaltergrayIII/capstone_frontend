<template>
  <div class="home">
    <div class="row">
      
      <h1>Characters</h1>
      <div v-for="person in people">
        <div class="col-sm-6 col-md-4">
          <div class="thumbnail">
            <div class="caption">
              <h3>{{ person.name }}</h3>
              <router-link
                v-bind:to="`/swapishow/${person.url.split('/').slice(-2).slice(0,-1)}`"
              >More details</router-link>
            </div>
          </div>
        </div>
      </div>

      <h1>Planets</h1>
      <div v-for="planet in planets">
        <div class="col-sm-6 col-md-4">
          <div class="thumbnail">
            <div class="caption">
              <h3>{{ planet.name }}</h3>
              <router-link v-bind:to="`/swapishow/${planet.name}`">More details</router-link>
            </div>
          </div>
        </div>
      </div>

      <h1>Films</h1>
      <div v-for="film in films">
        <div class="col-sm-6 col-md-4">
          <div class="thumbnail">
            <div class="caption">
              <h3>{{ film.title }}</h3>
              <router-link v-bind:to="`/swapishow/${film.title}`">More details</router-link>
            </div>
          </div>
        </div>
      </div>

      <h1>Species</h1>
      <div v-for="specie in species">
        <div class="col-sm-6 col-md-4">
          <div class="thumbnail">
            <div class="caption">
              <h3>{{ specie.name }}</h3>
              <router-link v-bind:to="`/swapishow/${specie.name}`">More details</router-link>
            </div>
          </div>
        </div>
      </div>

      <h1>Vehicles</h1>
      <div v-for="vehicle in vehicles">
        <div class="col-sm-6 col-md-4">
          <div class="thumbnail">
            <div class="caption">
              <h3>{{ vehicle.name }}</h3>
              <router-link v-bind:to="`/swapishow/${vehicle.name}`">More details</router-link>
            </div>
          </div>
        </div>
      </div

      <h1>Starships</h1>
      <div v-for="starship in starships">
        <div class="col-sm-6 col-md-4">
          <div class="thumbnail">
            <div class="caption">
              <h3>{{ starship.name }}</h3>
              <router-link v-bind:to="`/swapishow/${starship.name}`">More details</router-link>
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
      people: [],
      planets: [],
      films: [],
    };
  },
  created: function() {
    this.indexPeople();
    this.indexPlanets();
    this.indexFilms();
    this.indexSpecies();
    this.indexVehicles();
    this.indexStarships();
  },
  methods: {
    indexPeople: function() {
      axios.get("https://swapi.dev/api/people").then(response => {
        console.log("Get all people: ", response);
        this.people = response.data.results;
      });
    },
    indexPlanets: function() {
      axios.get("https://swapi.dev/api/planets").then(response => {
        console.log("Get all planets: ", response);
        this.planets = response.data.results;
      });
    },
    indexFilms: function() {
      axios.get("https://swapi.dev/api/films").then(response => {
        console.log("Get all films: ", response);
        this.films = response.data.results;
      });
    },
    indexSpecies: function() {
      axios.get("https://swapi.dev/api/species").then(response => {
        console.log("Get all species: ", response);
        this.species = response.data.results;
      });
    },
    indexVehicles: function() {
      axios.get("https://swapi.dev/api/vehicles").then(response => {
        console.log("Get all Vehicles: ", response);
        this.vehicles = response.data.results;
      });
    },
    indexStarships: function() {
      axios.get("https://swapi.dev/api/starships").then(response => {
        console.log("Get all starships: ", response);
        this.starships = response.data.results;
      });
    },
  },
};
</script>