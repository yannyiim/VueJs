<template>
  <div class="card"
    
    img-alt="Image"
    img-top
    tag="article"
    style="center"
    img-height="250px"
    >

    <p>{{film.Title}}</p>

    <img :src=film.Poster>
    
  
    <div>
      {{ film.Year}}
    </div>

      <router-link
          class="nav-link"
          :to="`/detail/${film.imdbID}`" 
        >
          Details
        </router-link>
    
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default {
    name: 'ImageCardFavoris',
    props: {
        film: {
            type :Object,
            default: null
        },
        method: { 
            type: Function,
            default: null
        },
    },
    state: {
        favorites: ''
    },
    methods: {
        handleFavorite: function(event) {
            this.$store.commit('change', event)
        }
    }
}
</script>

<style>
</style>