<template>
  <div class="home">
    <section id="four" class="wrapper alt style1">
      <div class="inner">
        <h1>Information Attributed by Swapi</h1>
        <h2 class="major">Characters</h2>
        <section class="features">
          <article v-for="person in people">
            <h3 class="major">{{ person.name }}</h3>
            <router-link
              v-bind:to="`/swapishow/${person.url.split('/').slice(-2).slice(0,-1)}`"
            >More details</router-link>
          </article>
        </section>
        <div class="inner">
          <h2 class="major">Planets</h2>
          <section class="features">
            <article v-for="planet in planets">
              <h3 class="major">{{ planet.name }}</h3>
              <router-link
                v-bind:to="`/swapishow/${planet.url.split('/').slice(-2).slice(0,-1)}`"
              >More details</router-link>
            </article>
          </section>
        </div>
        <div class="inner">
          <h2 class="major">Films</h2>
          <section class="features">
            <article v-for="film in films">
              <h3 class="major">{{ film.title }}</h3>
              <router-link v-bind:to="`/swapishow/${film.episode_id}`">More details</router-link>
            </article>
          </section>
        </div>
        <div class="inner">
          <h2 class="major">Species</h2>
          <section class="features">
            <article v-for="specie in species">
              <h3 class="major">{{ specie.name }}</h3>
              <router-link
                v-bind:to="`/swapishow/${specie.url.split('/').slice(-2).slice(0,-1)}`"
              >More details</router-link>
            </article>
          </section>
        </div>
        <div class="inner">
          <h2 class="major">Vehicles</h2>
          <section class="features">
            <article v-for="vehicle in vehicles">
              <h3 class="major">{{ vehicle.name }}</h3>
              <router-link
                v-bind:to="`/swapishow/${vehicle.url.split('/').slice(-2).slice(0,-1)}`"
              >More details</router-link>
            </article>
          </section>
        </div>
        <div class="inner">
          <h2 class="major">Starships</h2>
          <section class="features">
            <article v-for="starship in starships">
              <h3 class="major">{{ starship.name }}</h3>
              <router-link
                v-bind:to="`/swapishow/${starship.url.split('/').slice(-2).slice(0,-1)}`"
              >More details</router-link>
            </article>
          </section>
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