<template>
  <div>
    <h2>Favoris</h2>
    <router-link
          class="nav-link"
          to="home"
        >
          Vers la liste
        </router-link>

        <router-link
          class="nav-link"
          to="/"
        >
          Vers le menu
        </router-link>

    <div class="container">
      <div class="row">
        <div
          v-for="film in favorites"
          :key="film.imdbID"
        >
          <ImageCard :film="film" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ImageCard from "./../components/ImageCard"

export default {
    name: 'Favoris',
    components:{
        ImageCard
    },
    data() {
        return {
            favorites: this.$store.getters.favorites ,
        }
    },
    mounted () {
        console.log(this.$store.getters.favorites)
    }
}
</script>

<style>
</style>