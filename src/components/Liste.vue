<template>
  <div >
    <h2>Détails : {{ $route.params.id }}</h2>
    
   {{ info }}

  </div>
</template>

<script>

const axios = require('axios').default;
export default {
    name: 'Liste',

     data() {
        return {
            info: null,
        }
    },
    mounted () {
        axios
            .get('http://www.omdbapi.com/?i='+this.$route.params.id+'&apikey=904eed5c')
            .then(response => (this.info = response.data.Search ))
    },
}

</script>

<style scoped>

</style>