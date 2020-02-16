  
<template>
  <div class="hello">

    <router-link
          class="nav-link"
          to="/"
        >
          Vers le menu
        </router-link>

        <router-link
          class="nav-link"
          to="favoris"
        >
          Vers les favoris
        </router-link>

<div class="row">
        <div
          v-for="film in info"
          :key="film.imdbID"
        >

          <ImageCard :film="film" />
        </div>
   
  </div>
  </div>
</template>

<script>
const axios = require('axios').default;
import ImageCard from "./../components/ImageCard.vue"
export default {
    name: 'HelloWorld',
    components:{
        ImageCard,
    },
    data() {
        return {
            info: null,
        }
    },
    mounted () {
        axios
            .get('http://www.omdbapi.com/?s=harry+potter&apikey=904eed5c')
            .then(response => (this.info = response.data.Search ))
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>