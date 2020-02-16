<template>
  <div>
    <h2>Projet VUEJS</h2>
      <router-link
          class="nav-link"
          to="home"
        >
          Vers la liste
        </router-link>

        <router-link
          class="nav-link"
          to="favoris"
        >
          Vers les favoris
        </router-link>
    

    
  </div>
</template>

<script>


export default {
    name: 'Debut',
    components:{
       
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