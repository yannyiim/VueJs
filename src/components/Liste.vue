<template>
  <div >

    <router-link
          class="nav-link"
          to="../home"
        >
          Vers la liste
        </router-link>

        <router-link
          class="nav-link"
          to="../favoris"
        >
          Vers les favoris
        </router-link>

        <button @click="handleFavorite(film)">Ajouter aux favoris</button>

    <h2>ID : {{ $route.params.id }}</h2>

   <h2>Titre : {{ post.Title }}</h2>
  <p> Année de sortie : {{ post.Year }}</p>
 <p>Age conseillé : {{ post.Rated }}</p>
  <p>Date de réalisation : {{ post.Released }}</p>
  <p>Durée du film : {{ post.Runtime }}</p>
   <p>Genre :{{ post.Genre }}</p>
   <p>Directeur :{{ post.Director }}</p>
   <p>Ecriture :{{ post.Writer }}</p>
  <p>Acteurs : {{ post.Actors }}</p>
  <p>Scenario : {{ post.Plot }}</p>
  <p>Pays : {{ post.Country }}</p>
  <p>Prix : {{ post.Awards }}</p>
  <p>Notes : {{ post.Ratings }}</p>
  <p>Note Metascore : {{ post.Metascore }}</p>
  <p>Date de sortie DVD : {{ post.DVD }}</p>
  <p>Type : {{ post.Type }}</p>
  <p>BoxOffice : {{ post.BoxOffice }}</p>
  <p>Production : {{ post.Production }}</p>

  </div>
</template>

<script>

const axios = require('axios').default;
export default {
    name: 'Liste',

     data() {
        return {
            post : null
        }
    },
    mounted () {
        axios
            .get('http://www.omdbapi.com/?i='+this.$route.params.id+'&apikey=904eed5c')
            .then((result) => {
                                 this.post = result.data;
                                  console.log(this.post);
                                })
    },
    
}

</script>

<style scoped>

</style>